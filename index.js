require('dotenv').config();
const app = require('./app');
const connectDB = require('./db/database');

const port = process.env.PORT || 1234;


//database connection 
connectDB();

app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
})