const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      photo: req.body.photo,
    });

    const token = createToken(newUser._id);

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

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  // 1) Check if email and password exist
  if (!email || !password)
    return next(
      res.status(400).json({
        message: 'Please provide email and password',
      })
    );
  // 2) Check if email and password are correct
  const user = await User.findOne({ email: email }).select('+password');
  console.log(user);

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(
      res.status(401).json({
        message: 'Incorrect email or password.',
      })
    );
  }

  // 3) Send token to the user
  const token = createToken(user._id);
  res.status(200).json({
    status: 'Success',
    token,
  });
};

exports.protect = async (req, res, next) => {
  // 1) Verify existence of token
  let token;
  console.log(req.headers);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    console.log(token);
    return next(
      res.status(401).json({
        message: 'Session expired.',
      })
    );
  }
  // 2) Verify if token is valid and not manipulated
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // 3) Check if user has not been deleted
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      res.status(401).json({
        message: 'Invalid user.',
      })
    );
  }
  // 4) Check if user changed password after JWT was issued
  if (currentUser.validateChangedPassword(decoded.iat)) {
    return next(
      res.status(401).json({
        message: 'Password recently changed, please log in again.',
      })
    );
  }
  // Grant access to protected route
  req.user = currentUser;
  next();
};
