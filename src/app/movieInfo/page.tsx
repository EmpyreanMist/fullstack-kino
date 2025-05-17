'use client';
import React, { useState, useRef } from 'react';
import YouTube, { YouTubeProps, YouTubeEvent } from 'react-youtube';
import Image from 'next/image';

export default function Page() {
  const [activeTab, setActiveTab] = useState('cast');
  const playerRef = useRef<any>(null);

  //--------Youtube frame---------
  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
      enablejsapi: 1,
    },
  };

  //----------Movie trailer id-------------
  const trailerVideoId = 'HUECWi5pX7o';

  const onReady = (event: YouTubeEvent) => {
    playerRef.current = event.target;
    event.target.pauseVideo();
  };

  //----------------Movie data----------
  const movieData = {
    title: 'Amélie',
    year: '2010',
    rating: '8.3',
    runTime: '93',
    description:
      'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
    cast: [
      { name: 'Audrey Tautou', role: 'Amélie Poulain', image: '/placeholder/1.jpeg' },
      { name: 'Mathieu Kassovitz', role: 'Nino Quincampoix', image: '/placeholder/2.jpeg' },
      { name: 'Rufus', role: 'Raphaël Poulain', image: '/placeholder/3.jpeg' },
      { name: 'Jamel Debbouze', role: 'Lucien', image: '/placeholder/4.jpeg' },
      { name: 'Isabelle Nanty', role: 'Georgette', image: '/placeholder/5.jpeg' },
    ],
  };

  return (
    <main className="pb-5">
      {/*-------------------youtube frame & movie poster-----------*/}
      <section className="py-4 text-white">
        <div className="container">
          <div className="row g-4">
            {/*--------movie poster----------*/}
            <div className="col-md-4 col-lg-3">
              <div className="card shadow h-100">
                <Image
                  src="/placeholder/joker.jpeg"
                  alt={movieData.title}
                  className="img-fluid rounded-3"
                  width={300}
                  height={450}
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </div>
            </div>

            {/*----------Youtube frame--------*/}
            <div className="col-md-8 col-lg-9">
              <div className="ratio ratio-16x9 shadow rounded-3 overflow-hidden h-100">
                <YouTube videoId={trailerVideoId} opts={opts} onReady={onReady} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*--------------------Movie info section---------------------*/}
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="card shadow p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className="mb-0">
                  {movieData.title}
                </h1>
                <button
                  className="btn btn-danger"
                >
                  <i className="bi bi-ticket-fill"></i> Buy ticket
                </button>
              </div>

              <p className="lead">{movieData.description}</p>

              {/*----------Move detail numbers---------*/}
              <div className="d-flex gap-4 mt-4">
                <div className="text-center">
                  <div className="fs-3 fw-bold">{movieData.year}</div>
                  <div className="text-muted small">Year</div>
                </div>
                <div className="text-center">
                  <div className="fs-3 fw-bold">{movieData.rating}</div>
                  <div className="text-muted small">Ratings</div>
                </div>
                <div className="text-center">
                  <div className="fs-3 fw-bold">{movieData.runTime}</div>
                  <div className="text-muted small">Run time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*------Tabs navigation-----------*/}
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

        {/*---------tabs content-------------*/}
        <div className="card shadow p-4 mt-1">
          {activeTab === 'cast' && (
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
              {movieData.cast.map((actor, index) => (
                <div key={index} className="col text-center">
                  <div className="card h-100 border-0">
                    <div
                      className="rounded-circle overflow-hidden mx-auto mb-2"
                      style={{ width: '100px', height: '100px' }}
                    >
                      <Image
                        src={actor.image}
                        alt={actor.name}
                        width={100}
                        height={100}
                        className="img-fluid"
                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                          //--------Fallback pic----------
                          const target = e.currentTarget as HTMLImageElement;
                          target.src = '/placeholder/imageNotFound.jpeg';
                        }}
                      />
                    </div>
                    <div className="card-body p-1">
                      <h6 className="card-title mb-0">{actor.name}</h6>
                      <p className="card-text small text-muted">{actor.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

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
      </div>
    </main>
  );
}
