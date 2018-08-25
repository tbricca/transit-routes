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
    ref: "journeys"
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
      lat: number,
      required: true
    },
    {
      lng: number,
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
      lat: number,
      required: true
    },
    {
      lng: number,
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
      lat: number
    },
    {
      lng: number
    }
  ],
  amenities: {
    type: [String]
  },
  price: {
    type: number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("journey", JourneySchema);
