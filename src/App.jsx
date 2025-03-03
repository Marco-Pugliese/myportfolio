import Header from "./components/Header/Header";
import "./App.css";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import AboutMeSection from "./components/LandingPage/AboutMeSection";
import Education from "./components/LandingPage/Education";
import ContactMe from "./components/LandingPage/ContactMe";
import HeroSection from "./components/LandingPage/HeroSection";

function App() {
  const currentPage = useSelector((state) => state.Page.pageSelected[0]);
  return (
    <div className="App">
      <Container
        fluid
        id="top"
        className="color-change-2x position-relative px-0"
      >
        <Header />

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
    </div>
  );
}

export default App;
