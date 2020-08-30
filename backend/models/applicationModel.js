const mongoose = require('mongoose');
//  Pending to diferenciate a unique application with a combined company, position and date
const applicationSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, 'The application must have a company name.'],
  },
  position: {
    type: String,
    required: [true, 'The application must have a position name.'],
  },
  date: { type: Date, default: Date.now },
  source: {
    type: String,
    required: [true, 'The application must have a source name.'],
  },
  contact: String,
  link: String,
  description: String,
  //  Learn how to add new notes for the same application
  notes: [
    {
      date: { type: Date, default: Date.now },
      note: String,
    },
  ],
});

//  MODEL

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
