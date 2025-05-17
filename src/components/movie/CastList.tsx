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
    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
      {cast.map((actor, index) => (
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
                  //---fallback-----
                  const target = e.currentTarget as HTMLImageElement;
                  target.src = '/imageNotFound4v4';
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
  );
};

export default CastList;
