import { Container, Col, Row, Nav, NavLink } from "react-bootstrap";
export default function Footer() {
    return(
        <footer className="bg-dark">
            <Container fluid className="text-white">
                <Row >
                    <Col >
                        <Nav className="flex-column fs-5 p-5">
                            <NavLink href="/about" className="text-white">Om oss</NavLink>
                            <NavLink href="/movies" className="text-white">Alla filmer</NavLink>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav className="flex-column fs-5 p-5">
                            <NavLink href="/" className="text-white">Instagram</NavLink>                
                            <NavLink href="/" className="text-white">Facebook</NavLink>
                            <NavLink href="/" className="text-white">X</NavLink>
                        </Nav>
                    </Col>
                    <Col>
                        <Nav className="flex-column fs-5 p-5">
                            <NavLink href="/" className="text-white">ToS</NavLink>
                            <NavLink href="/" className="text-white">Privacy policy</NavLink>
                        </Nav>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}