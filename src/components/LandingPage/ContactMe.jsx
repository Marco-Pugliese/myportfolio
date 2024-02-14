import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Envelope, Github, Linkedin } from "react-bootstrap-icons";
import emailjs, { send } from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";

const ContactMe = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showSend, setShowSend] = useState(false);
  const [showError, setShowError] = useState(false);
  // const [clicked, setClicked] = useState(false);
  const [isEverythingChecked, setIsEverythingChecked] = useState(false);
  const check = () => {
    email !== "" && subject !== "" && name !== "" && message.length > 0
      ? setIsEverythingChecked(true)
      : setIsEverythingChecked(false);
  };
  // const nothing = () => {};

  const sendEmail = () => {
    emailjs
      .sendForm("service_algs13g", "template_w1nrwer", form.current, {
        publicKey: "qPPk62aiLtoFATMcB",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowSend(true);
          // setClicked(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setShowError(true);
          // setClicked(false);
        }
      );
  };
  // useEffect(() => {
  //   showSend === true && clicked === true
  //     ? setShowError(false) && setShowSend(false)
  //     : nothing();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <Container
      onClick={() => {
        // setClicked(true);
      }}
    >
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
      <form
        ref={form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
                <input
                  type="text"
                  required
                  name="user_name"
                  className="bg-transparent light-text form-control"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setShowError(false);
                    setShowSend(false);
                  }}
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
                <input
                  type="email"
                  className="bg-transparent light-text form-control"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  name="user_email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setShowError(false);
                    setShowSend(false);
                  }}
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
                <input
                  required
                  className="bg-transparent light-text form-control"
                  aria-label="subject"
                  aria-describedby="basic-addon1"
                  name="user_subject"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                    setShowError(false);
                    setShowSend(false);
                  }}
                />
              </InputGroup>
            </Col>
            <div className="py-3"></div>
            <Col className="col-12 h-100">
              <InputGroup className="border-change h-100">
                <InputGroup.Text className="bg-transparent light-text ">
                  Text
                </InputGroup.Text>
                <textarea
                  required
                  className="bg-transparent light-text form-control"
                  as="textarea"
                  aria-label="With textarea"
                  name="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setShowError(false);
                    setShowSend(false);
                  }}
                />
              </InputGroup>

              <>
                {showSend && (
                  <div className="alert alert-success mt-3" role="alert">
                    Your message has been sent properly!
                  </div>
                )}
                {showError && (
                  <div className="alert alert-danger mt-3" role="alert">
                    Oooops. We had a problem on delivering your message, try
                    again!
                  </div>
                )}
              </>
            </Col>
            <Col className="col-10 offset-1 py-3">
              <Row className="text-center">
                <Col className="text-center offset-1 col-4">
                  <button
                    type="submit"
                    className="w-100 myBtn1 py-1 rounded-3"
                    onClick={(e) => {
                      e.preventDefault();

                      check();
                      isEverythingChecked === true
                        ? sendEmail()
                        : setShowError(true);
                      setName("");
                      setEmail("");
                      setSubject("");
                      setMessage("");
                    }}
                  >
                    Send
                  </button>
                </Col>
                <Col className="col-1"></Col>
                <Col className="text-center offset-1 col-4">
                  <button
                    type="button"
                    className="w-100 myBtn2 py-1 rounded-3"
                    onClick={(e) => {
                      setName("");
                      setEmail("");
                      setSubject("");
                      setMessage("");
                    }}
                  >
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
