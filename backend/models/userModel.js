const mongoose = require('mongoose');
const validator = require('validator')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email.'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'A valid email must be provided.']
  },
  password: {
    type: String,
    required: [true, 'A password must be provided.'],
    minlength: 8
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password.'],
  },
  photo: String,
  date: { type: Date, default: Date.now },
});

//  MODEL

const User = mongoose.model('User', userSchema);

module.exports = User;
