const Car = require('../models/carModel');

exports.addCar = async (req, res, next) => {
    console.log(req.body);
    const { companyName, modelName, quantity } = req.body;

    const data = await Car.create({
        companyName,
        modelName,
        quantity
    });

    if (!data) {
        res.status(500).json({
            message: "failed to add car details!!",
        })
    }

    res.status(200).json({
        message: "successfully added car details!!",
        data,
    })
};

//getCarDetails
exports.getCarDetails = async (req, res, next) => {

  const data = await Car.find();

  if (!data) {
    res.status(500).json({
      message: 'failed to load car details!!',
    });
  }

  res.status(200).json({
    message: 'successfully loaded car details!!',
    data
  });
};


//getCarCompany
exports.getCarCompany = async (req, res, next) => {

    //fetching only companies 
    const data = await Car.find({}, { companyName: 1 });
    
   // console.log(data);

  if (!data) {
    res.status(500).json({
      message: 'failed to load companies name!!'
    });
  }

  res.status(200).json({
    message: 'successfully loaded car companies name!!',
    data
  });
};


//getCarModels
exports.getCarModels = async (req, res, next) => {
  //fetching only car models
  const data = await Car.find({}, { modelName: 1 });

  // console.log(data);

  if (!data) {
    res.status(500).json({
      message: 'failed to load cars model!!'
    });
  }

  res.status(200).json({
    message: 'successfully loaded cars model!!',
    data
  });
};
