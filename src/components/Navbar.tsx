'use client';

import { Navbar, Nav, Button } from 'react-bootstrap';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';
import type HeaderProps from '@/lib/typesHeader';
import UseGlobalLoginTimerResult from './GlobalLoginTimer';

export default function Navigation({
  showLoginButton = true,
  showRegisterButton = true,
}: HeaderProps) {
  const { user, isAuthenticated, secondsLeft, reset } = UseGlobalLoginTimerResult();

  const handleSubmit = async () => {
    try {
      await supabase.auth.signOut(); // logga ut från Supabase
      reset(); // nollställ lokal state
    } catch (error) {
      console.error('Kunde inte logga ut:', error);
    }
  };

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

        {isAuthenticated ? (
          <>
            <section className="d-flex flex-row justify-content-center gap-2 align-items-center">
              <div className="d-flex flex-column">
                <span className="navbar-text me-3">Hej, {user?.user_metadata.fullName}</span>
                {secondsLeft <= 30 && <p className="text-danger">Du loggas ut om {secondsLeft} sekunder</p>}
              </div>
              <button onClick={handleSubmit} type="submit" className="btn btn-primary" style={{maxWidth: '100px'}}>
                Logga ut
              </button>
            </section>
          </>
        ) : (
          <>
            {showRegisterButton && (
              <Link href="/register" passHref>
                <Button className="m-2">Registrera dig</Button>
              </Link>
            )}
            {showLoginButton && (
              <Link href="/login" passHref>
                <Button className="m-2">Logga in</Button>
              </Link>
            )}
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
