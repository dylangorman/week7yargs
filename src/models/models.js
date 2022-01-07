const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },

  actor: {
    type: String,
    require: true,
  },
});

const Movie = new mongoose.model("Movie", movieSchema);

module.exports = Movie;
