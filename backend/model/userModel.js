const mongoose = require("mongoose");
// const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    userName:{
        type:String,
        required:false
    },
    // passport-local-mongoose will add username and password fields
    dob: {
        type: Date,
        required: false
    },
    gender: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cfp:{
        type:String,
        required:true
    }
    // role: {
    //     type: String,
    //     required: true
    // }
});

const User = mongoose.model("user", userSchema);
module.exports = User