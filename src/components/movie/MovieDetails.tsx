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
    <div className="movie-details-card">
      <div className="movie-header">
        <div className="title-section">
          <h1 className="movie-title">{title}</h1>
          <div className="movie-badges">
            <span className="badge bg-secondary me-2">{year}</span>
            <span className="badge bg-secondary me-2">{runTime} min</span>
            <span className="rating-badge">
              <i className="bi bi-star-fill me-1"></i>
              {rating}
            </span>
          </div>
        </div>
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

      <div className="movie-description">
        <p>{description}</p>
      </div>

      <div className="movie-stats">
        <div className="stat-item">
          <i className="bi bi-calendar-event stat-icon"></i>
          <div className="stat-content">
            <div className="stat-value">{year}</div>
            <div className="stat-label">Release Year</div>
          </div>
        </div>
        <div className="stat-item">
          <i className="bi bi-star stat-icon"></i>
          <div className="stat-content">
            <div className="stat-value">{rating}</div>
            <div className="stat-label">IMDb Rating</div>
          </div>
        </div>
        <div className="stat-item">
          <i className="bi bi-clock stat-icon"></i>
          <div className="stat-content">
            <div className="stat-value">{runTime} min</div>
            <div className="stat-label">Duration</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .movie-details-card {
          background: linear-gradient(
            to bottom right,
            rgba(30, 30, 45, 0.9),
            rgba(20, 20, 30, 0.85)
          );
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 2rem;
          color: white;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .movie-header {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .movie-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(to right, #ffffff, #e0e0e0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          letter-spacing: -0.5px;
        }

        .movie-badges {
          display: flex;
          align-items: center;
          margin-top: 0.5rem;
        }

        .rating-badge {
          background-color: #ffc107;
          color: #000;
          padding: 0.35rem 0.65rem;
          font-weight: 600;
          border-radius: 0.375rem;
          font-size: 0.85rem;
          display: inline-flex;
          align-items: center;
        }

        .action-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .btn-trailer,
        .btn-ticket {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .btn-trailer {
          background: linear-gradient(to right, #e50914, #b20710);
          color: white;
          box-shadow: 0 4px 15px rgba(229, 9, 20, 0.4);
        }

        .btn-trailer:hover {
          transform: translateY(-2px);
          box-shadow: 0 7px 20px rgba(229, 9, 20, 0.6);
        }

        .btn-ticket {
          background: linear-gradient(to right, #3498db, #2980b9);
          color: white;
          box-shadow: 0 4px 15px rgba(52, 152, 219, 0.4);
          animation: pulse 2s infinite;
        }

        .btn-ticket:hover {
          transform: translateY(-2px);
          box-shadow: 0 7px 20px rgba(52, 152, 219, 0.6);
        }

        .movie-description {
          margin: 1.5rem 0;
          padding: 1rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 1.1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
        }

        .movie-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: space-around;
          padding-top: 0.5rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .stat-icon {
          font-size: 1.75rem;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: rgba(255, 255, 255, 0.9);
        }

        .stat-content {
          text-align: left;
        }

        .stat-value {
          font-weight: 700;
          font-size: 1.2rem;
        }

        .stat-label {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 4px 15px rgba(52, 152, 219, 0.4);
          }
          50% {
            box-shadow: 0 4px 25px rgba(52, 152, 219, 0.7);
          }
          100% {
            box-shadow: 0 4px 15px rgba(52, 152, 219, 0.4);
          }
        }

        @media (min-width: 768px) {
          .movie-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default MovieDetails;
