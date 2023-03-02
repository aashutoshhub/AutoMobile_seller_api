const express = require('express');
const { bookingRequest, deleteBooking, getBookingDetails, updateBooking } = require('../controllers/bookingController');
const router = express.Router();

//for booking route
router.route('/booking').post(bookingRequest);
//for soft delete operation by updating status
router.route('/deletebooking/:id').patch(deleteBooking);
//for fetching booking details
router.route('/booking').get(getBookingDetails);
//to update booking 
router.route('/booking/:id').put(updateBooking);

module.exports = router;
