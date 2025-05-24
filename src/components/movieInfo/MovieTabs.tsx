'use client';
import React, { useState } from 'react';
import CastList from './CastList';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import '@/styles/movieInfo/MovieTabs.css';

type CastMember = {
  name: string;
  character: string;
  image: string;
};

type MovieTabsProps = {
  cast: CastMember[];
  movieId?: string;
};

const MovieTabs = ({ cast, movieId }: MovieTabsProps) => {
  const [activeTab, setActiveTab] = useState('cast');
  //-----refresh when new added-----
  const [refreshKey, setRefreshKey] = useState(0);

  //---handle switching tabs-----
  const handleSwitchToReviewForm = () => {
    setActiveTab('Make review');
  };

  const handleReviewSubmitted = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <>
      {/*------Tabs navigation---------*/}
      <div className="mt-4 tabs-container">
        <div className="modern-tabs-wrapper">
          <div
            className={`tab-item ${activeTab === 'cast' ? 'active' : ''}`}
            onClick={() => setActiveTab('cast')}
          >
            <div className="tab-icon">
              <i className="bi bi-people-fill"></i>
            </div>
            <span className="tab-label">Cast and Crew</span>
            {activeTab === 'cast' && <div className="active-indicator"></div>}
          </div>

          <div
            className={`tab-item ${activeTab === 'Reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('Reviews')}
          >
            <div className="tab-icon">
              <i className="bi bi-star-fill"></i>
            </div>
            <span className="tab-label">Reviews</span>
            {activeTab === 'Reviews' && <div className="active-indicator"></div>}
          </div>

          <div
            className={`tab-item ${activeTab === 'Make review' ? 'active' : ''}`}
            onClick={() => setActiveTab('Make review')}
          >
            <div className="tab-icon">
              <i className="bi bi-pencil-fill"></i>
            </div>
            <span className="tab-label">Make review</span>
            {activeTab === 'Make review' && <div className="active-indicator"></div>}
          </div>
        </div>
      </div>

      {/*---------Tab content----------*/}
      <div className="tab-content-panel p-4 rounded-4 mt-4">
        <div className="tab-content-header">
          <h2 className="tab-title">
            {activeTab === 'cast' && (
              <>
                <i className="bi bi-people-fill me-2"></i> Cast and Crew
              </>
            )}
            {activeTab === 'Reviews' && (
              <>
                <i className="bi bi-star-fill me-2"></i> Reviews
              </>
            )}
            {activeTab === 'Make review' && (
              <>
                <i className="bi bi-pencil-fill me-2"></i> Make review
              </>
            )}
          </h2>
        </div>

        <div className="tab-content-body">
          {activeTab === 'cast' && <CastList cast={cast} />}

          {activeTab === 'Reviews' && (
            <ReviewList
              key={refreshKey}
              movieId={movieId}
              onWriteReviewClick={handleSwitchToReviewForm}
            />
          )}

          {activeTab === 'Make review' &&
            (movieId ? (
              <ReviewForm movieId={movieId} onReviewSubmitted={handleReviewSubmitted} />
            ) : (
              <div className="alert alert-warning mt-3">
                <i className="bi bi-exclamation-triangle me-2"></i>
                Please select a movie to write a review
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MovieTabs;
