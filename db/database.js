const mongoose = require('mongoose');
require('dotenv').config(); // .config() load process.env file


const connectDB = () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.MONGO_URI).then(data => {
          console.log(`Successfully connected DB at :${data.connection.host}`);
        });
    } catch (error) {
        console.log(`Error on connection : ${error.message}`);
    }
};

module.exports = connectDB;