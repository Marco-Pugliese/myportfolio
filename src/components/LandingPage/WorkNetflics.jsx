import { useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";

const WorkNetflics = () => {
  const [netflicsHovered, setNetflicsHovered] = useState(false);
  return (
    <Row id="netflicsWork" className="pb-2 m-0 justify-content-center">
      <Col className="p-0 m-0 col-lg-5 d-flex flex-column align-items-center justify-content-center">
        <div className="px-5 fs-5 text-center color-change-2y">NETFLICS</div>
        <div className="width-changing pt-0 mb-0  border-bottom gray-border border-shadow-gray "></div>
        <div
          onMouseEnter={() => {
            setNetflicsHovered(true);
          }}
          onMouseLeave={() => {
            setNetflicsHovered(false);
          }}
          className="hover mb-2"
        >
          <div className="px-5  fs-6 d-flex align-items-center justify-content-center mt-3">
            <span
              className={netflicsHovered === true ? "me-1 pointer" : "me-1 "}
              onClick={() => {
                window.open(
                  "https://github.com/Marco-Pugliese/epicode-capstone"
                );
              }}
            >
              EPICODE EXAM
            </span>{" "}
            - <span className="ms-1 smaller">2023</span>
          </div>
          <div
            className={
              netflicsHovered === true
                ? "px-5 text-center fw-light smaller mt-3 text-light transition6"
                : "px-5 text-center fw-light smaller mt-3 transition6"
            }
          >
            NetFlics is a React app primarily focused on user interface design,
            developed to fulfill the need for a web page that empowers user
            interface while maintaining easy accessibility to provide a
            high-quality user experience
          </div>
        </div>
      </Col>
      <Col className="p-0 m-0 col-12 col-lg-7 ">
        <Carousel fade>
          <Carousel.Item>
            <div className="netflics1 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="netflics2 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="netflics3 vh50"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="netflics4 vh50"></div>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
};
export default WorkNetflics;
