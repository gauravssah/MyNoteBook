const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017";
// const mongoURI = "mongodb://127.0.0.1:27017";
const mongoURI = "mongodb+srv://gauravshonik37:Gauravsah@cluster0.wxxd7fp.mongodb.net/";


const connectToMongo = () => {

    mongoose.connect(mongoURI);
    console.log("Connected to MongoDB Successfully!");

}

module.exports = connectToMongo;


