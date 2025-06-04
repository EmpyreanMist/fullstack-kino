'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  const [, setUserProfile] = useState<{ fullName?: string; email?: string } | null>(null);

  //----check for user logged in and get user profile------
  useEffect(() => {
    const getUserData = async () => {
      const supabase = createClient();
      const { data: sessionData } = await supabase.auth.getSession();
      const isUserLoggedIn = !!sessionData.session;
      setIsLoggedIn(isUserLoggedIn);

      if (isUserLoggedIn) {
        //----Fetch user profile data----
        try {
          const response = await fetch('/api/user');
          if (response.ok) {
            const userData = await response.json();
            if (userData.user) {
              setUserProfile(userData.user);
              setName(userData.user.fullName || userData.user.email || '');
            }
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    getUserData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError(
        isLoggedIn
          ? 'Your profile name is missing'
          : 'Please enter your name or login to your account'
      );
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
      {success && (
        <div className="alert alert-success">
          <i className="bi bi-check-circle me-2"></i> your review submitted, nicely done!
        </div>
      )}

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          {isLoggedIn ? (
            //-----lock input to be user data only-----
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={true}
                required
              />
              <span className="input-group-text bg-success text-white">
                <i className="bi bi-check-circle-fill"></i> Logged In
              </span>
            </div>
          ) : (
            //-------user not loged in------
            <div>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={submitting}
                placeholder="Enter your name"
                required
              />
              <div className="form-text mt-1">
                <span className="text-white">You are not logged in btw. </span>
                <Link href="/login" className="text-primary">
                  Login
                </Link>
                <span className="text-white"> to use your name and pic</span>
              </div>
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <div className="rating-selector d-flex flex-wrap">
            {[1, 2, 3, 4, 5].map(value => (
              <span
                key={value}
                className={`rating-star ${value <= rating ? 'active' : ''}`}
                onClick={() => setRating(value)}
              >
                <i className={`bi ${value <= rating ? 'bi-star-fill' : 'bi-star'}`}></i>
              </span>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="comment" className="form-label">
            What do you think about the movie?
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
