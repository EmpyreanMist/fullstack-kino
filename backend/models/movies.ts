import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  imdbId: { type: String, unique: true }, 
  title: String,
  poster: String,
  plot: String,
  year: String,
  rating: String 
});

const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);
export default Movie;
