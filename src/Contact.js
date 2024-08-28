import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  Navbar,
  Card,
  Nav
} from "react-bootstrap";

const Contact = () => {
  const [validated, setValidated] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handlePhoneChange = (e) => {
    const re = /^\d{0,10}$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setPhone(e.target.value);
    }
  };

  const handleNameChange = (e) => {
    const re = /^[A-Za-z\s]*$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setName(e.target.value);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleZipChange = (e) => {
    const re = /^\d{0,10}$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setZip(e.target.value);
    }
  };

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

      <Container className="mt=5">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Body>
                <Card.Title> Contact Me </Card.Title>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                    <Form.Group controlId="formYear">
                        <Form.Label> Select year </Form.Label>
                        <select class="dropdown-year form-control" 
                          id="select-year" aria-required="true" aria-invalid="true" 
                          required name="sel_year" style={{ borderColor: "#CCCCCC", borderWidth: "1px", borderStyle: "solid" }}>
                          <option value=""> Click here to select year</option>
                          <option value="2001"> 2001 </option>
                          <option value="2002"> 2002 </option>
                          <option value="2003"> 2003 </option>
                          <option value="2004"> 2004 </option>
                          <option value="2005"> 2005 </option>
                        </select> 
                        <Form.Control.Feedback type="invalid">
                          Please select year.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formName">
                        <Form.Label> Name </Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter your name"
                          value={name}
                          onChange={handleNameChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter a valid name (letters only).
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>  
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formModel">
                        <Form.Label> Model </Form.Label>
                        <select class="dropdown-model form-control" 
                          id="select-model" aria-required="true" aria-invalid="true" 
                          required name="sel_model" style={{ borderColor: "#CCCCCC", borderWidth: "1px", borderStyle: "solid" }}>
                          <option value=""> Model </option>
                          <option value="Audi"> Audi </option>
                          <option value="BMW"> BMW </option>
                          <option value="Hyundai"> Hyundai </option>
                          <option value="Ferrari"> Ferrari </option>
                          <option value="Volvo"> Volvo </option>
                        </select> 
                          <Form.Control.Feedback type="invalid">
                            Please select your model.
                          </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formPhone">
                        <Form.Label> Phone Number </Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter your phone number"
                            value={phone}
                            onChange={handlePhoneChange}
                          />
                        <Form.Control.Feedback type="invalid">
                          Please enter a valid phone number (numbers only).
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                    <Form.Group controlId="formMake">
                        <Form.Label> Make </Form.Label>
                        <select class="dropdown-make form-control" 
                          id="select-make" aria-required="true" aria-invalid="true" 
                          required name="sel_make" style={{ borderColor: "#CCCCCC", borderWidth: "1px", borderStyle: "solid" }}>
                          <option value=""> Make </option>
                          <option value="A3"> A3 </option>
                          <option value="Accent"> Accent </option>
                          <option value="320"> 320 </option>
                          <option value="Volvo 140"> Volvo 140</option>
                          <option value="166 Inter"> 166 Inter </option>
                        </select> 
                          <Form.Control.Feedback type="invalid">
                            Please select your make.
                          </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="formEmail">
                        <Form.Label> Email address </Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={handleEmailChange}
                          pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please enter a valid email address.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                    <Form.Group controlId="formPart">
                        <Form.Label> Part </Form.Label>
                        <select class="dropdown-part form-control" 
                          id="select-part" aria-required="true" aria-invalid="true" 
                          required name="sel_part" style={{ borderColor: "#CCCCCC", borderWidth: "1px", borderStyle: "solid" }}>
                          <option value=""> Part </option>
                          <option value="2001"> Engine </option>
                          <option value="2002"> Airbag </option>
                          <option value="2003"> Turbo </option>
                          <option value="2004"> Headlight </option>
                          <option value="2005"> Side mirror </option>
                        </select> 
                          <Form.Control.Feedback type="invalid">
                            Please select your part.
                          </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group controlId="formPhone">
                        <Form.Label> Enter ZIP </Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter your phone number"
                            value={zip}
                            onChange={handleZipChange}
                          />
                        <Form.Control.Feedback type="invalid">
                          Please enter a valid ZIP (numbers only).
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
