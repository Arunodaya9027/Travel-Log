const mongoose = require("mongoose");
// const passportLocalMongoose = require('passport-local-mongoose');

const sessionSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : true
    },
    status: {
        type: Boolean,
        required: true
    },
    startTime : {
        type : Date,
        required : true
    },
    endTime : {
        type : Date,
        required : false
    },
});

const Session = mongoose.model("session", sessionSchema);
module.exports = Session