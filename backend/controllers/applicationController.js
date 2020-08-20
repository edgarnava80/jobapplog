const Application = require('../models/applicationModel');

exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find();

    res.status(200).json({
      status: 'exito',
      results: applications.length,
      data: {
        applications,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'There was a problem!',
    });
  }
};

exports.getApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    res.status(200).json({
      status: 'exito',
      data: {
        application,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'There was a problem!',
    });
  }
};

exports.createApplication = async (req, res) => {
  try {
    console.log(req.body);
    const newApplication = await Application.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        application: newApplication,
      },
    }); // 201 = Created
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      status: 'success',
      data: {
        application,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'There was a problem!',
    });
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'exito',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'There was a problem!',
    });
  }
};
