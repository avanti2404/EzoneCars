const mongoose = require('mongoose');
const { connectDatabase } = require('../database/db'); // adjust path if needed

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  resetToken: {
    type:String,
  },
  resetTokenExpiry: {
    type:Date
  }
});


const { cars } = connectDatabase(); // use the same connection as cars
const AdminSchema = cars.model('AdminSchema', adminSchema);

module.exports = AdminSchema;
