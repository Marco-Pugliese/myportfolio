import { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import {
  Braces,
  CodeSlash,
  Envelope,
  FiletypeJsx,
  Github,
  Instagram,
  Linkedin,
  Telephone,
} from "react-bootstrap-icons";
import MyCarousel from "./MyCarousel";
import Icons from "./Icons";

const HeroSection = () => {
  const [hover1, isHover1] = useState(false);
  const [hover2, isHover2] = useState(false);
  const [hover3, isHover3] = useState(false);
  const [hover4, isHover4] = useState(false);
  const [hover5, isHover5] = useState(false);
  const [hoverCont1, isHoverCont1] = useState(false);
  const [hoverCont2, isHoverCont2] = useState(false);
  const [hoverCont3, isHoverCont3] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <Container className="py-5 position-relative">
      <Row className="justify-content-center text-center py-5">
        <Col className="col-10 col-lg-7 py-5">
          <div className="fs-3 text-gray">
            Hey there! I am{" "}
            <span className="fw-bold color-change-2y fs-2">Marco</span>
          </div>
          <div className="text-gray">
            I'm a passionate 31-year-old front-end web developer, dedicated to
            crafting visually appealing and user-friendly digital experiences.
            Feel free to browse through my portfolio to witness the seamless
            fusion of design and code. Welcome aboard!
          </div>
        </Col>
        <Col className="col-10 col-lg-7 ">
          <span
            className="p-2 mx-2 radius-50 contrast-text"
            onMouseEnter={() => isHover2(true)}
            onMouseLeave={() => isHover2(false)}
            onClick={handleShow1}
          >
            <Telephone className={hover2 === true ? "light-text" : ""} />
          </span>
          <span
            className="p-2 mx-2 radius-50 contrast-text"
            onMouseEnter={() => isHover3(true)}
            onMouseLeave={() => isHover3(false)}
            onClick={handleShow2}
          >
            <Envelope className={hover3 === true ? "light-text" : ""} />
          </span>
          <span
            className="p-2 mx-2 radius-50 contrast-text"
            onMouseEnter={() => isHover1(true)}
            onMouseLeave={() => isHover1(false)}
            onClick={() => {
              window.open("https://github.com/Marco-Pugliese");
            }}
          >
            <Github className={hover1 === true ? "light-text" : ""} />
          </span>
          <span
            className="p-2 mx-2 radius-50 contrast-text"
            onMouseEnter={() => isHover4(true)}
            onMouseLeave={() => isHover4(false)}
            onClick={() => {
              window.open("https://www.linkedin.com/in/marco-pugliese-dev/");
            }}
          >
            <Linkedin className={hover4 === true ? "light-text" : ""} />
          </span>
          <span
            className="p-2 mx-2 radius-50 contrast-text"
            onMouseEnter={() => isHover5(true)}
            onMouseLeave={() => isHover5(false)}
            onClick={() => {
              window.open("https://www.instagram.com/______lessismore/");
            }}
          >
            <Instagram className={hover5 === true ? "light-text" : ""} />
          </span>
        </Col>
      </Row>
      <Row className="pt-5 px-3">
        <Col className="col-12">
          <Row className="text-center ">
            <Col className="col-12 p-0 m-0">
              <span className="extrasmall mb-0 pb-0 position-relative bottom-0">
                SERVICES
              </span>
              <div className="width-changing pt-0 mt-0 mb-4 border-bottom gray-border border-shadow-gray"></div>
              <Col>
                <Row>
                  <Col className="position-relative col-6">
                    <span className="position-absolute transparency1 end-0 fs-4">
                      What
                    </span>
                    <span className="position-absolute transparency2 end-0 fs-4">
                      How
                    </span>
                    <span className="position-absolute transparency3 end-0 fs-4">
                      Why
                    </span>
                  </Col>
                  <Col className="text-start fs-4">I do.</Col>
                </Row>
              </Col>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="d-none d-lg-flex mt-5">
            <Col className="">
              <Container
                onMouseEnter={() => {
                  isHoverCont1(true);
                }}
                onMouseLeave={() => {
                  isHoverCont1(false);
                }}
                fluid
                className="bg-light rounded-3 darker-bg conthover position-relative"
              >
                <div className="fs-6 p-2">
                  <Braces className=" fs-4 " />
                </div>
                <div
                  className={
                    hoverCont1 === true
                      ? "end-0 top-0 me-3 mt-3 fs-4 fw-bold border border-3 px-2 py-1 numberInCont rounded-circle position-absolute ishoverCont"
                      : "end-0 top-0 me-3 mt-3 fs-4 fw-bold border border-3 px-2 py-1 numberInCont rounded-circle position-absolute"
                  }
                >
                  01
                </div>
                <div className="py-3 fs-5 ">Web-Development</div>
                <div
                  className={
                    hoverCont1 === true
                      ? "border-bottom w-25 light-border"
                      : "border-bottom w-25 gray-border"
                  }
                ></div>
                <div className="py-3 smaller  ">
                  I use the knowledge of various programming language i've
                  learned during my studies with EPICODE and other external
                  courses
                </div>
              </Container>
            </Col>
            <Col className="">
              <Container
                onMouseEnter={() => {
                  isHoverCont2(true);
                }}
                onMouseLeave={() => {
                  isHoverCont2(false);
                }}
                fluid
                className=" bg-light rounded-3 darker-bg conthover position-relative"
              >
                <div className="fw-bold fs-6  p-2">
                  <CodeSlash className=" fs-4 " />
                </div>
                <div
                  className={
                    hoverCont2 === true
                      ? "end-0 top-0 me-3 mt-3 fs-4 fw-bold border border-3 px-2 py-1 numberInCont rounded-circle position-absolute ishoverCont"
                      : "end-0 top-0 me-3 mt-3 fs-4 fw-bold border border-3 px-2 py-1 numberInCont rounded-circle position-absolute"
                  }
                >
                  02
                </div>
                <div className="py-3 fs-5 ">UI Design</div>
                <div
                  className={
                    hoverCont2 === true
                      ? "border-bottom w-25 light-border"
                      : "border-bottom w-25 gray-border"
                  }
                ></div>
                <div className="py-3 smaller ">
                  Crafting user-centric digital experiences that seamlessly
                  blend easthetics and functionality. Expert in user-centered
                  disign and responsive interfaces
                </div>
              </Container>
            </Col>
            <Col className="">
              <Container
                onMouseEnter={() => {
                  isHoverCont3(true);
                }}
                onMouseLeave={() => {
                  isHoverCont3(false);
                }}
                fluid
                className=" bg-light rounded-3 darker-bg conthover position-relative"
              >
                <div className="fw-bold fs-6  p-2">
                  <FiletypeJsx className=" fs-4 " />
                </div>
                <div
                  className={
                    hoverCont3 === true
                      ? "end-0 top-0 me-3 mt-3 fs-4 fw-bold border border-3 px-2 py-1 numberInCont rounded-circle position-absolute ishoverCont"
                      : "end-0 top-0 me-3 mt-3 fs-4 fw-bold border border-3 px-2 py-1 numberInCont rounded-circle position-absolute"
                  }
                >
                  03
                </div>
                <div className="py-3 fs-5 ">"Avant-garde!"</div>
                <div
                  className={
                    hoverCont3 === true
                      ? "border-bottom w-25 light-border"
                      : "border-bottom w-25 gray-border"
                  }
                ></div>
                <div className="py-3 smaller  ">
                  Starting from the basis i've now the knowledge to empower my
                  coding with all the most aspects of it, using all the modern
                  tools
                </div>
              </Container>
            </Col>
          </Row>
          <Row className="d-flex d-lg-none justify-content-center">
            <Col className="col-8 mt-3">
              <MyCarousel />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
      <>
        <Modal show={show1} onHide={handleClose1} className="rounded-3">
          <Modal.Body className="secondary-bg light-text py-5 mt-5 rounded-3 d-flex justify-content-center align-items-center">
            <Telephone className="me-1" />:
            <a href="tel:+39 3382510605" className="nav-link ps-1">
              3382510605
            </a>
          </Modal.Body>
        </Modal>
        <Modal show={show2} onHide={handleClose2} className="rounded-3">
          <Modal.Body className="secondary-bg light-text py-5 mt-5 rounded-3 d-flex justify-content-center align-items-center">
            <Envelope className="me-1" /> :
            <a
              href="mailto: pugliesemarco@myyahoo.com"
              className="nav-link ps-1"
            >
              pugliesemarco@myyahoo.com
            </a>
          </Modal.Body>
        </Modal>
      </>
      <Container id="icons-wrap" className="mt-4">
        <Icons />
      </Container>
    </Container>
  );
};
export default HeroSection;
