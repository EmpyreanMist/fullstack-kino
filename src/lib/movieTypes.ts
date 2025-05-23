export type CastMember = {
  name: string;
  character: string;
  image: string;
};

export type GenreItem = string;

export type Movie = {
  _id?: string;
  imdbId?: string;
  title: string;
  year: string;
  rating: string;
  runTime?: string;
  plot: string;
  poster: string;
  trailer: string;
  genre: GenreItem[];
  cast: CastMember[];
};
