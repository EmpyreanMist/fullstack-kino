'use client';
import React from 'react';
import Image from 'next/image';

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

      <style jsx>{`
        .poster-card {
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
        }
        .poster-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.9);
        }
        .poster-gradient-overlay {
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
          border-radius: 0 0 16px 16px;
        }
        .poster-glow {
          background: radial-gradient(
            circle at 50% 50%,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 60%
          );
          filter: blur(20px);
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default MoviePoster;
