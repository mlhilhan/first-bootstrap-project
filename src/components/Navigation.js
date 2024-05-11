import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{ backgroundColor: "#ffffc4" }} // Arka plan rengi burada belirtildi
    >
      <Navbar.Brand href="#home">Collers</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#solutions">Solutions</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#resources">Resources</Nav.Link>
          <Nav.Link href="#login">Log In</Nav.Link>
          <Nav.Link href="#signup" className="btn-signup">
            Sign Up Now
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
