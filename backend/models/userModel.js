const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email.'],
    unique: [true, 'That email is already taken.'],
    lowercase: true,
    validate: [validator.isEmail, 'A valid email must be provided.'],
  },
  password: {
    type: String,
    required: [true, 'A password must be provided.'],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password.'],
    validate: {
      // This only works on CREATE or SAVE when updating!!
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same.',
    },
  },
  photo: String,
  date: { type: Date, default: Date.now },
});

//  MODEL
//    Pending try catch
userSchema.pre('save', async function (next) {
  //  This function will only run if password is created or modified
  if (!this.isModified('password')) return next();
  //  Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  //  Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
