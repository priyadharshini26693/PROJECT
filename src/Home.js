import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"> My Portfolio </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/"> Home </Nav.Link>
            <Nav.Link href="/about"> About </Nav.Link>
            <Nav.Link href="/contact"> Contact </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <h1> Welcome to My Portfolio </h1>
        <p> This is the homepage of my portfolio created using React.</p>
      </Container>
    </>
  );
};

export default Home;
