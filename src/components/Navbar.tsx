/* import { Navbar, Nav, Button } from 'react-bootstrap';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import type HeaderProps from '@/lib/typesHeader';

export default async function Navigation({
  showLoginButton = true,
  showRegisterButton = true,
}: HeaderProps) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="p-3 text-light">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
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

        {user ? (
          <div className="d-flex flex-row justify-content-center gap-2 align-items-center">
            <span className="navbar-text me-3">Hej, {user.user_metadata.fullName}</span>
            <form action="/logout" method="GET">
              <Button type="submit" className="btn btn-primary" style={{ maxWidth: '100px' }}>
                Logga ut
              </Button>
            </form>
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
 */
