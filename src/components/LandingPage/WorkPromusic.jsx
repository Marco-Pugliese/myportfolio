import { useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";

const WorkPromusic = () => {
  const [proMusicHovered, setProMusicHovered] = useState(false);
  return (
    <Row id="promusicWork" className="p-0 mx-0 v70">
      <Col className="p-0 m-0 col-lg-5 d-flex flex-column align-items-center justify-content-center">
        <div
          className="px-5 fs-5 text-center pointer"
          onClick={() => {
            window.open("https://github.com/Marco-Pugliese/promusic");
          }}
        >
          <div className="color-change-2y">Promusic</div>
          <div className="d-none d-xl-block extrasmall text-light">
            Associazione Culturale e Musicale
          </div>
        </div>
        <div className="width-changing pt-0 mb-0 border-bottom gray-border border-shadow-gray"></div>
        <div
          onMouseEnter={() => {
            setProMusicHovered(true);
          }}
          onMouseLeave={() => {
            setProMusicHovered(false);
          }}
          className="hover mb-2"
        >
          <div className="px-5  fs-6 d-flex align-items-center justify-content-center">
            <span
              className={proMusicHovered === true ? "me-1 pointer" : "me-1 "}
              onClick={() => {
                window.open("https://promusic.vercel.app/");
              }}
            >
              https://promusic.vercel.app/
            </span>{" "}
            - <span className="ms-1 smaller">2024</span>
          </div>
          <div
            className={
              proMusicHovered === true
                ? "px-5 text-center fw-light smaller mt-3 text-light transition6"
                : "px-5 text-center fw-light smaller mt-3 transition6"
            }
          >
            Promusic is basically my first web-site. Completely developed in
            React, utilizing Bootstrap's pagination schemes and Redux for state
            management. Using npm EmailJS to estabilish a communication between
            users and the association team
          </div>
        </div>
      </Col>
      <Col className="p-0 m-0 col-12 col-lg-7 ">
        <Carousel fade>
          <Carousel.Item>
            <div className="promusic1 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="promusic2 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="promusic3 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="promusic4 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="promusic5 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="promusic6 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="promusic7 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="promusic8 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="promusic9 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="promusic10 vh50"></div>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
};
export default WorkPromusic;
