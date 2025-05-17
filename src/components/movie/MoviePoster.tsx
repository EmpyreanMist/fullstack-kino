'use client';
import React from 'react';
import Image from 'next/image';

type MoviePosterProps = {
  imageUrl: string;
  title: string;
};

const MoviePoster = ({ imageUrl, title }: MoviePosterProps) => {
  return (
    <div className="card shadow h-100">
      <Image
        src={imageUrl}
        alt={title}
        className="img-fluid rounded-3"
        width={300}
        height={450}
        style={{ objectFit: 'cover', height: '100%' }}
      />
    </div>
  );
};

export default MoviePoster;
