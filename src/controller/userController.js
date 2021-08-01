/* eslint-disable no-undef */
User = require('../models/userModel');

exports.postUserRegister = async (req, res) => {
  const user = new User();
  user.firstname = req.body.firstname;
  user.lastname = req.body.lastname;
  user.email = req.body.email;
  user.username = req.body.username;
  user.password = req.body.password;
  user.phoneNumber = req.body.phoneNumber;
  user.address.street = req.body.address.street;
  user.address.city = req.body.address.city;
  user.address.zipCode = req.body.address.zipCode;
  try {
    const saveUserRegister = await user.save();
    res.status(200);
    res.json({
      message: 'new user created!',
      data: saveUserRegister,
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
    res.status(200);
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
