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
    <div className="card shadow p-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="mb-0">{title}</h1>
        <button className="btn btn-danger" onClick={onPlayTrailer}>
          <i className="bi bi-play-fill"></i> Play Trailer
        </button>
      </div>

      <p className="lead">{description}</p>

      {/* Movie detail numbers */}
      <div className="d-flex gap-4 mt-4">
        <div className="text-center">
          <div className="fs-3 fw-bold">{year}</div>
          <div className="text-muted small">Year</div>
        </div>
        <div className="text-center">
          <div className="fs-3 fw-bold">{rating}</div>
          <div className="text-muted small">Ratings</div>
        </div>
        <div className="text-center">
          <div className="fs-3 fw-bold">{runTime}</div>
          <div className="text-muted small">Run time</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
