import { Col, Container, Row } from "react-bootstrap";

const Education = () => {
  return (
    <Container>
      <Row className="py-5">
        <Col className="d-flex justify-content-around">
          <div>ISTRUZIONE</div>
        </Col>
        <Col>
          <div>
            <div>ITNS F.Caracciolo - 2010 </div>
            <div>Epicode - 2023</div>
          </div>
        </Col>
      </Row>
      <Row className="py-5">
        <Col className="d-flex justify-content-around">
          <div>CORSI</div>
        </Col>
        <Col>
          <div>CAROUSEL CERTIFICATI</div>
        </Col>
      </Row>
      <Row className="py-5">
        <Col className="d-flex justify-content-around">
          <div>WORKS</div>
        </Col>
        <Col>
          <div>BARDOO - Epicode Capstone</div>
          <div>LOREMWEATHER - Wheater webapp </div>
          <div>Sportify Clone </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Education;
