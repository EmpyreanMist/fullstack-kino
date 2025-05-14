import { Button, Card, Row } from "react-bootstrap";
import Link from "next/link";
import UpcomingScreening from "./UpcomingScreening";
import CardPoster from "./CardPoster";
export default function HomePage(){
    type Movie = {
        img: String;
        title: String;
        description: String;
        id:String;
    }
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
]
    return(
        <main className="bg-dark">
            <div className="text-center">
                <Link  href="/movies">
                    <Button className="fs-5 p-3 " >Alla filmer</Button>
                </Link>
            </div>
            <h2 className="text-white m-5 text-center">Top 5 movies</h2>
            <section className="d-flex flex-wrap justify-content-center gap-4-mx-auto">
                    <CardPoster
                    img={"/seats.png"}
                    title={"Titel"}
                    description={"Info text blah blah blah best movie ever"}
                    width={200}
                    height={200}
                    id={"#"}
                    />
                     <CardPoster
                    img={"/seats.png"}
                    title={"Titel"}
                    description={"Info text blah blah blah best movie ever"}
                    width={200}
                    height={200}
                    id={"#"}
                    />
                    <CardPoster
                    img={"/seats.png"}
                    title={"Titel"}
                    description={"Info text blah blah blah best movie ever"}
                    width={200}
                    height={200}
                    id={"#"}
                    />
                     <CardPoster
                    img={"/seats.png"}
                    title={"Titel"}
                    description={"Info text blah blah blah best movie ever"}
                    width={200}
                    height={200}
                    id={"#"}
                    />
                      <CardPoster
                    img={"/seats.png"}
                    title={"Titel"}
                    description={"Info text blah blah blah best movie ever"}
                    width={200}
                    height={200}
                    id={"#"}
                    />
           </section>
           <section>
                <h2 className="text-white m-3 text-center">Kommande visningar</h2>
                <div className="m-3">
                    <UpcomingScreening
                    title={"Titel"}
                    date={"15 maj"}
                    time={"kl 17.00"}   
                    room={"Salong 1"}             
                    id={"#"}
                    />
                    <UpcomingScreening
                    title={"Titel"}
                    date={"15 maj"}
                    time={"kl 17.00"}  
                    room={"Salong 1"}             
                    id={"#"}
                    />
                    <UpcomingScreening
                    title={"Titel"}
                    date={"15 maj"}
                    time={"kl 17.00"} 
                    room={"Salong 1"}              
                    id={"#"}
                    />
                    <UpcomingScreening
                    title={"Titel"}
                    date={"15 maj"}
                    time={"kl 17.00"} 
                    room={"Salong 1"}             
                    id={"#"}
                    />
                    <UpcomingScreening
                    title={"Titel"}
                    date={"15 maj"}
                    time={"kl 17.00"} 
                    room={"Salong 1"}            
                    id={"#"}
                    />
                    <UpcomingScreening
                    title={"Titel"}
                    date={"15 maj"}
                    time={"kl 17.00"}
                    room={"Salong 1"}
                    id={"#"}
                    />
                    <UpcomingScreening
                    title={"Titel"}
                    date={"15 maj"}
                    time={"kl 17.00"} 
                    room={"Salong 1"}    
                    id={"#"}
                    />
                </div>
           </section>
            { /* 
           <section className="d-flex flex-wrap justify-content-center gap-4-mx-auto container-80">
                <h2 className="ms-3 text-wrap">Top 5 movies</h2>
                <MovieCard 
                title={"Titel"}
                img={"/seats.png"}
                description={"Info info blah blah blah"}
                width={200}
                height={200}
                id={"#"}/>
                <MovieCard 
                title={"Titel"}
                img={"/seats.png"}
                description={"Info info blah blah blah"}
                width={200}
                height={200}
                id={"#"}
                />
            </section>
            <section className="d-flex flex-wrap justify-content-center gap-4-mx-auto container-80">
                <MovieCard 
                title={"Titel"}
                img={"/seats.png"}
                description={"Info info blah blah blah"}
                width={200}
                height={200}
                id={"#"}

            />
            <MovieCard 
                title={"Titel"}
                img={"/seats.png"}
                description={"Info info blah blah blah"}
                width={200}
                height={200}
                id={"#"}

            />
            <MovieCard 
                title={"Titel"}
                img={"/seats.png"}
                description={"Info info blah blah blah"}
                width={200}
                height={200}
                id={"#"}

            />
            </section>*/}
        </main>
    );
}