const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    placeName: {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
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
});

const Card = mongoose.model("card", cardSchema);
module.exports = Card