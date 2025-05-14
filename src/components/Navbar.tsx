'use client';

import { Navbar, Nav, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Navigation() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="p-3 text-light">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
          <Nav.Link as={Link} href="/" className="text-white">
            Hem
          </Nav.Link>
          <Nav.Link as={Link} href="/movies" className="text-white">
            Alla filmer
          </Nav.Link>
          <Nav.Link as={Link} href="/about" className="text-white">
            Om oss
          </Nav.Link>
        </Nav>

        <Link href="/register">
          <Button className="m-2">Registrera dig</Button>
        </Link>
        <Link href="/login">
        <Button className="m-2">Logga in</Button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
