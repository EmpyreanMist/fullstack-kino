'use client';
import React, { useState } from 'react';
import CastList from './CastList';

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
      <div className="mt-4 tabs-wrapper">
        <ul className="nav nav-pills modern-tabs">
          <li className="nav-item">
            <button
              className={`nav-link text-white px-4 ${activeTab === 'cast' ? 'active' : ''}`}
              onClick={() => setActiveTab('cast')}
            >
              <i className="bi bi-people-fill me-2"></i>
              Cast and Crew
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link text-white px-4 ${activeTab === 'Reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('Reviews')}
            >
              <i className="bi bi-star-fill me-2"></i>
              Reviews
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link text-white px-4 ${activeTab === 'Make review' ? 'active' : ''}`}
              onClick={() => setActiveTab('Make review')}
            >
              <i className="bi bi-pencil-fill me-2"></i>
              Write a Review
            </button>
          </li>
        </ul>
      </div>

      {/*---------Tab content----------*/}
      <div className="card bg-dark text-white border-0 shadow p-4 rounded-4 mt-3 tab-content-panel">
        {activeTab === 'cast' && <CastList cast={cast} />}

        {activeTab === 'Reviews' && (
          <div className="p-3 text-center">
            <h4>Reviews</h4>
            <p>Reviews section could be placed here.</p>
          </div>
        )}

        {activeTab === 'Make review' && (
          <div className="p-3 text-center">
            <h4>Add review</h4>
            <p>Commit your own review here to be posted on api</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .tabs-wrapper {
          margin-bottom: 20px;
        }
        .modern-tabs {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          gap: 10px;
          padding-bottom: 10px;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .modern-tabs::-webkit-scrollbar {
          display: none;
        }
        .modern-tabs .nav-link {
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .modern-tabs .nav-link:hover:not(.active) {
          background: rgba(255, 255, 255, 0.2);
        }
        .modern-tabs .nav-link.active {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          box-shadow: 0 5px 15px rgba(99, 102, 241, 0.5);
        }
        .tab-content-panel {
          background: rgba(33, 37, 41, 0.8);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default MovieTabs;
