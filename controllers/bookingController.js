const Booking = require('../models/bookingModel');

//booking
exports.bookingRequest = async (req, res, next) => {
  const { email, phoneNo, carModel } = req.body;

  const data = await Booking.create({
    email,
    phoneNo,
    carModel
  });

  if (!data) {
    res.status(500).json({
      message: 'Failed to order booking!!'
    });
  }

  res.status(201).json({
    message: 'successfully created!!',
    data
  });
};

//deleteBooking
exports.deleteBooking = async (req, res, next) => {
  console.log(req.params.id);

  const data = await Booking.findByIdAndUpdate(req.params.id, {
    status: 'cancelled'
  });

  //console.log(data);

  if (!data) {
    res.status(500).json({
      message: 'Failed to delete booking!!'
    });
  }

  res.status(201).json({
    message: 'successfully deleted!!',
    data
  });
};

//getBookingDetails
exports.getBookingDetails = async (req, res, next) => {
  
  const data = await Booking.find().populate(
    'carModel',
    'companyName quantity'
  );

  if (!data) {
    res.status(500).json({
      message: 'Failed to load booking details!!'
    });
  }

  res.status(201).json({
    message: 'successfully loaded booking details!!',
    data
  });
};

//updateBooking
exports.updateBooking = async (req, res, next) => {
  console.log(req.params.id);
  const { email, phoneNo, carModel } = req.body;

  const data = await Booking.findByIdAndUpdate(
    req.params.id,
    {
      email,
      phoneNo,
      carModel
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false
    }
  );

  //console.log(data);

  if (!data) {
    res.status(500).json({
      message: 'Failed to delete booking!!'
    });
  }

  res.status(201).json({
    message: 'successfully deleted!!',
    data
  });
};
