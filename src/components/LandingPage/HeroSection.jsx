import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Envelope,
  Instagram,
  Linkedin,
  Telephone,
} from "react-bootstrap-icons";

const HeroSection = () => {
  const [hover1, isHover1] = useState(false);
  const [hover2, isHover2] = useState(false);
  const [hover3, isHover3] = useState(false);
  const [hover4, isHover4] = useState(false);
  const [hover5, isHover5] = useState(false);
  return (
    <Container className="py-5 ">
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
            className="p-2 mx-2 radius-50 secondary-text"
            onMouseEnter={() => isHover1(true)}
            onMouseLeave={() => isHover1(false)}
          >
            <Instagram className={hover1 === true ? "gray-text" : ""} />
          </span>
          <span
            className="p-2 mx-2 radius-50 secondary-text"
            onMouseEnter={() => isHover2(true)}
            onMouseLeave={() => isHover2(false)}
          >
            <Telephone className={hover2 === true ? "gray-text" : ""} />
          </span>
          <span
            className="p-2 mx-2 radius-50 secondary-text"
            onMouseEnter={() => isHover3(true)}
            onMouseLeave={() => isHover3(false)}
          >
            <Envelope className={hover3 === true ? "gray-text" : ""} />
          </span>
          <span
            className="p-2 mx-2 radius-50 secondary-text"
            onMouseEnter={() => isHover4(true)}
            onMouseLeave={() => isHover4(false)}
          >
            <Linkedin className={hover4 === true ? "gray-text" : ""} />
          </span>
          <span
            className="p-2 mx-2 radius-50 secondary-text"
            onMouseEnter={() => isHover5(true)}
            onMouseLeave={() => isHover5(false)}
          >
            <Instagram className={hover5 === true ? "gray-text" : ""} />
          </span>
        </Col>
      </Row>
    </Container>
  );
};
export default HeroSection;
