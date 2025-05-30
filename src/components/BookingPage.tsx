'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

type MovieProp = {
  title: string;
  id: string;
};

export default function BookingSetUp({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const [movieInfo, setMovieInfo] = useState<MovieProp>();

  useEffect(() => {
    const fetchMovieData = async () => {
      if (!id) {
        console.log('no movie id');
        return;
      }
      try {
        const response = await fetch(`/api/bookings/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie info');
        }
        const payload = await response.json();
        console.log(payload.movie.title);
        setMovieInfo({ title: payload.movie.title, id: payload.movie._id });
      } catch (error) {
        console.error('Error fetching movie data', error);
      }
    };
    fetchMovieData();
  }, [id]);

  if (!movieInfo || !movieInfo.title) {
    return (
      <main className="container mt-5 text-center">
        <div className="spinner-border" role="status"></div>
        <p>Laddar bokningsinformation</p>
      </main>
    );
  } else {
    return (
      <main className="bg-dark text-light p-5 text-center">
        <h4 className="p-2">{`Här kommer du snart kunna boka biljetter till ${movieInfo.title}`}</h4>
        <Link href={`/movieInfo/${id}`} className="text-light fs-5">
          Tills vidare kan du läsa allt om filmen här
        </Link>
      </main>
    );
  }
}
