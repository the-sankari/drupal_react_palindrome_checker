import React from "react";
import { Container, Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <Navbar expand="lg" classname="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Palindrome</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbar;
