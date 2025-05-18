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
      <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4 poster-glow"></div>
      <div className="card position-relative z-1 border-0 poster-card h-100">
        <Image
          src={imageUrl}
          alt={title}
          className="img-fluid rounded-4 poster-img"
          width={300}
          height={450}
          priority
          style={{ objectFit: 'cover', height: '100%' }}
        />

        <div className="position-absolute bottom-0 start-0 w-100 p-2 poster-gradient-overlay">
          <div className="d-none d-md-block text-white px-3 py-2">
            <h4 className="mb-0">{title}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePoster;
