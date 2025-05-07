const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  imdbId: { type: String, unique: true }, 
  title: String,
  poster: String,
  plot: String,
  year: String,
  rating: String 
});

module.exports = mongoose.model('Movie', movieSchema);
