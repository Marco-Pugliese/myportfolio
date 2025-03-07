import { Col, Container, InputGroup, Row } from "react-bootstrap";
import {
  Envelope,
  EnvelopeAtFill,
  Github,
  Linkedin,
  TelephoneFill,
  Whatsapp,
} from "react-bootstrap-icons";
import Icons from "./Icons";
import ButtonToTop from "./ButtonToTop";
import InProgress from "./InProgress";

const ContactMe = () => {
  const phoneNumber = "3382510605";
  const Callme = "tel:3382510605";
  const message = "Ciao! Mi piacerebbe sapere di più sui servizi che offri";
  const whatsapp = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const email = "pugliesemarco@myyahoo.com";
  const subjectMail = "Richiesta Informazioni";
  const bodyMail = "Ciao! Mi piacerebbe sapere di più sui servizi che offri";
  const mailtoMP = `mailto:${email}?subject=${encodeURIComponent(
    subjectMail
  )}&body=${encodeURIComponent(bodyMail)}`;

  return (
    <div className="pt-5">
      <Container>
        <Row className="my-4 text-center">
          <a
            href={mailtoMP}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <EnvelopeAtFill />
          </a>
        </Row>
        <Row className="my-4 text-center">
          <a
            href={Callme}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <TelephoneFill />
          </a>
        </Row>
        <Row className="my-4 text-center">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <Whatsapp />
          </a>
        </Row>
        <Row className="my-4 text-center">
          <Linkedin />
        </Row>
      </Container>
    </div>
  );
};
export default ContactMe;
