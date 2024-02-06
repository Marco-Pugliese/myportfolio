import { Col, Container, Row } from "react-bootstrap";

const AboutMeSection = () => {
  return (
    <Container>
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
      <div className="width-changing pt-0 mb-0 mt-5 border-bottom gray-border border-shadow-gray"></div>
    </Container>
  );
};
export default AboutMeSection;
