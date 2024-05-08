const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    primary : {
        type : String,
        required : true
    },
    country: {
        type : String,
        required : true
    },
    state: {
        type : String,
        required : true
    },
    city: {
        type : String,
        required : true
    },
    zipcode: {
        type : Number,
        required : true
    },
    places: {
        type : String,
        required : true
    },
    images : {
        type : Array,
        required : false
    },
    description : {
        type : String,
        required : true
    },
    expenditure : {
        type : String,
        required : true
    },
    timings : {
        type : String,
        required : true
    }
    // cloudinary_id : {
    //     type : String,
    //     required : false
    // }
});

const Card = mongoose.model("card", cardSchema);
module.exports = Card