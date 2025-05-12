import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

type Props = {
    img: String;
    title: String;
    description: String;
    width: number;
    height: number;
    id: string;
}
export default function MovieCard({ img, title, description, width, height, id }: Props){
    return(
        <Card className="bg-dark hover-shadow" style= {{width: "18rem"}}>
            <img src={img} className="card-img-top" width={width} height={height}></img>
            <h5 className="text-white">{title}</h5>
            <p className="card-text text-white">{description}</p>
            <Link href={`movies/book/${id}`} className="btn btn-primary">Köp biljett</Link>
        </Card>
    );
}