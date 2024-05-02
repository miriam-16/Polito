import { Navbar, Container, Form, Button, Row, Col } from "react-bootstrap";
import { BsFilm, BsPersonCircle } from "react-icons/bs";
function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container fluid>
        <Row>
          <Col md={4}>
            <Navbar.Brand href="#">
              <BsFilm /> Film Library
            </Navbar.Brand>
          </Col>

          <Col md={4}>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Col>

          <Col md={4}>
            <Button variant="outline-primary">
              <BsPersonCircle />
            </Button>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
