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
    select: false,
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
  passwordChanged: Date,
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

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.validateChangedPassword = function (JWTTimestamp) {
  if (this.passwordChanged) {
    const changedTimestamp = parseInt(
      this.passwordChanged.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
