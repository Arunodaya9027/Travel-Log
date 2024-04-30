const mongoose = require("mongoose");

const exploreSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    // required : true
  },
});

const Explore = mongoose.model("explore", exploreSchema);
module.exports = Explore;
