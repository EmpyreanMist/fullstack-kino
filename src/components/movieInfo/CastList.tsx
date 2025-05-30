'use client';
import React from 'react';
import Image from 'next/image';
import '@/styles/movieInfo/CastList.css';

type CastMember = {
  name: string;
  character: string;
  image: string;
};

type CastListProps = {
  cast: CastMember[];
};

const CastList = ({ cast }: CastListProps) => {
  return (
    <>
      <div className="scroll-hint mb-2">
        <i className="bi bi-arrow-left-right me-2"></i>
        <span>Scroll to see all cast members</span>
      </div>

      <div className="cast-grid-container">
        <div className="cast-grid">
          {cast.map((actor, index) => (
            <div key={index} className="cast-card">
              <div className="profile-wrapper">
                <div className="profile-image-container">
                  <Image
                    src={actor.image}
                    alt={actor.name}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="profile-image"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      //---fallback-----
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = '/imageNotFound4v4.png';
                    }}
                    fill={true}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
              <div className="cast-info">
                <h3 className="actor-name">{actor.name}</h3>
                <p className="actor-role">{actor.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CastList;
