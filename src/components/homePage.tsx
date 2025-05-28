'use client';

import { useEffect, useState } from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import Link from 'next/link';
import UpcomingScreening from './UpcomingScreening';
import CardPoster from './CardPoster';

type Movie = {
  _id: string;
  title: string;
  poster: string;
  year: string;
  rating: string;
  genre: string[];
};

type Screening = {
  title: string;
  date: string;
  time: string;
  room: string;
  id: string;
};

export default function HomePage() {
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



  const screenings: Screening[] = [
    { title: 'Star Wars', date: '15 maj', time: '17.00', room: 'Salong 1', id: '6' },
    { title: 'Star Wars', date: '15 maj', time: '17.00', room: 'Salong 1', id: '7' },
    { title: 'Star Wars', date: '15 maj', time: '17.00', room: 'Salong 1', id: '8' },
    { title: 'Star Wars', date: '15 maj', time: '17.00', room: 'Salong 1', id: '9' },
    { title: 'Star Wars', date: '15 maj', time: '17.00', room: 'Salong 1', id: '0' },
    { title: 'Star Wars', date: '15 maj', time: '17.00', room: 'Salong 1', id: '11' },
  ];
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
      <div className="pb-3 pt-1 text-center d-flex flex-wrap justify-content-center">
        <Col sm={15} md={10} lg={8} xl={6}>
          {screenings.map(screening => (
            <UpcomingScreening
              key={screening.id}
              title={screening.title}
              date={screening.date}
              time={screening.time}
              room={screening.room}
              id={screening.id}
            />
          ))}
          ;
        </Col>
      </div>
    </main>
  );
}