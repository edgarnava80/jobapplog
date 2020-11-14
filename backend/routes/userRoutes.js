const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

//router.route('/').post(userController.createUser);

//router.route('/:id').get(userController.getUserById);

//router.route('/:username&:password').get(userController.getUser);

router.route('/user').get(userController.getAllUsers).post(userController.validateUser);

module.exports = router;
