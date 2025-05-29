'use client';

import { useEffect, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type HeaderProps from '@/lib/typesHeader';

interface UserData {
  email?: string;
  fullName?: string;
  id?: string;
}

export default function Navigation({
  showLoginButton = true,
  showRegisterButton = true,
}: HeaderProps) {
  const [user, setUser] = useState<UserData | null>(null);
  const router = useRouter();

  const fetchUser = async () => {
    try {
      const res = await fetch('/api/user', { credentials: 'include', cache: 'no-store' });
      const data = await res.json();
      if (res.ok && data.user) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error('Kunde inte hämta användare:', err);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/logout', { method: 'POST' });
      if (res.ok) {
        setUser(null);
        if (window.location.pathname === '/profile') {
          router.push('/login');
        } else {
          router.refresh();
        }
      } else {
        console.error('Utloggning misslyckades');
      }
    } catch (err) {
      console.error('Fel vid utloggning:', err);
    }
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="p-3 text-light fs-5">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
          <Nav.Link as={Link} href="/" className="text-white pe-4 hover-text">
            Hem
          </Nav.Link>
          <Nav.Link as={Link} href="/movies" className="text-white pe-4 hover-text">
            Alla filmer
          </Nav.Link>
          <Nav.Link as={Link} href="/about" className="text-white pe-4 hover-text">
            Om oss
          </Nav.Link>
        </Nav>

        {user !== null ? (
          <div className="d-flex flex-row justify-content-center gap-2 align-items-center">
            <Link href="/profile">
              <span className="navbar-text me-3">Hej, {user.fullName}</span>
            </Link>

            <Button
              onClick={handleLogout}
              className="btn btn-primary"
              style={{ maxWidth: '100px' }}
            >
              Logga ut
            </Button>
          </div>
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
