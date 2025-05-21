import mongoose, { Schema } from 'mongoose';

const castSchema = new Schema({
  name: { type: String, required: true },
  character: { type: String, required: true },
  image: { type: String, required: true },
});

const movieSchema = new Schema({
  imdbId: { type: String, required: true, unique: true }, 
  title: { type: String, required: true },
  year: String,
  rating: String,
  runtime: Number,
  trailer: String,
  plot: String,
  poster: String,
  genre: [{ type: String }],
  cast: [castSchema],
});

const Movie = mongoose.models.Movie || mongoose.model('Movie', movieSchema);
export default Movie;
