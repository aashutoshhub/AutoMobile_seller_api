const mongoose = require('mongoose');
const validator = require('validator');

const bookingSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: [true, 'Please enter your email'],
      unique: true,
      validate: [validator.isEmail, 'Please enter a valid email']
    },
    phoneNo: {
      type: String,
      maxLength: [10, 'Phone number must be valid!!'],
      minLength: [10, 'Phone number must be valid!!'],
      required: true
    },
    carModel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car'
    },
    status: {
      type: String,
      default: 'booked'
    }
  },
  {
    timestamps: true
  }
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
