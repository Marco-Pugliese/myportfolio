import { Col, Container, Row } from "react-bootstrap";

const AboutMeSection = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="col-8 text-end fst-italic small py-5 mt-5 position-relative">
          <div className="width-changing pt-0 mb-0 mt-5 border-bottom gray-border border-shadow-gray"></div>
          <div>
            <div className="pt-5 mt-5">
              "Hello, visitor! I'm{" "}
              <span className="color-change-2y fs-5">Marco Pugliese</span> , a
              31-year-old front-end developer. I'm deeply passionate about Tech,
              Basketball, and Music. In each of these fields, I firmly believe
              that the key to expressing oneself is simplicity — being Minimal.
            </div>
            <div>
              Originally from Procida (Na) - Italy, I had the privilege of
              growing up with a sports-oriented education, shaping my
              perspective on the world in a collective and team-oriented way. My
              love for music has taken me to many places allowing me to connect
              with people from all around the world. Additionally, my early
              experiences as a chef provided me with the opportunity to live and
              work in different countries!
            </div>
            <div>
              With expertise in front-end development, my skills encompass the
              fundamentals of HTML, CSS, and JavaScript, extending to the latest
              advancements in development, such as SASS, React.js, and React
              Native. I excel in integrating satellite capabilities and
              frameworks. Specializing in crafting responsive and user-friendly
              interfaces that adhere to the principles of minimalism, I am adept
              at translating complex ideas into elegant and functional designs.
              This proficiency forms the core of my skill set.
            </div>
            <div>
              I value efficiency, collaboration, and continuous learning. The
              ever-evolving nature of technology motivates me to stay updated
              and adapt my skills to meet emerging challenges. Collaboration is
              key to my approach, as I believe diverse perspectives lead to
              innovative solutions.
            </div>
            <div>
              Looking ahead, my goal is to grow as much as I can as a developer
              and be an example for younger developers. Whether it's exploring
              new technologies, contributing to open-source projects, or further
              refining my design skills, I am dedicated to continuous growth in
              my field."
            </div>
          </div>
          <div className="width-changing pt-0 mb-0 mt-5 border-bottom gray-border border-shadow-gray"></div>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutMeSection;
