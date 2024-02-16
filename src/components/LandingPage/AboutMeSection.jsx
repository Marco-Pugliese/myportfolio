import { useState } from "react";
import { Col, Container, Row, Carousel } from "react-bootstrap";

const AboutMeSection = () => {
  const [bardooHover, setBardooHover] = useState(false);
  const [loremWeatherHover, setLoremWeatherHover] = useState(false);
  const [netflixCloneHover, setNetflixCloneHover] = useState(false);
  return (
    <Container id="aboutme">
      <Row className="py-5 align-items-center mb-5">
        <Col className="col-12 col-lg-5 text-center px-4 pb-4">
          <div className="fs-4 fw-bold "> EPICODE Capstone</div>
          <div className="d-flex text-center">
            <div className="width-changing pt-0 mb-0  border-bottom gray-border border-shadow-gray "></div>
          </div>
          <div className="mt-3">
            <span
              className={
                bardooHover === true
                  ? "secondary-text fst-italic navtop pointer"
                  : "contrast-text fst-italic pointer"
              }
              onClick={() =>
                window.open(
                  "https://github.com/Marco-Pugliese/epicode-capstone"
                )
              }
            >
              Bardoo{" "}
            </span>{" "}
            - <span className="smaller">2024</span>
          </div>
          <div className="mt-2">
            Bardoo is an event manager web app entirely developed in React,
            utilizing Bootstrap's pagination schemes and Redux for state
            management. It incorporates JSON Server for local API simulation,
            adhering to the principles of RESTful architecture.
            <br /> Bardoo meets all the criteria for being called a complete and
            modern React web app.
          </div>
        </Col>

        <Col
          id="bardooCarousel"
          onMouseLeave={() => {
            setBardooHover(false);
          }}
          onMouseEnter={() => setBardooHover(true)}
          onClick={() =>
            window.open("https://github.com/Marco-Pugliese/epicode-capstone")
          }
        >
          <Carousel fade className="p-0 text-center rounded-4">
            <Carousel.Item>
              <img
                src="/assets/media/works/bardoo .png"
                alt="bardoo"
                className="w-100 rounded-4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/bardoo1.png"
                alt="bardoo"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/bardoo2.png"
                alt="bardoo"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/bardoo3.png"
                alt="bardoo"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                src="/assets/media/works/bardoo5.png"
                alt="bardoo"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/bardoo7.png"
                alt="bardoo"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/bardoo8.png"
                alt="bardoo"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/bardoo9.png"
                alt="bardoo"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/bardoo10.png"
                alt="bardoo"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/bardoo11.png"
                alt="bardoo"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/bardoo12.png"
                alt="bardoo"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="py-5 align-items-center mb-5">
        <Col id="loremWeatherCarousel" className="d-none d-lg-block">
          <Carousel
            fade
            className="p-0 text-center rounded-4"
            onMouseLeave={() => {
              setLoremWeatherHover(false);
            }}
            onMouseEnter={() => setLoremWeatherHover(true)}
            onClick={() =>
              window.open("https://github.com/Marco-Pugliese/loremweather")
            }
          >
            <Carousel.Item className="rounded-4 ">
              <img
                src="/assets/media/works/loremWeather.png"
                alt="loremWeather"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/loremWeather2.png"
                alt="loremWeather"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/loremWeather3.png"
                alt="loremWeather"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/loremWeather4.png"
                alt="loremWeather"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="col-12 col-lg-5 text-center px-4 pb-4 mb-5">
          <div className="fs-4 fw-bold "> EPICODE Exam 12</div>
          <div className="d-flex text-center">
            <div className="width-changing pt-0 mb-0  border-bottom gray-border border-shadow-gray "></div>
          </div>
          <div className="mt-3">
            <span
              className={
                loremWeatherHover === true
                  ? "secondary-text fst-italic navtop pointer"
                  : "contrast-text fst-italic pointer"
              }
              onClick={() =>
                window.open("https://github.com/Marco-Pugliese/loremweather")
              }
            >
              LoremWeather{" "}
            </span>{" "}
            - <span className="smaller">2023</span>
          </div>
          <div className="mt-2">
            LoremWeather is my first one-page React web app. It utilizes the
            openWeather API for weather information and the open-Meteo API for
            geographical data. Created to enhance proficiency in working with
            various API response formats, it was also developed to optimize user
            experience and maintain an easy-to-use and aesthetically pleasing
            UI.
          </div>
        </Col>
        <Col className="d-lg-none rounded-4 loremWeatherCarousel">
          <Carousel
            fade
            className="p-0 text-center rounded-4"
            onMouseLeave={() => {
              setLoremWeatherHover(false);
            }}
            onMouseEnter={() => setLoremWeatherHover(true)}
            onClick={() =>
              window.open("https://github.com/Marco-Pugliese/loremweather")
            }
          >
            <Carousel.Item className="rounded-4 ">
              <img
                src="/assets/media/works/loremWeather.png"
                alt="loremWeather"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/loremWeather2.png"
                alt="loremWeather"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/loremWeather3.png"
                alt="loremWeather"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/loremWeather4.png"
                alt="loremWeather"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="py-5 align-items-center z-2">
        <Col className="col-12 col-lg-5 text-center px-4 pb-4">
          <div className="fs-4 fw-bold "> EPICODE Exam 11</div>
          <div className="d-flex text-center">
            <div className="width-changing pt-0 mb-0  border-bottom gray-border border-shadow-gray "></div>
          </div>
          <div className="mt-3">
            <span
              className={
                netflixCloneHover === true
                  ? "secondary-text fst-italic navtop pointer"
                  : "contrast-text fst-italic pointer"
              }
              onClick={() =>
                window.open(
                  "https://github.com/Marco-Pugliese/U3-W1-L5---netflixclone"
                )
              }
            >
              Netflix Clone{" "}
            </span>{" "}
            - <span className="smaller">2023</span>
          </div>
          <div className="mt-2">
            NetFlics is a React app primarily focused on user interface design,
            developed to fulfill the need for a web page that empowers user
            interface while maintaining easy accessibility to provide a
            high-quality user experience
          </div>
        </Col>
        <Col
          id="NetFlicsCarousel"
          onMouseLeave={() => {
            setNetflixCloneHover(false);
          }}
          onMouseEnter={() => setNetflixCloneHover(true)}
          onClick={() =>
            window.open(
              "https://github.com/Marco-Pugliese/U3-W1-L5---netflixclone"
            )
          }
        >
          <Carousel fade className="p-0 text-center rounded-4 ">
            <Carousel.Item className="rounded-4">
              <img
                src="/assets/media/works/netflixClone.png"
                alt="netflixClone"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item className="rounded-4">
              <img
                src="/assets/media/works/netflixClone2.png"
                alt="netflixClone"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item className="rounded-4">
              <img
                src="/assets/media/works/netflixClone3.png"
                alt="netflixClone"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
            <Carousel.Item className="rounded-4">
              <img
                src="/assets/media/works/netflixClone4.png"
                alt="netflixClone"
                className="w-100 rounded-4 "
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutMeSection;
