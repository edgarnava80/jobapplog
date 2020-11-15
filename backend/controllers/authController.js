const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      photo: req.body.photo,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(201).json({
      message: 'User created.',
      token,
      data: { user: newUser },
    });
  } catch (err) {
    console.log('Error in signup', err);
    res.status(400).json({
      message: 'There was an error',
      error: err,
    });
  }
};

exports.login = (req, res, next) => {
  const { email, password } = req.body;
  // 1) Check if email and password exist

  // 2) Check if email and password are correct

  // 3) Send token to the user
};
