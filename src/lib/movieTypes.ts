export type CastMember = {
  name: string;
  character: string;
  image: string;
};

export type GenreItem = {
  [key: string]: string;
};

export type Movie = {
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
