import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/LandingPage/HeroSection";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import AboutMeSection from "./components/LandingPage/AboutMeSection";
import Education from "./components/LandingPage/Education";
import ContactMe from "./components/LandingPage/ContactMe";

function App() {
  const currentPage = useSelector((state) => state.Page.pageSelected[0]);
  return (
    <div className="App">
      <Container
        fluid
        id="top"
        className="color-change-2x position-relative px-0"
      >
        <Header className="position-absolute" />

        <div
          id="mydiv"
          className={
            currentPage === "Home"
              ? "zero"
              : currentPage === "About Me"
              ? "minus25 "
              : currentPage === "Education"
              ? "minus50 "
              : currentPage === "Contact Me"
              ? "minus75 "
              : "zero"
          }
        >
          <div>
            <HeroSection />
          </div>
          <div>
            <AboutMeSection />
          </div>
          <div>
            <Education />
          </div>
          <div>
            <ContactMe />
          </div>
        </div>
      </Container>
      <Container fluid className="flex-grow-1" id="rest"></Container>
    </div>
  );
}

export default App;
