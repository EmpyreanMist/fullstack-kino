'use client'
import { Button, Col, Container } from 'react-bootstrap';
import Link from 'next/link';
import UpcomingScreening from './UpcomingScreening';
import CardPoster from './CardPoster';
import { useEffect, useState } from 'react';
import { ScreeningProp } from '@/lib/typesScreening';

export default function HomePage() {
  const [screenings, setScreenings] = useState<ScreeningProp[]>([]);
  console.log("Screenings at start of homepage func "+screenings.length);
  //console.log("Keys (start): "+screenings.keys.length);
  type Movie = {
    img: string;
    title: string;
    description: string;
    id: string;
  };

 /* type Screening = {
    title: string;
    date: string;
    //time: string;
    room: string;
    id: string;
  };*/
  const movies: Movie[] = [
    {
      img: '/seats.png',
      title: 'Star Wars',
      description: 'Movie info goes here',
      id: '1',
    },
    {
      img: '/seats.png',
      title: 'Godzilla',
      description: 'Movie info goes here',
      id: '2',
    },
    {
      img: '/seats.png',
      title: 'The Hobbit',
      description: 'Movie info goes here',
      id: '3',
    },
    {
      img: '/seats.png',
      title: 'Lord of the Rings',
      description: 'Movie info goes here',
      id: '4',
    },
    {
      img: '/seats.png',
      title: 'Terminator',
      description: 'Movie info goes here',
      id: '5',
    },
  ];
  
 
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
        console.log("Screenings (in fetchScreenings): "+screenings.length);
      }
      fetchScreenings();
      console.log("Screenings (after fetchScreenings): "+screenings.length);
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
                key={movie.id}
                img={movie.img}
                title={movie.title}
                description={movie.description}
                width={200}
                height={200}
                id={movie.id}
                rating={1}
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
          <Col sm={15} md={12} lg={10} xl={8}>
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
