'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '@/styles/movieInfo/ReviewList.css';

type Review = {
  _id: string;
  movieId: string;
  name: string;
  rating: number;
  comment: string;
  loggedIn: boolean;
  profileImageId: string;
  createdAt: string;
};

type ReviewListProps = {
  movieId?: string;
};

const ReviewList = ({ movieId }: ReviewListProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const url = movieId ? `/api/review?movieId=${movieId}` : '/api/review';

        console.log('Fetching reviews from:', url);
        console.log('Movie ID:', movieId);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }

        const data = await response.json();
        console.log('Reviews data:', data);
        const reviewsData = data.reviews || [];
        setReviews(reviewsData);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Could not load reviews. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return <div className="text-center p-4">Loading reviews...</div>;
  }

  if (error) {
    return <div className="text-center text-danger p-4">{error}</div>;
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center p-4">
        <div className="empty-review-state">
          <i className="bi bi-chat-left-text fs-1 mb-3 text-secondary"></i>
          <h5>No reviews yet</h5>
          <p className="text-muted">Be the first to share your thoughts about this movie!</p>
          {movieId && (
            <button
              className="btn btn-outline-primary mt-2"
              onClick={() =>
                document.querySelector('.tab-item:nth-child(3)')?.dispatchEvent(new Event('click'))
              }
            >
              <i className="bi bi-pencil-fill me-2"></i>
              Write a Review
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="reviews-container">
      {reviews.map(review => (
        <div key={review._id} className="review-card">
          <div className="review-header">
            <div className="user-info">
              <div className="profile-image">
                {review.profileImageId ? (
                  <Image
                    src={`/${review.profileImageId}.png`}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-circle"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = '/imageNotFound4v4.png';
                    }}
                  />
                ) : (
                  <div className="default-avatar">{review.name.charAt(0).toUpperCase()}</div>
                )}
              </div>
              <div>
                <h5 className="user-name">{review.name}</h5>
                <p className="review-date">{formatDate(review.createdAt)}</p>
              </div>
            </div>
            <div className="review-rating">
              <span>{review.rating}</span>
              <i className="bi bi-star-fill text-warning ms-1"></i>
            </div>
          </div>
          <div className="review-content">
            <p>{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
