const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/travel-log')     
        console.log("Connected to MongoDB Successfully");  
    } catch (err) {
        console.log("Error: ", err);
    }
}

module.exports = connect;