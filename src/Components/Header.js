import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Наукові заходи в закладах вищої освіти України
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              Про сайт
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              Галерея
            </Nav.Link>
            <Nav.Link as={Link} to="/news">
              Новини
            </Nav.Link>
            <Nav.Link as={Link} to="/contacts">
              Контакти
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
