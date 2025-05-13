import { Button, Card, Row } from "react-bootstrap";
import Link from "next/link";
import UpcomingScreening from "./UpcomingScreening";
import CardPoster from "./CardPoster";
export default function HomePage(){
    return(
        <main className="bg-dark">
            <div className="text-center">
                <Link  href="/movies">
                    <Button className="fs-5 p-3 " >Alla filmer</Button>
                </Link>
            </div>
            
           <section className="grid m-3">
            <Row>
                    <h2 className="text-wrap text-white">Top 5 movies</h2>
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
                </Row>
                <Row>
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
                   
                </Row>
           </section>
           <section>
            <h2 className="text-white m-3">Kommande visningar</h2>
            <div className="d-flex flex-wrap">
                <UpcomingScreening
                title={"Titel"}
                date={"Datum: 15 maj"}
                time={"Tid: 17.00"}
                image={"/seats.png"}
                id={"#"}
                />
                <UpcomingScreening
                title={"Titel"}
                date={"Datum: 15 maj"}
                time={"Tid: 17.00"}
                image={"/seats.png"}
                id={"#"}
                />
                <UpcomingScreening
                title={"Titel"}
                date={"Datum: 15 maj"}
                time={"Tid: 17.00"}
                image={"/seats.png"}
                id={"#"}
                />
                <UpcomingScreening
                title={"Titel"}
                date={"Datum: 15 maj"}
                time={"Tid: 17.00"}
                image={"/seats.png"}
                id={"#"}
                />
                <UpcomingScreening
                title={"Titel"}
                date={"Datum: 15 maj"}
                time={"Tid: 17.00"}
                image={"/seats.png"}
                id={"#"}
                />
                <UpcomingScreening
                title={"Titel"}
                date={"Datum: 15 maj"}
                time={"Tid: 17.00"}
                image={"/seats.png"}
                id={"#"}
                />
                <UpcomingScreening
                title={"Titel"}
                date={"Datum: 15 maj"}
                time={"Tid: 17.00"}
                image={"/seats.png"}
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