'use client';
import React from 'react';
import Image from 'next/image';

type CastMember = {
  name: string;
  role: string;
  image: string;
};

type CastListProps = {
  cast: CastMember[];
};

const CastList = ({ cast }: CastListProps) => {
  return (
    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-4">
      {cast.map((actor, index) => (
        <div key={index} className="col text-center cast-item">
          <div className="card h-100 border-0 bg-transparent cast-card">
            <div
              className="cast-image-container rounded-circle overflow-hidden mx-auto mb-3"
              style={{ width: '110px', height: '110px' }}
            >
              <Image
                src={actor.image}
                alt={actor.name}
                width={110}
                height={110}
                className="img-fluid cast-avatar"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  //---fallback-----
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = '/imageNotFound4v4';
                }}
              />
            </div>
            <div className="card-body p-1">
              <h6 className="card-title mb-1 fw-bold">{actor.name}</h6>
              <p className="card-text small text-light-emphasis">{actor.role}</p>
            </div>

            <style jsx>{`
              .cast-item {
                transition: transform 0.3s ease;
              }
              .cast-item:hover {
                transform: translateY(-5px);
              }
              .cast-image-container {
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                border: 3px solid rgba(255, 255, 255, 0.1);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                overflow: hidden;
              }
              .cast-item:hover .cast-image-container {
                box-shadow: 0 8px 25px rgba(255, 255, 255, 0.15);
                transform: scale(1.05);
              }
            `}</style>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CastList;
