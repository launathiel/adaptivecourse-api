/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable no-undef */
const bcrypt = require('bcryptjs');
User = require('../models/userModel');

const { registerValidation, loginValidation } = require('../validator/userValidation');

exports.postUserRegister = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    res.status(406);
    res.json({
      status: 'error',
      message: error.details[0].message,
    });
  }

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
  if (error) return res.status(400).send(error.details[0].message);
  // check if email exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Email not found!');
  // password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send('Invalid Password');

  res.send('logged in!');
  // try {
  // } catch (err) {
  //   res.status(404);
  //   res.json({
  //     status: 'error',
  //     message: err.message,
  //   });
  // }
};
