import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Envelope, Github, Linkedin } from "react-bootstrap-icons";

const ContactMe = () => {
  return (
    <Container>
      <Row className="py-5 my-5">
        <Col className="col-6 fs-1 fw-bold">LET'S GET IN TOUCH!</Col>
        <Col>
          <div className="d-flex align-items-center my-2">
            <Envelope className="me-2 fs-4" /> :
            <span className="mx-2">pugliesemarco@myyahoo.com</span>
          </div>
          <div className="d-flex align-items-center my-2">
            <Linkedin className="me-2 fs-4" /> :
            <a
              className="nav-link mx-2"
              href="https://www.linkedin.com/in/marco-pugliese-dev/"
            >
              linkedin.com/in/marco-pugliese-dev/
            </a>
          </div>
          <div className="d-flex align-items-center my-2">
            <Github className="me-2 fs-4" /> :
            <a
              className="nav-link mx-2"
              href="https://github.com/Marco-Pugliese"
            >
              github.com/Marco-Pugliese
            </a>
          </div>
        </Col>
      </Row>
      <Row className="py-5">
        <Col className="col-6">
          <InputGroup className="mb-3 border-change">
            <InputGroup.Text
              className="bg-transparent light-text"
              id="basic-addon1"
            >
              Name
            </InputGroup.Text>
            <Form.Control
              className="bg-transparent light-text"
              aria-label="name"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 border-change">
            <InputGroup.Text
              className="bg-transparent light-text"
              id="basic-addon1"
            >
              eMail
            </InputGroup.Text>
            <Form.Control
              className="bg-transparent light-text"
              aria-label="email"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3 border-change">
            <InputGroup.Text className="bg-transparent light-text">
              Text
            </InputGroup.Text>
            <Form.Control
              className="bg-transparent light-text"
              as="textarea"
              aria-label="With textarea"
            />
          </InputGroup>
        </Col>
        <Col>fjkadahkfkajs</Col>
      </Row>
    </Container>
  );
};
export default ContactMe;
