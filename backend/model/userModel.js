const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    userName:String,
    // passport-local-mongoose will add username and password fields
    dob: Date,
    gender: String,
    pincode: Number,
    phone: String,
    email:String,
    password:String,
    confirmPassword:String
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("user", userSchema);

module.exports = User