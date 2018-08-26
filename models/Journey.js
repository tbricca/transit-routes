const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// route name / company / transitType / start / end / stops / amenities / price

const JourneySchema = new Schema({
  routeName: {
    type: String,
    requried: true
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "companies"
  },
  website: {
    type: String,
    required: true
  },
  transitType: {
    type: String,
    requried: true
  },
  /// need to check how to input addresses into the database
  startAddress: [
    {
      address: String,
      required: true
    },
    {
      city: String,
      required: true
    },
    {
      state: String,
      required: true
    },
    {
      zip: String,
      required: true
    }
  ],
  startLatLng: [
    {
      lat: Number,
      required: true
    },
    {
      lng: Number,
      required: true
    }
  ],
  endAddress: [
    {
      address: String,
      required: true
    },
    {
      city: String,
      required: true
    },
    {
      state: String,
      required: true
    },
    {
      zip: String,
      required: true
    }
  ],
  endLatLng: [
    {
      lat: Number,
      required: true
    },
    {
      lng: Number,
      required: true
    }
  ],
  // here
  stopAddress: [
    {
      address: String
    },
    {
      city: String
    },
    {
      state: String
    },
    {
      zip: String
    }
  ],
  stopLatLng: [
    {
      lat: Number
    },
    {
      lng: Number
    }
  ],
  amenities: {
    type: [String]
  },
  price: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("journey", JourneySchema);
