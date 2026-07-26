import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <>
      <Navbar expand="lg" className="bg-white p-2 px-3 shadow-sm ">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="fs-2 fw-semibold">
            Travelers
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 px-5 fs-5"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" className="px-3">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="px-3">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="px-3">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="px-3">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="danger" className="rounded-0">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
