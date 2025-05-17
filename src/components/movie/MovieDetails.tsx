'use client';
import React from 'react';

type MovieDetailsProps = {
  title: string;
  year: string;
  rating: string;
  runTime: string;
  description: string;
  onPlayTrailer?: () => void;
};

const MovieDetails = ({
  title,
  year,
  rating,
  runTime,
  description,
  onPlayTrailer,
}: MovieDetailsProps) => {
  return (
    <div className="card bg-dark text-white border-0 shadow p-4 rounded-4 glass-effect">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3 gap-3">
        <h1 className="mb-0 fw-bold">{title}</h1>
        <button className="btn btn-primary rounded-3 px-4 py-2 animate-pulse">
          <i className="bi bi-ticket-perforated-fill me-2"></i> Book ticket now
        </button>
      </div>

      <p className="lead opacity-90 my-4">{description}</p>

      {/* Movie detail stats */}
      <div className="d-flex flex-wrap gap-5 mt-4 justify-content-center justify-content-md-start">
        <div className="text-center stats-item">
          <div className="fs-3 fw-bold">{year}</div>
          <div className="text-light-emphasis small text-uppercase">Year</div>
        </div>
        <div className="text-center stats-item">
          <div className="fs-3 fw-bold text-warning">{rating}</div>
          <div className="text-light-emphasis small text-uppercase">Ratings</div>
        </div>
        <div className="text-center stats-item">
          <div className="fs-3 fw-bold">{runTime} min</div>
          <div className="text-light-emphasis small text-uppercase">Run time</div>
        </div>
        <div className="text-center ms-auto d-none d-md-block">
          <button
            onClick={onPlayTrailer}
            className="btn btn-danger rounded-3 px-4 py-2 d-flex align-items-center gap-2"
            aria-label="Play trailer"
          >
            <i className="bi bi-play-circle-fill fs-5"></i>
            <span>Watch Trailer</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .glass-effect {
          background: rgba(33, 37, 41, 0.8);
          backdrop-filter: blur(10px);
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        .stats-item {
          position: relative;
        }
        .stats-item:not(:last-child):after {
          content: '';
          position: absolute;
          right: -2.5rem;
          top: 50%;
          transform: translateY(-50%);
          height: 30px;
          width: 1px;
          background: rgba(255, 255, 255, 0.2);
        }
        @media (max-width: 768px) {
          .stats-item:after {
            display: none;
          }
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(13, 110, 253, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(13, 110, 253, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default MovieDetails;
