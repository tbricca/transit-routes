const mongoose = reuqire("mongoose");
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
    required: false
  },
  transitType: {
    type: String,
    requried: true
  },
  /// need to check how to input addresses into the database
  start: {
    type: [String],
    required: true
  },
  end: {
    type: [String],
    required: true
  },
  // should this be an array?
  stops: {
    type: [String],
    required: false
  },
  amenities: {
    type: [String],
    required: false
  },
  price: {
    type: number,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("journey", JourneySchema);
