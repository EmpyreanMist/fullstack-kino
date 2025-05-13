import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';

type Props = {
    title: String;
    date: String;
    time: String;
    id: String;
}
export default function UpcomingScreening({ title, date, time, id }: Props){
    return(
    <Card className="bg-dark border-light m-3 hover-shadow-5" style={{width:"18rem"}}>
        <h4 className="text-white ms-3">{title}</h4>
        <p className="text-white ms-3">{date}</p>
        <p className="text-white ms-3">{time}</p>
        <Link href={`movies/book/${id}`}>
            <Button className="ms-3 mb-2">Köp biljett</Button>
        </Link>
       
    </Card>
    );
}