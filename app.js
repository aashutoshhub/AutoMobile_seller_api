const express = require('express');
const app = express();
const carRoute = require('./routes/carRoute');
const bookingRoute = require('./routes/bookingRoute');

app.use(express.json());

app.use('/api/inovact', carRoute);
app.use('/api/inovact',bookingRoute)



app.get('/', (req, res) => {
  res.send('Api calling!!');
});


module.exports = app;