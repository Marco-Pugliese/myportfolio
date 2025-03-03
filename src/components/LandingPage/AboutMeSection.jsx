import { Container } from "react-bootstrap";
import WorkPromusic from "./WorkPromusic";
import WorkBardoo from "./WorkBardoo";
import WorkNetflics from "./WorkNetflics";
import InProgress from "./InProgress";

const AboutMeSection = () => {
  return (
    <Container fluid className="p-0 m-0">
      <InProgress />
      {/* <WorkPromusic />
      <WorkBardoo />
      <WorkNetflics /> */}
    </Container>
  );
};
export default AboutMeSection;
