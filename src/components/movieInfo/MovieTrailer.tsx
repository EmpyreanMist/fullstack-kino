'use client';
import React, { useRef } from 'react';
import YouTube, { YouTubeProps, YouTubeEvent } from 'react-youtube';
import '@/styles/movieInfo/MovieTrailer.css';

type MovieTrailerProps = {
  trailerVideoId: string;
  onPlayerReady?: (player: unknown) => void;
};

const MovieTrailer = ({ trailerVideoId, onPlayerReady }: MovieTrailerProps) => {
  const playerRef = useRef<YouTubeEvent['target']>(null);

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      enablejsapi: 1,
    },
  };

  const onReady = (event: YouTubeEvent) => {
    playerRef.current = event.target;
    event.target.pauseVideo();

    if (onPlayerReady) {
      onPlayerReady(playerRef.current);
    }
  };

  return (
    <div className="movie-trailer-container">
      <div className="movie-trailer-video">
        <YouTube videoId={trailerVideoId} opts={opts} onReady={onReady} />
      </div>
    </div>
  );
};

export default MovieTrailer;
