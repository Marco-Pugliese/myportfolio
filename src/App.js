import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/LandingPage/HeroSection";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid id="top" className="color-change-2x">
        <Header />
        <HeroSection />
      </Container>
      <Container fluid className="flex-grow-1" id="rest">
        lorem
      </Container>
    </div>
  );
}

export default App;
