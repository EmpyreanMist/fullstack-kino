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
  const [loader, setLoader] = useState(true);

  // Fetch top movies
  useEffect(() => {
    setLoader(true);

    const fetchTopMovies = async () => {
      try {
        const res = await fetch('/api/movies?sort=highest-rating&page=1');
        const data = await res.json();
        setMovies(data.movies.slice(0, 5));
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoader(false);
      }
    };
    fetchTopMovies();
  }, []);

  // Fetch upcoming screenings
  useEffect(() => {
    const fetchScreenings = async () => {
      try {
        const response = await fetch('api/screenings/upcoming');
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        const payload = await response.json();
        
        const processedScreenings = payload.data.map((screening: ScreeningProp, index: number) => {
          const date = new Date(screening.date);
          const datetime = date.toLocaleString('sv-Se', {
            day: 'numeric',
            month: 'long',
            hour: '2-digit',
            minute: '2-digit',
          });
          
          return {
            ...screening,
            date: datetime,
            // Create a unique key if id is missing
            uniqueKey: screening.id ? screening.id : `screening-${index}-${date.getTime()}`
          };
        });
        
        setScreenings(processedScreenings);
      } catch (error) {
        console.error('Error fetching screenings:', error);
      }
    };
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
      
      {loader ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '400px' }}
        >
          <div
            className="spinner-border text-light"
            style={{ width: '5rem', height: '5rem' }}
            role="status"
          >
            <span className="visually-hidden">Laddar...</span>
          </div>
        </div>
      ) : (
        <>
          {/* Movies Section */}
          <Container className="d-flex flex-wrap justify-content-center">
            <Col sm={12} md={12} lg={12} xl={10}>
              <section className="d-flex flex-wrap justify-content-center gap-4 pb-3">
                {movies.map((movie) => (
                  <CardPoster
                    key={`movie-${movie._id}`}
                    img={movie.poster}
                    title={movie.title}
                    description=""
                    width={200}
                    height={300}
                    id={movie._id}
                    rating={parseFloat(movie.rating.slice(0, 3))}
                  />
                ))}
              </section>
            </Col>
          </Container>

          {/* Screenings Section */}
          <h2 className="text-white m-3 text-center">Kommande visningar</h2>
          <div className="pb-3 pt-1 text-center d-flex flex-wrap justify-content-center align-items-center">
            {screenings.length === 0 ? (
              <h5 className="text-white">
                Vi har tyvärr inga visningar de kommande dagarna
              </h5>
            ) : (
              <Col sm={11} md={12} lg={10} xl={8}>
                {screenings.map((screening) => (
                  <UpcomingScreening
                    key={screening.uniqueKey}
                    title={screening.movie.title}
                    date={screening.date}
                    room={screening.room}
                    movieID={screening.movie.id}
                  />
                ))}
              </Col>
            )}
          </div>
        </>
      )}
    </main>
  );
}