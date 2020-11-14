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

    res.status(201).json({
      message: 'User created.',
      user: newUser,
    });
  } catch (err) {
    console.log('Error in signup', err);
  }
};

// exports.signup = (req, res) => {
//   console.log(req.body);
//   res.end('Post successful');
// };
