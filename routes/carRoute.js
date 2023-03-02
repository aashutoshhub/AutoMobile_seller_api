const express = require('express');
const { addCar, getCarDetails, getCarCompany, getCarModels } = require('../controllers/carController');
const router = express.Router();

router.route('/car').post(addCar);
router.route('/car').get(getCarDetails);
router.route('/car/company').get(getCarCompany);  
router.route('/car/model').get(getCarModels);


module.exports = router;

