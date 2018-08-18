const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
});

module.exports = City = mongoose.model("cities", CitySchema);
