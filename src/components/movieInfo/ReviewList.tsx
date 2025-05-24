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
  onWriteReviewClick?: () => void;
};

const ReviewList = ({ movieId, onWriteReviewClick }: ReviewListProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

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
            <button className="btn btn-outline-primary mt-2" onClick={onWriteReviewClick}>
              <i className="bi bi-pencil-fill me-2"></i>
              Write a Review
            </button>
          )}
        </div>
      </div>
    );
  }

  //----Calculate pagination---
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  //----Handle page changes------
  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      <div className="reviews-container">
        {currentReviews.map(review => (
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
                  <h5 className="user-name">
                    {review.name}
                    {review.loggedIn ? (
                      <span className="member-badge ms-2">Member</span>
                    ) : (
                      <span className="guest-badge ms-2">Guest</span>
                    )}
                  </h5>
                  <p className="review-date">{formatDate(review.createdAt)}</p>
                </div>
              </div>
              <div className="review-rating">
                {[...Array(5)].map((_, index) => (
                  <i
                    key={index}
                    className={`bi ${
                      index < review.rating ? 'bi-star-fill' : 'bi-star'
                    } text-warning`}
                  ></i>
                ))}
              </div>
            </div>
            <div className="review-content">
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>

      {/*-----------Pagination controls-----*/}
      {totalPages > 1 && (
        <div className="pagination-controls mt-4 d-flex justify-content-between align-items-center">
          <div className="pagination-info">
            Page {currentPage} of {totalPages} ({reviews.length} reviews)
          </div>
          <div className="buttons">
            <button
              className="btn btn-sm btn-outline-light me-2"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <i className="bi bi-chevron-left"></i> Previous
            </button>
            <button
              className="btn btn-sm btn-outline-light"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewList;
