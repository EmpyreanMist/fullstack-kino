'use client';
import React, { useState, useEffect } from 'react';
import '@/styles/movieInfo/ReviewForm.css';
import { createClient } from '@/lib/supabase/client';

type ReviewFormProps = {
  movieId: string;
  onReviewSubmitted?: () => void;
};

const ReviewForm = ({ movieId, onReviewSubmitted }: ReviewFormProps) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //----chack for user loged in ------
  useEffect(() => {
    const checkLoginStatus = async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
    };

    checkLoginStatus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!comment.trim()) {
      setError('Please enter a comment');
      return;
    }

    try {
      setSubmitting(true);
      setError('');

      const reviewData = {
        movieId,
        name,
        rating,
        comment,
        loggedIn: isLoggedIn,
        profileImageId: isLoggedIn ? 'avatar' : 'guest',
      };

      const response = await fetch('/api/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }

      setSuccess(true);
      setName('');
      setRating(5);
      setComment('');

      if (onReviewSubmitted) {
        onReviewSubmitted();
      }

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (err) {
      console.error('Error submitting review:', err);
      setError('Could not submit review. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="review-form-container">
      {success && <div className="alert alert-success">The review is submited, Nicely done!</div>}

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            disabled={submitting}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <div className="rating-selector">
            {[1, 2, 3, 4, 5].map(value => (
              <span
                key={value}
                className={`rating-star ${value <= rating ? 'active' : ''}`}
                onClick={() => setRating(value)}
              >
                <i className="bi bi-star-fill"></i>
              </span>
            ))}
            <span className="ms-2">({rating}/5)</span>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            What do you think about the moviee?
          </label>
          <textarea
            className="form-control"
            id="comment"
            rows={4}
            value={comment}
            onChange={e => setComment(e.target.value)}
            disabled={submitting}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Submitting...
            </>
          ) : (
            'Submit review'
          )}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
