import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const About = () => {
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
        <h1> About Me </h1>
        <p>
          Hello !.. I'm a passionate developer with experince in building web
          applications using React.js and designing with React Bootstrap.
        </p>
      </Container>
    </>
  );
};

export default About;
