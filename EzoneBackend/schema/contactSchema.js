const mongoose = require('mongoose');
const { connectDatabase } = require('../database/db'); // adjust path if needed

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Use the same connection as cars
const { cars } = connectDatabase();
const ContactSchema = cars.model('ContactSchema', contactSchema);

module.exports = ContactSchema;
