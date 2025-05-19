import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

type Props = {
    title: String;
    date: String;
    time: String;
    room: String;
    id: String;
}
export default function UpcomingScreening({ title, date, time, room, id }: Props){
    return(
    <Card className="bg-dark border-light m-3 hover-shadow-5 grid" >
        <Row>
       <Col>
            <h5 className="text-white m-2">{title}</h5>
        </Col>
        <Col>
            <h5 className="text-white m-2">{date}</h5>
        </Col>
        <Col>
            <h5 className="text-white m-2">{time}</h5>
        </Col>
        <Col>
            <h5 className="text-white m-2">{room}</h5>
        </Col>
        <Col>
            <Link href={`movies/book/${id}`}>
                <Button className="m-2">Köp biljett</Button>
            </Link>
        </Col>
        </Row>
    </Card>
    );
}