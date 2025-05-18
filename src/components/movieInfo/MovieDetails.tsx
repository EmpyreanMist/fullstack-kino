'use client';
import React from 'react';
import '@/styles/movieInfo/MovieDetails.css';

type MovieDetailsProps = {
  title: string;
  year: string;
  rating: string;
  runTime: string;
  description: string;
  genres?: string[];
  onPlayTrailer?: () => void;
};

const MovieDetails = ({
  title,
  year,
  rating,
  runTime,
  description,
  genres = [],
  onPlayTrailer,
}: MovieDetailsProps) => {
  return (
    <div className="movie-details-card">
      <div className="movie-header">
        {/*---------genre section--------*/}
        <section>
          <h1 className="movie-title" style={{ fontSize: '1.8rem' }}>
            {title}
          </h1>
          <div className="d-flex align-items-center flex-wrap">
            <div className="meta-item">
              <i className="bi bi-calendar-event me-2"></i>
              <span>{year}</span>
            </div>
            <span className="meta-separator">•</span>
            <div className="meta-item">
              <i className="bi bi-clock me-2"></i>
              <span>{runTime} min</span>
            </div>
            <span className="meta-separator">•</span>
            <div className="meta-item rating">
              <i className="bi bi-star-fill me-2"></i>
              <span>{rating}</span>
            </div>
          </div>
        </section>
        {/*--------button section---------*/}
        <div className="action-buttons">
          <button onClick={onPlayTrailer} className="btn-trailer" aria-label="Play trailer">
            <i className="bi bi-play-circle-fill me-2"></i>
            Watch Trailer
          </button>
          <button className="btn-ticket">
            <i className="bi bi-ticket-perforated-fill me-2"></i>
            Book Tickets
          </button>
        </div>
      </div>
      {/*--------description section---------*/}
      <div className="movie-description">
        <p>{description}</p>
      </div>
      {/*---------movie info numbers---------*/}
      <div className="title-section">
        <div className="d-flex justify-content-center">
          <div className="movie-genres mb-2">
            {genres.map((genre, index) => (
              <span key={index} className="badge genre-badge me-2">
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/*------------Styles-----------*/}
    </div>
  );
};

export default MovieDetails;
