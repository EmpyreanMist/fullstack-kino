import mongoose, { Schema, Document } from 'mongoose';

export interface IMovie extends Document {
  imdbId: string;
  title: string;
  poster: string;
  plot: string;
  year: string;
  rating: string;
}

const movieSchema: Schema = new Schema({
  imdbId: { type: String, unique: true },
  title: { type: String, required: true },
  poster: { type: String, required: true },
  plot: { type: String, required: true },
  year: { type: String, required: true },
  rating: { type: String, required: true },
});

const Movie = mongoose.models.Movie || mongoose.model<IMovie>('Movie', movieSchema);
export default Movie;
