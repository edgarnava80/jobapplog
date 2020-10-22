const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'A username most be provided.'],
  },
  email: {
    type: String,
    required: [true, 'A valid email must be provided.'],
  },
  date: { type: Date, default: Date.now },
  password: {
    type: String,
    required: [true, 'A password must be provided.'],
  },
});

//  MODEL

const User = mongoose.model('User', userSchema);

module.exports = User;
