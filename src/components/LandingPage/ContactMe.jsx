import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Envelope, Github, Linkedin } from "react-bootstrap-icons";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactMe = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_z2lch6b", "template_8u8vwtl", form.current, {
        publicKey: "LBJbYc9UBQ2hLfgfJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <Container>
      <div className="py-5 mt-5">
        <div className="width-changing pt-0 mb-0  border-bottom gray-border border-shadow-gray "></div>
        <div className="width-changing pt-0 mb-0 border-bottom gray-border border-shadow-gray rotate-animation-180"></div>
      </div>
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
      <div className="py-5 mt-5">
        <div className="width-changing pt-0 mb-0  border-bottom gray-border border-shadow-gray "></div>
        <div className="width-changing pt-0 mb-0 border-bottom gray-border border-shadow-gray rotate-animation-180"></div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <Container>
          <Row className="py-5 mt-5">
            <Col className="col-12 col-lg-6">
              <InputGroup className="border-change">
                <InputGroup.Text
                  className="bg-transparent light-text"
                  id="basic-addon1"
                >
                  Name
                </InputGroup.Text>
                <Form.Control
                  name="user_name"
                  className="bg-transparent light-text"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <div className="py-2"></div>
            </Col>
            <Col className="col-12 col-lg-6">
              <InputGroup className="border-change">
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
                  name="user_email"
                />
              </InputGroup>
              <div className="py-2"></div>
            </Col>
            <Col className="col-12 col-lg-6 offset-lg-3">
              <InputGroup className="border-change">
                <InputGroup.Text
                  className="bg-transparent light-text"
                  id="basic-addon1"
                >
                  Subject
                </InputGroup.Text>
                <Form.Control
                  className="bg-transparent light-text"
                  aria-label="subject"
                  aria-describedby="basic-addon1"
                  name="user_subject"
                />
              </InputGroup>
            </Col>
            <div className="py-3"></div>
            <Col className="col-12 h-100">
              <InputGroup className="border-change h-100">
                <InputGroup.Text className="bg-transparent light-text ">
                  Text
                </InputGroup.Text>
                <Form.Control
                  className="bg-transparent light-text "
                  as="textarea"
                  aria-label="With textarea"
                  name="message"
                />
              </InputGroup>
            </Col>
            <Col className="col-10 offset-1 py-3">
              <Row className="text-center">
                <Col className="text-center offset-1 col-4">
                  <button
                    className="w-100 myBtn1 py-1 rounded-3"
                    onClick={() => sendEmail()}
                  >
                    Send
                  </button>
                </Col>
                <Col className="col-1"></Col>
                <Col className="text-center offset-1 col-4">
                  <button className="w-100 myBtn2 py-1 rounded-3">
                    Cancel
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </form>
    </Container>
  );
};
export default ContactMe;
