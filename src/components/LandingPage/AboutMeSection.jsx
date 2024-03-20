import { Container } from "react-bootstrap";
import WorkPromusic from "./WorkPromusic";
import WorkBardoo from "./WorkBardoo";
import WorkNetflics from "./WorkNetflics";

const AboutMeSection = () => {
  return (
    <Container fluid className="p-0 m-0">
      <WorkPromusic />
      <WorkBardoo />
      <WorkNetflics />
    </Container>
  );
};
export default AboutMeSection;
