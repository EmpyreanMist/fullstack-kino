'use client';
import React, { useRef, useEffect, useState, use } from 'react';
import { Movie } from '@/lib/movieTypes';
import MoviePoster from '@/components/movieInfo/MoviePoster';
import MovieTrailer from '@/components/movieInfo/MovieTrailer';
import MovieDetails from '@/components/movieInfo/MovieDetails';
import MovieTabs from '@/components/movieInfo/MovieTabs';

//-------youtube iframe interface--------
interface YouTubePlayer {
  playVideo: () => void;
}

type MoviePageProps = {
  params: Promise<{ id: string }> | { id: string };
};

export default function Page({ params }: MoviePageProps) {
  const resolvedParams = use(params as Promise<{ id: string }>);
  const movieId = resolvedParams.id;
  const playerRef = useRef<YouTubePlayer>(null as unknown as YouTubePlayer);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [movieData, setMovieData] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      if (!movieId) {
        setError('No movie ID provided');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(`/api/movies/${movieId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }

        const data = await response.json();

        setMovieData({
          _id: data.movie._id,
          imdbId: data.movie.imdbId,
          title: data.movie.title,
          year: data.movie.year,
          rating: data.movie.rating,
          runTime: data.movie.runtime,
          poster: data.movie.poster,
          trailer: data.movie.trailer,
          plot: data.movie.plot,
          genre: data.movie.genre,
          cast: data.movie.cast,
        });
      } catch (err) {
        console.error('Error fetching movie data:', err);
        setError('shit. This could happen when u try invalid movie ID, try coming back to this page from movies page instead');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [movieId]);

  //-------play trailer--------
  const playTrailer = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      playerRef.current?.playVideo();
    }, 800);
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border" role="status"></div>
        <p>Loading movie details...</p>
      </div>
    );
  }

  if (error) {
    return <div className="container mt-5 text-center alert alert-danger">{error}</div>;
  }

  if (!movieData) {
    return (
      <div className="container mt-5 text-center alert alert-warning">Movie data not available</div>
    );
  }
  const onPlayerReady = (player: unknown) => {
    playerRef.current = player as YouTubePlayer;
  };

  return (
    <main className="pb-5 bg-dark text-white">
      <div className="position-relative mb-5">
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: `url(${movieData.poster})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(60px) brightness(0.3)',
          }}
        />

        <div className="position-relative z-1">
          {/*----------------youtube & poster section------------*/}
          <section className="py-5 text-white">
            <div className="container">
              <div className="row g-4">
                {/*-------movie poster--------*/}
                <div className="col-md-4 col-lg-3">
                  <MoviePoster imageUrl={movieData.poster} title={movieData.title} />
                </div>

                {/*-------Movie trailer---------*/}
                <div className="col-md-8 col-lg-9">
                  <MovieTrailer trailerVideoId={movieData.trailer} onPlayerReady={onPlayerReady} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/*---------Movie info section--------*/}
      <section className="container mt-4">
        <div className="row">
          <div className="col-12">
            <MovieDetails
              title={movieData.title}
              year={movieData.year}
              rating={movieData.rating}
              runTime={movieData.runTime || ''}
              description={movieData.plot}
              genres={movieData.genre}
              onPlayTrailer={playTrailer}
            />
          </div>
        </div>

        <div className="mt-4 mb-4">
          {/*-----tabs section--------*/}
          <MovieTabs cast={movieData.cast} movieId={movieData._id} />
        </div>
      </section>
    </main>
  );
}
