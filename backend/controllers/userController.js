const User = require('../models/userModel');

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: 'exito',
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'There was a problem getting the user by id!',
    });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: 'exito',
      results: applications.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'There was a problem!',
    });
  }
};

exports.validateUser = async (req, res) => {
  try {
    console.log('Body: ', req.body);
    // const user = await User.find({
    //   username: req.params.username,
    //   password: req.params.password,
    // });
    // const user = await User.find({
    //   username: req.body.username,
    //   password: req.body.password,
    // });

    res.status(200).json({
      status: 'exito',
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: 'fail',
      message: `There was an error! ${err.message}`,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
