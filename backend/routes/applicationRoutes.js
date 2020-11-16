const express = require('express');
const applicationController = require('../controllers/applicationController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, applicationController.getAllApplications)
  .post(authController.protect, applicationController.createApplication);

router
  .route('/:id')
  .get(authController.protect, applicationController.getApplication)
  .patch(authController.protect, applicationController.updateApplication)
  .delete(authController.protect, applicationController.deleteApplication);

module.exports = router;
