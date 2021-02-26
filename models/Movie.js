const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  title: {
    type: String,
    required:true
  },
  genre: {
    type: String,
    required:true
  },
  director: {
    type: String,
  },
  year: {
    type: Number,
  },
  review: {
    type: Number,
    required:true
  },
});

module.exports = mongoose.model("Movies", MovieSchema);
