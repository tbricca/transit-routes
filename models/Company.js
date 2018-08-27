const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  social: {
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    instagram: {
      type: String
    },
    youtube: {
      type: String
    }
  },
  transitType: {
    type: String,
    required: true
  },
  operatingRegion: {
    type: String,
    required: true
  },
  headquarter: [
    {
      city: String,
      required: true
    },
    {
      state: String,
      required: true
    }
  ]
  // journeyName: {
  //   type: Schema.Types.ObjectId,
  //   ref: "journeys"
  // }
});

module.exports = mongoose.model("companies", CompanySchema);
