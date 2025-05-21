'use client';
import React from 'react';
import Image from 'next/image';
import '@/styles/movieInfo/MoviePoster.css';

type MoviePosterProps = {
  imageUrl: string;
  title: string;
};

const MoviePoster = ({ imageUrl, title }: MoviePosterProps) => {
  return (
    <div className="position-relative h-100">
      <div className="position-absolute top-0 start-0 w-100 h-100 poster-glow"></div>
      <div className="position-relative z-1 border-0 poster-card h-100 rounded-4 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          className="img-fluid poster-img"
          width={300}
          height={450}
          priority
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
        />
      </div>
    </div>
  );
};

export default MoviePoster;
