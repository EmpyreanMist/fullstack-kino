import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

type Props = {
    title: String;
    date: String;
    room: String;
    movieID: String;
}
export default function UpcomingScreening({ title, date, room, movieID }: Props){
    return(
    <Card className="bg-dark border-light m-3 hover-shadow-5 grid" >
        <Row className='d.flex align-items-center'>
            <Col xs={6}sm={3} md={4}>
                <h5 className="text-white m-2">{title}</h5>
            </Col>
            <Col xs={6} sm={3}>
                <h5 className="text-white m-2">{date}</h5>
            </Col>
            <Col xs={6} sm={3}>
                <h5 className="text-white m-2">{room}</h5>
            </Col>
            <Col xs={6} sm={2}>
                <Link href={`movies/book/${movieID}`}>
                    <Button className="m-2">Köp biljett</Button>
                </Link>
            </Col>
        </Row>
    </Card>
    );
}