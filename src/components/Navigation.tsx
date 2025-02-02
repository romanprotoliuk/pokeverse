import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Navigation = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand>
          Pokeverse
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">All Pokemon</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export { Navigation };
