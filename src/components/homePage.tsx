import { Button, Card, Row } from "react-bootstrap";
import Link from "next/link";
import UpcomingScreening from "./UpcomingScreening";
import CardPoster from "./CardPoster";
export default function HomePage(){
    type Movie = {
        img: string,
        title: string,
        description: string,
        id:string,
    };
    type Screening = {
        title: string,
        date: string,
        time: string,
        room: string,
        id: string,
    };
    const movies: Movie[] = [
    {
        img: "/seats.png",
        title: "Star Wars",
        description: "Movie info goes here",
        id: "#"
    },
    {
        img: "/seats.png",
        title: "Godzilla",
        description: "Movie info goes here",
        id: "#"
    },
    {
        img: "/seats.png",
        title: "The Hobbit",
        description: "Movie info goes here",
        id: "#"
    },
    {
        img: "/seats.png",
        title: "Lord of the Rings",
        description: "Movie info goes here",
        id: "#"
    },
    {
        img: "/seats.png",
        title: "Terminator",
        description: "Movie info goes here",
        id: "#"
    }
];
const screenings: Screening[] = [
    {title: "Star Wars",
     date: "15 maj",
     time: "17.00",
     room: "Salong 1",
     id: "#",   
    },
    {title: "Star Wars",
        date: "15 maj",
        time: "17.00",
        room: "Salong 1",
        id: "#",   
       },
   {title: "Star Wars",
    date: "15 maj",
    time: "17.00",
    room: "Salong 1",
    id: "#",   
   },
    {title: "Star Wars",
        date: "15 maj",
        time: "17.00",
        room: "Salong 1",
        id: "#",   
    },
    {title: "Star Wars",
        date: "15 maj",
        time: "17.00",
        room: "Salong 1",
        id: "#",   
    },
    {title: "Star Wars",
        date: "15 maj",
        time: "17.00",
        room: "Salong 1",
        id: "#",   
    }];
    return(
        <main className="bg-dark">
            <div className="text-center">
                <Link  href="/movies">
                    <Button className="fs-5 p-3 " >Alla filmer</Button>
                </Link>
            </div>
            <h2 className="text-white m-5 text-center">Top 5 movies</h2>
            <section className="d-flex flex-wrap justify-content-center gap-4-mx-auto">
            {movies.map(movie =>
                        <CardPoster
                        img={movie.img}
                        title={movie.title}
                        description={movie.description}
                        width={200}
                        height={200}
                        id={movie.id}
                        />
                    )}
           </section>
           <section>
                <h2 className="text-white m-3 text-center">Kommande visningar</h2>
                <div className="m-3">
                    {screenings.map(screening =>
                        <UpcomingScreening
                        title={screening.title}
                        date={screening.date}
                        time={screening.time}
                        room={screening.room}
                        id={screening.id}
                         />
                    )}
                </div>
           </section>
        </main>
    );
}