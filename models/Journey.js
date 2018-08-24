const mongoose = reuqire("mongoose");
const Schema = mongoose.Schema;

// company / transitType / route name / start / end / stops / amenities / price

const JourneySchema = new Schema({
  routeName: {
    type: String,
    requried: true
  },
  compamy: {
    type: String,
    requried: true
  },
  transitType: {
    type: String,
    requried: true
  },
  start: {
    type: String,
    required: true
  },
  end: {
    type: String,
    required: true
  },
  stops: {
    type: String,
    required: false
  },
  amenities: {
    type: String,
    required: false
  },
  price: {
    type: String,
    required: false
  }
});
