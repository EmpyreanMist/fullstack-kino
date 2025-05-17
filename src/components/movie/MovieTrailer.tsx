'use client';
import React, { useRef } from 'react';
import YouTube, { YouTubeProps, YouTubeEvent } from 'react-youtube';

type MovieTrailerProps = {
  trailerVideoId: string;
  onPlayerReady?: (player: unknown) => void;
};

const MovieTrailer = ({ trailerVideoId, onPlayerReady }: MovieTrailerProps) => {
  const playerRef = useRef<any>(null);

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
    <div className="h-100">
      <div className="ratio ratio-16x9 shadow rounded-4 overflow-hidden h-100">
        <YouTube videoId={trailerVideoId} opts={opts} onReady={onReady} />
      </div>

      <style jsx>{`
        div {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
};

export default MovieTrailer;
