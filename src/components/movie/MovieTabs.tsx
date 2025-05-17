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
      <div className="mt-4">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'cast' ? 'active' : ''}`}
              onClick={() => setActiveTab('cast')}
            >
              Cast and Crew
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'Reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('Reviews')}
            >
              Reviews
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === 'Make review' ? 'active' : ''}`}
              onClick={() => setActiveTab('Make review')}
            >
              Make review
            </button>
          </li>
        </ul>
      </div>

      {/*---------Tab content----------*/}
      <div className="card shadow p-4 mt-1">
        {activeTab === 'cast' && <CastList cast={cast} />}

        {activeTab === 'Reviews' && (
          <div className="p-3 text-center">
            <h4>Reviews</h4>
            <p>Reviews section could be placed here.</p>
          </div>
        )}

        {activeTab === 'Make review' && (
          <div className="p-3">
            <h4>Add review</h4>
            <p>Commit your own review here to be posted on api</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieTabs;
