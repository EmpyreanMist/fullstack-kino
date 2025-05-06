import { Container, Col, Row, Stack } from "react-bootstrap";
export default function Footer() {
    return(
        <footer className="bg-dark">
            <Container fluid className="text-white">
                <Row>
                    <Col>
                        <Stack>
                            <a>Om oss</a>
                            <a>Alla filmer</a>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack>
                            <a>Instagram</a>
                        
                            <a>Facebook</a>
                        
                            <a>X</a>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack>
                            <a>ToS</a>
                        
                            <a>Privacy policy</a>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}