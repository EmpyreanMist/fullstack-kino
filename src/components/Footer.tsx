import { Container, Col, Row, Nav } from 'react-bootstrap';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark border-top">
      <Container fluid className="text-white">
        <Row>
          <Col>
            <Nav className="flex-column fs-5 p-5">
              <Link href="/about" className="text-white text-decoration-none">
                Om oss
              </Link>
              <Link href="/movies" className="text-white text-decoration-none">
                Alla filmer
              </Link>
            </Nav>
          </Col>
          <Col>
            <Nav className="flex-column fs-5 p-5">
              <Link href="/" className="text-white text-decoration-none">
                Instagram
              </Link>
              <Link href="/" className="text-white text-decoration-none">
                Facebook
              </Link>
              <Link href="/" className="text-white text-decoration-none">
                X
              </Link>
            </Nav>
          </Col>
          <Col>
            <Nav className="flex-column fs-5 p-5">
              <Link href="/" className="text-white text-decoration-none">
                ToS
              </Link>
              <Link href="/" className="text-white text-decoration-none">
                Privacy policy
              </Link>
            </Nav>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  );
}
