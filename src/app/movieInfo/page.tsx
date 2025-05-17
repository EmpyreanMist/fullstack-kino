'use client';
import React, { useRef } from 'react';
import { Movie } from '@/lib/movieTypes';
import MoviePoster from '@/components/movie/MoviePoster';
import MovieTrailer from '@/components/movie/MovieTrailer';
import MovieDetails from '@/components/movie/MovieDetails';
import MovieTabs from '@/components/movie/MovieTabs';

//-------youtube iframe interface--------
interface YouTubePlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  seekTo: (seconds: number) => void;
  mute: () => void;
  unMute: () => void;
}

export default function Page() {
  const playerRef = useRef<YouTubePlayer>(null as unknown as YouTubePlayer);

  //-------dummy data---------
  const movieData: Movie = {
    title: 'Transformers One',
    year: '2010',
    rating: '8.3',
    runTime: '93',
    posterImage: '/transformerOne.jpg',
    trailerVideoId: 'Xm42CdED8Kw',
    description:
      'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
    cast: [
      { name: 'Audrey Tautou', role: 'Amélie Poulain', image: '/imageNotFound4v4.png' },
      { name: 'Mathieu Kassovitz', role: 'Nino Quincampoix', image: '/imageNotFound4v4.png' },
      { name: 'Rufus', role: 'Raphaël Poulain', image: '/imageNotFound4v4.png' },
      { name: 'Jamel Debbouze', role: 'Lucien', image: '/imageNotFound4v4.png' },
      { name: 'Isabelle Nanty', role: 'Georgette', image: '/imageNotFound4v4.png' },
    ],
  };

  //-------play trailer--------
  const playTrailer = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.playVideo();
      }
    }, 800);
  };
  const onPlayerReady = (player: unknown) => {
    playerRef.current = player as YouTubePlayer;
  };

  return (
    <main className="pb-5 bg-dark text-white">
      {/* Hero section with backdrop effect */}
      <div className="position-relative mb-5">
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: `url(${movieData.posterImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(60px) brightness(0.3)',
            zIndex: 0,
          }}
        />

        {/* Content overlay */}
        <div className="position-relative z-1">
          {/*----------------youtube & poster section------------*/}
          <section className="py-5 text-white">
            <div className="container">
              <div className="row g-4">
                {/*-------movie poster--------*/}
                <div className="col-md-4 col-lg-3">
                  <MoviePoster imageUrl={movieData.posterImage} title={movieData.title} />
                </div>

                {/*-------Movie trailer---------*/}
                <div className="col-md-8 col-lg-9">
                  <MovieTrailer
                    trailerVideoId={movieData.trailerVideoId}
                    onPlayerReady={onPlayerReady}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/*---------Movie info section--------*/}
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <MovieDetails
              title={movieData.title}
              year={movieData.year}
              rating={movieData.rating}
              runTime={movieData.runTime}
              description={movieData.description}
              onPlayTrailer={playTrailer}
            />
          </div>
        </div>

        {/*-----tabs section--------*/}
        <div className="mt-4 mb-4">
          <MovieTabs cast={movieData.cast} />
        </div>
      </div>
    </main>
  );
}
