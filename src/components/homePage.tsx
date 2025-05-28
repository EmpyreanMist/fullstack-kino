'use client';

import { useEffect, useState } from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import Link from 'next/link';
import UpcomingScreening from './UpcomingScreening';
import CardPoster from './CardPoster';
import { ScreeningProp } from '@/lib/typesScreening';

type Movie = {
  _id: string;
  title: string;
  poster: string;
  year: string;
  rating: string;
  genre: string[];
};

export default function HomePage() {
  const [screenings, setScreenings] = useState<ScreeningProp[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);

  // Hämta filmer från API
  useEffect(() => {
    const fetchTopMovies = async () => {
      const res = await fetch('/api/movies?sort=highest-rating&page=1');
      const data = await res.json();
      // Hämta de 5 första
      setMovies(data.movies.slice(0, 5));
    };
    fetchTopMovies();
  }, []);
  useEffect(() => {
    const fetchScreenings = async () => {
      const response = await fetch('api/screenings/upcoming')
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const payload = await response.json();
      payload.data.forEach((screening: ScreeningProp)=>{
        const date = new Date(screening.date);
        const datetime = date.toLocaleString("sv-Se",{
          day: "numeric",
          month: "long",
          hour: "2-digit",
          minute: "2-digit",
        });
        screening.date = datetime;
      })
      setScreenings(payload.data);
    }
    fetchScreenings();
  }, []);

  return (
    <main className="bg-dark">
      <div className="text-center pt-5">
        <Link href="/movies">
          <Button className="fs-5 p-3 ps-5 pe-5">Alla filmer</Button>
        </Link>
      </div>
      <h2 className="text-white m-5 text-center">Top 5 movies</h2>
      <Container className="d-flex flex-wrap justify-content-center">
        <Col sm={12} md={12} lg={12} xl={10}>
          <section className="d-flex flex-wrap justify-content-center gap-4 pb-3">
            {movies.map(movie => (
              <CardPoster
                key={movie._id}
                img={movie.poster}
                title={movie.title}
                description={''}
                width={200}
                height={300}
                id={movie._id}
                rating={parseFloat(movie.rating.slice(0, 3))}
              />
            ))}
            ;
          </section>
        </Col>
      </Container>
      <h2 className="text-white m-3 text-center">Kommande visningar</h2>
      <div className="pb-3 pt-1 text-center d-flex flex-wrap justify-content-center align-items-center">
        {(screenings.length == 0) && 
          <h5 className='text-white '>Vi har tyvärr inga visningar de kommande dagarna</h5>
        }
        {(screenings.length > 0) &&  
          <Col sm={11} md={12} lg={10} xl={8}>
            {screenings.map(screening => (
              <UpcomingScreening
                key={screening.id}
                title={screening.movie.title}
                date={screening.date}
                room={screening.room}
                movieID={screening.movie.id}
              />
            ))}
          </Col>}
      </div>
    </main>
  );
}