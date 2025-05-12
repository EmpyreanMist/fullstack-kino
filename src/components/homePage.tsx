import { Button, Card, Row } from "react-bootstrap";
import Link from "next/link";
import MovieCard from "./MovieCard";
export default function HomePage(){
    return(
        <main>
            <div className="text-center">
                <Link  href="/movies">
                    <Button className="fs-5 p-3 " >Alla filmer</Button>
                </Link>
            </div>
            
           <section className="grid">
            <Row>
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
                    id={"#"}/>
                </Row>
                <Row>
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
                    id={"#"}/>
                    <MovieCard 
                    title={"Titel"}
                    img={"/seats.png"}
                    description={"Info info blah blah blah"}
                    width={200}
                    height={200}
                    id={"#"}/>
                </Row>
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