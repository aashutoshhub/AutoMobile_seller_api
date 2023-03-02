const mongoose = require('mongoose');


const carModelSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      trim: true,
      required: true,
      maxLength: [60, "Company name shouldn't exceed more than 60 characters"],
      minLength: [4, 'Compnay name should be more than 4 character']
    },
    modelName: {
      type: String,
      required: true,
      maxLength: [12, "Model name shouldn't exceed more than 12 characters"],
      minLength: [2, 'Model name should be more than 2 character'],
    },

    quantity: {
      type: Number,
      required: true,
      minLength: [1, 'Quantity cannot be less than 1'],
    }
  },
  {
    timestamps: true
  }
);

const Car = mongoose.model("Car", carModelSchema);

module.exports = Car;