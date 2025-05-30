import { Container, Col, Row, Nav } from 'react-bootstrap';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark border-top">
      <Container fluid className="text-white">
        <Row>
          <Col>
            <Nav className="flex-column fs-5 p-5">
              <Link href="/about" className="text-white text-decoration-none pb-3">
                Om oss
              </Link>
              <Link href="/movies" className="text-white text-decoration-none pb-3">
                Alla filmer
              </Link>
            </Nav>
          </Col>
          <Col>
            <Nav className="flex-column fs-5 p-5">
              <Link href="/" className="text-white text-decoration-none pb-3">
                Instagram
              </Link>
              <Link href="/" className="text-white text-decoration-none pb-3">
                Facebook
              </Link>
              <Link href="/" className="text-white text-decoration-none pb-3">
                X
              </Link>
            </Nav>
          </Col>
          <Col>
            <Nav className="flex-column fs-5 p-5">
              <Link href="/" className="text-white text-decoration-none pb-3">
                ToS
              </Link>
              <Link href="/" className="text-white text-decoration-none pb-3">
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
