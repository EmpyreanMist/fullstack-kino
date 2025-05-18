'use client';
import React, { useState } from 'react';
import CastList from './CastList';
import '@/styles/movieInfo/MovieTabs.css';

type CastMember = {
  name: string;
  role: string;
  image: string;
};

type MovieTabsProps = {
  cast: CastMember[];
};

const MovieTabs = ({ cast }: MovieTabsProps) => {
  const [activeTab, setActiveTab] = useState('cast');

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
        <div className="content-placeholder">
          <h3>Get review section</h3>
          <p>Here will be filled with reviews from the data base</p>
        </div>
          )}

          {activeTab === 'Make review' && (
        <div className="content-placeholder">
          <h3>Post review section</h3>
          <p>Here should making review section be placed</p>
        </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieTabs;
