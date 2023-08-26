const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURI = "mongodb://localhost:27017";
// const mongoURI = "mongodb://127.0.0.1:27017";
const mongoURI = process.env.MONGODB_URI;




const connectToMongo = () => {

    mongoose.connect(mongoURI);
    console.log("Connected to MongoDB Successfully!");
    console.log('MongoDB URI:', mongoURI);


}

module.exports = connectToMongo;


