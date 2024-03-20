import { useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";

const WorkBardoo = () => {
  const [bardooHovered, setBardooHovered] = useState(false);
  return (
    <Row id="bardooWork" className="my-5 py-5 justify-content-center">
      <Col className="p-0 m-0 d-lg-none d-block col-lg-5 d-flex flex-column align-items-center justify-content-center">
        <div className="px-5 fs-5 text-center color-change-2y">BARDOO</div>
        <div className="width-changing pt-0 mb-0  border-bottom gray-border border-shadow-gray "></div>
        <div
          onMouseEnter={() => {
            setBardooHovered(true);
          }}
          onMouseLeave={() => {
            setBardooHovered(false);
          }}
          className="hover mb-2"
        >
          <div className="px-5  fs-6 d-flex align-items-center justify-content-center mt-3">
            <span
              className={bardooHovered === true ? "me-1 pointer" : "me-1 "}
              onClick={() => {
                window.open(
                  "https://github.com/Marco-Pugliese/epicode-capstone"
                );
              }}
            >
              EPICODE CAPSTONE
            </span>{" "}
            - <span className="ms-1 smaller">2024</span>
          </div>
          <div
            className={
              bardooHovered === true
                ? "px-5 text-center fw-light smaller mt-3 text-light transition6"
                : "px-5 text-center fw-light smaller mt-3 transition6"
            }
          >
            Bardoo is a music-event manager web app. Just like Promusic's site
            is entirely developed in React, with Bootstrap's pagination schemes
            and Redux for state management. It incorporates JSON Server for
            local API simulation, adhering to the principles of RESTful
            architecture.
            <br /> Bardoo meets all the criteria for being called a complete and
            modern React web app.
          </div>
        </div>
      </Col>
      <Col className="p-0 m-0 col-12 col-lg-7 ">
        <Carousel fade>
          <Carousel.Item>
            <div className="capstone1 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="capstone2 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="capstone3 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="capstone4 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="capstone5 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="capstone6 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="capstone7 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="capstone8 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="capstone9 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="capstone10 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="capstone11 vh50"></div>
          </Carousel.Item>
        </Carousel>
      </Col>{" "}
      <Col className="p-0 m-0 d-none col-lg-5 d-lg-flex flex-column align-items-center justify-content-center">
        <div className="px-5 fs-5 text-center color-change-2y">BARDOO</div>
        <div className="width-changing pt-0 mb-0  border-bottom gray-border border-shadow-gray "></div>
        <div
          onMouseEnter={() => {
            setBardooHovered(true);
          }}
          onMouseLeave={() => {
            setBardooHovered(false);
          }}
          className="hover mb-5"
        >
          <div className="px-5  fs-6 d-flex align-items-center justify-content-center mt-3">
            <span
              className={bardooHovered === true ? "me-1 pointer" : "me-1 "}
              onClick={() => {
                window.open(
                  "https://github.com/Marco-Pugliese/epicode-capstone"
                );
              }}
            >
              EPICODE CAPSTONE
            </span>{" "}
            - <span className="ms-1 smaller">2024</span>
          </div>
          <div
            className={
              bardooHovered === true
                ? "px-5 text-center fw-light smaller mt-3 text-light transition6"
                : "px-5 text-center fw-light smaller mt-3 transition6"
            }
          >
            Bardoo is an event manager web app entirely developed in React,
            utilizing Bootstrap's pagination schemes and Redux for state
            management. It incorporates JSON Server for local API simulation,
            adhering to the principles of RESTful architecture.
            <br /> Bardoo meets all the criteria for being called a complete and
            modern React web app.
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default WorkBardoo;
