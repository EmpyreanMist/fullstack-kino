import { Button, Card } from "react-bootstrap";
import Link from "next/link";
import MovieCard from "./MovieCard";
export default function HomePage(){
    return(
        <section>
            <div className="text-center">
                <Link  href="/movies">
                    <Button className="fs-5 p-3 " >Alla filmer</Button>
                </Link>
            </div>
            <h2 className="ms-3">Top 5 movies</h2>
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
        </section>
    );
}