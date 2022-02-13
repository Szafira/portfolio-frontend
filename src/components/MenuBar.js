import React from "react";

import { Navbar, Container,Nav, NavDropdown, i } from "react-bootstrap";

export default function MenuBar() {
  return (
<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Nav.Link href="/MainPage">MainPage</Nav.Link>
      <Nav.Link href="/Gallery">Gallery</Nav.Link>
      <Nav.Link href="/About">About</Nav.Link>
    </Nav>  
  </Navbar.Collapse>
  <Nav>
  <NavDropdown title="Social Media" id="collasible-nav-dropdown">
        <NavDropdown.Item href="https://katheris.artstation.com/"><i className="bi bi-brush"/> Artstation</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="https://www.instagram.com/katheris_art/"><i className="bi bi-instagram"/> Instagram</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item className="align-right" href="https://twitter.com/KatherisArt"><i className="bi bi-twitter"/> Twitter</NavDropdown.Item>
      </NavDropdown>
  </Nav>
  </Container>
</Navbar>
  );
}
