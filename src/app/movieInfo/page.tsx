'use client';
import React, { useRef } from 'react';
import { Movie } from '@/lib/movieTypes';
import MoviePoster from '@/components/movieInfo/MoviePoster';
import MovieTrailer from '@/components/movieInfo/MovieTrailer';
import MovieDetails from '@/components/movieInfo/MovieDetails';
import MovieTabs from '@/components/movieInfo/MovieTabs';

//-------youtube iframe interface--------
interface YouTubePlayer {
  playVideo: () => void;
}

export default function Page() {
  const playerRef = useRef<YouTubePlayer>(null as unknown as YouTubePlayer);

  //-------movie data---------
  const movieData: Movie = {
    title: 'Transformers One',
    year: '2024',
    rating: '7.1',
    runTime: '104',
    posterImage: '/transformerOne.jpg',
    trailerVideoId: '0rmJXXKDrsM',
    description:
      'Discover how Optimus Prime and Megatron, once brothers-in-arms, became mortal enemies in this origin story set on their home planet Cybertron. The animated prequel explores the early relationship between these iconic Transformers before their bitter rivalry.',
    genres: ['Animation', 'Action', 'Adventure', 'Sci-Fi'],
    cast: [
      { name: 'Chris Hemsworth', role: 'Orion Pax / Optimus Prime', image: '/images.jpeg' },
      { name: 'Jon Hamm', role: 'Sentinel Prime', image: '/imageNotFound4v4.png' },
      { name: 'Brian Tyree Henry', role: 'D-16 / Megatron', image: '/c.jpg' },
      { name: 'Scarlett Johansson', role: 'Elita-1', image: '/imageNotFound4v4.png' },
      { name: 'Keegan-Michael Key', role: 'B-127 / Bumblebee', image: '/Tom-Hardy.jpg' },
      { name: 'Jon Hamm', role: 'Sentinel Prime', image: '/imageNotFound4v4.png' },
      { name: 'Brian Tyree Henry', role: 'D-16 / Megatron', image: '/c.jpg' },
      { name: 'Chris Hemsworth', role: 'Orion Pax / Optimus Prime', image: '/images.jpeg' },
      { name: 'Jon Hamm', role: 'Sentinel Prime', image: '/imageNotFound4v4.png' },
    ],
  };

  //-------play trailer--------
  const playTrailer = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      playerRef.current?.playVideo();
    }, 800);
  };
  const onPlayerReady = (player: unknown) => {
    playerRef.current = player as YouTubePlayer;
  };

  return (
    <main className="pb-5 bg-dark text-white">
      <div className="position-relative mb-5">
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: `url(${movieData.posterImage})`,
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
      <section className="container mt-4">
        <div className="row">
          <div className="col-12">
            <MovieDetails
              title={movieData.title}
              year={movieData.year}
              rating={movieData.rating}
              runTime={movieData.runTime}
              description={movieData.description}
              genres={movieData.genres}
              onPlayTrailer={playTrailer}
            />
          </div>
        </div>

        <div className="mt-4 mb-4">
          {/*-----tabs section--------*/}
          <MovieTabs cast={movieData.cast} />
        </div>
      </section>
    </main>
  );
}
