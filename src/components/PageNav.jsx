/* eslint-disable react/no-unescaped-entities */
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function PageNav() {
  return (
    <Navbar
      className="py-5 transparent-navbar"
      style={{ opacity: 0.8 }}
      fixed="top"
      expand="lg"
      bg="light"
      data-bs-theme="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="text-decoration-none text-dark h2">
            BLOOM
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto d-flex column-gap-3">
            <LinkContainer to="/">
              <Nav.Link>HOME</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/blog">
              <Nav.Link>BLOG</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/login-signup">
              <Button className="ms-5 d-flex align-items-center justify-content-center fs-5">
                Log in/Sign up
              </Button>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNav;
