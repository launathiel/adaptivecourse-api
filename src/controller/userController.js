/* eslint-disable object-shorthand */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

User = require('../models/userModel');

const { registerValidation, loginValidation } = require('../validator/userValidation');

exports.postUserRegister = async (req, res) => {
  // Register Validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  // Check is email exist
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).json({ error: 'Email already exist!' });
  // Encrypt password
  const salt = await bcrypt.genSalt(10);
  const hasedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User();
  user.firstname = req.body.firstname;
  user.lastname = req.body.lastname;
  user.email = req.body.email;
  user.username = req.body.username;
  user.password = hasedPassword;
  user.phoneNumber = req.body.phoneNumber;
  user.address.street = req.body.address.street;
  user.address.city = req.body.address.city;
  user.address.zipCode = req.body.address.zipCode;
  try {
    const saveUserRegister = await user.save();
    res.status(200);
    res.json({
      message: 'new user created!',
      id: saveUserRegister._id,
    });
  } catch (err) {
    res.status(404);
    res.json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.user_id });
    res.status(201);
    res.json({
      status: 'success',
      message: 'user has been deleted',
    });
  } catch (err) {
    res.status(404);
    res.json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.postUserLogin = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  // check if email exist
  const user = await User.findOne({ email: req.body.email, username: req.body.username });
  if (!user) return res.status(400).json({ error: 'Username or email not found!' });
  // password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).json({ error: 'Invalid password' });
  // create and assign  a token
  const token = jwt.sign({
    _id: user._id,
    username: user.username,
  }, process.env.TOKEN_SECRET);

  res.header('auth-token', token).json({
    token: token,
    data: user.email,
  });
};

exports.testGetPost = async (req, res) => {
  const querry = { _id: req.user._id };
  User.findOne(querry, (err, user) => {
    if (err) return next(err);
    res.json({
      message: 'congrats! you have logged in!',
      _id: user._id,
      username: user.username,
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
    });
  });
};
