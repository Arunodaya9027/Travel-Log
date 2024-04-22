const mongoose = require('mongoose');

const exploreSchema = new mongoose.Schema({
    title : {
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
    }
});

const Explore = mongoose.model("explore", exploreSchema);
module.exports = Explore