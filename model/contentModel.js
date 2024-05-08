const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    holder: {
        type : String,
        required : true
    },
    country: {
        type : String,
        required : true
    },
    content1 : {
        type : String,
        required : true
    },
    content2 : {
        type : String,
        required : true
    },
    content3 : {
        type : String,
        required : true
    },
    content4 : {
        type : String,
        required : true
    },
    content5 : {
        type : String,
        required : true
    },
    content6 : {
        type : String,
        required : true
    }
});

const Content = mongoose.model("content", contentSchema);
module.exports = Content