export type CastMember = {
  name: string;
  role: string;
  image: string;
};

export type Movie = {
  title: string;
  year: string;
  rating: string;
  runTime: string;
  description: string;
  posterImage: string;
  trailerVideoId: string;
  cast: CastMember[];
};
