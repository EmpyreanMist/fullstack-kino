import { Button } from "react-bootstrap";
import Link from "next/link";
export default function HomePage(){
    return(
        <section>
            <div className="text-center">
                <Link  href="/movies">
                    <Button className="fs-5 p-3 " >Alla filmer</Button>
                </Link>
            </div>
            <h2 className="ms-3">Top 5 movies</h2>
        </section>
    );
}