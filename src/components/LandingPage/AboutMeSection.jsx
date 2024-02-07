import { Col, Container, Row, Carousel } from "react-bootstrap";

const AboutMeSection = () => {
  return (
    <Container>
      <Row className="py-5 align-items-center">
        <Col className="col-12 col-lg-5 text-center px-4 pb-4">
          <div className="fs-4 fw-bold "> EPICODE Capstone</div>
          <div className="d-flex text-center">
            <div className="width-changing pt-0 mb-0  border-bottom gray-border border-shadow-gray "></div>
          </div>
          <div className="mt-3">
            <span className="contrast-text fst-italic">Bardoo </span> -{" "}
            <span className="smaller">2024</span>
          </div>
          <div className="mt-2">
            Bardoo is an event-manager web-app totally developed in React, using
            Bootstrap's pagination schemes and REDUX state-updating processes.
            Thanks to the JSON Server's local API simulation it also follow all
            the points of the RESTful architecture. It respects all the points
            to be called a complete & modern react-web-app.
          </div>
        </Col>

        <Col id="bardooCarousel">
          <div>
            <Carousel fade className="p-0 text-center">
              <Carousel.Item>
                <img
                  src="/assets/media/works/bardoo .png"
                  alt="bardoo"
                  className="w-50 rounded-4 mb-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/works/bardoo1.png"
                  alt="bardoo"
                  className="w-100 rounded-4 mb-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/works/bardoo2.png"
                  alt="bardoo"
                  className="w-100 rounded-4 mb-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/works/bardoo3.png"
                  alt="bardoo"
                  className="w-100 rounded-4 mb-2"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src="/assets/media/works/bardoo5.png"
                  alt="bardoo"
                  className="w-100 rounded-4 mb-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/works/bardoo7.png"
                  alt="bardoo"
                  className="w-100 rounded-4 mb-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/works/bardoo8.png"
                  alt="bardoo"
                  className="w-100 rounded-4 mb-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/works/bardoo9.png"
                  alt="bardoo"
                  className="w-100 rounded-4 mb-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/works/bardoo10.png"
                  alt="bardoo"
                  className="w-100 rounded-4 mb-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/works/bardoo11.png"
                  alt="bardoo"
                  className="w-100 rounded-4 mb-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/works/bardoo12.png"
                  alt="bardoo"
                  className="w-100 rounded-4 mb-2"
                />
              </Carousel.Item>
            </Carousel>
          </div>{" "}
        </Col>
      </Row>
      <Row className="py-5 align-items-center">
        <Col>
          <div>
            <Carousel
              id="loremWeatherCarousel"
              fade
              className="p-0 text-center"
            >
              <Carousel.Item>
                <img
                  src="/assets/media/works/loremWeather.png"
                  alt="loremWeather"
                  className="w-100 rounded-4 mb-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/works/loremWeather2.png"
                  alt="loremWeather"
                  className="w-100 rounded-4 mb-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/works/loremWeather3.png"
                  alt="loremWeather"
                  className="w-100 rounded-4 mb-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/works/loremWeather4.png"
                  alt="loremWeather"
                  className="w-100 rounded-4 mb-2"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
        <Col className="col-12 col-lg-5 text-center px-4 pb-4">
          <div className="fs-4 fw-bold "> EPICODE Exam 12</div>
          <div className="d-flex text-center">
            <div className="width-changing pt-0 mb-0  border-bottom gray-border border-shadow-gray "></div>
          </div>
          <div className="mt-3">
            <span className="contrast-text fst-italic">LoremWeather </span> -{" "}
            <span className="smaller">2023</span>
          </div>
          <div className="mt-2">
            LoremWeather is my first one-page-React-web-app. It uses
            openWeather's API to get weather information and open-Meteo's API
            for geographical information. Created to empower the capability of
            working with different API response-format, was also developed
            trying to elevate and minimize the UX as much possibile, trying to
            keep an easy and "more-then-decent" UI
          </div>
        </Col>
      </Row>
      <Row className="py-5 align-items-center">
        <Col className="col-12 col-lg-5 text-center px-4 pb-4">
          <div className="fs-4 fw-bold "> EPICODE Exam 11</div>
          <div className="d-flex text-center">
            <div className="width-changing pt-0 mb-0  border-bottom gray-border border-shadow-gray "></div>
          </div>
          <div className="mt-3">
            <span className="contrast-text fst-italic">NetFlics </span> -{" "}
            <span className="smaller">2023</span>
          </div>
          <div className="mt-2">
            NetFlics is a UI-mainly-oriented web-app that tries to empower the
            UI trying to keep an easy accessibility to respect a
            UX-standard-guide
          </div>
        </Col>
        <Col>
          <Carousel id="NetFlicsCarousel" fade className="p-0 text-center">
            <Carousel.Item>
              <img
                src="/assets/media/works/netflixClone.png"
                alt="netflixClone"
                className="w-75 rounded-4 mb-2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/netflixClone2.png"
                alt="netflixClone"
                className="w-75 rounded-4 mb-2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/netflixClone3.png"
                alt="netflixClone"
                className="w-75 rounded-4 mb-2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/works/netflixClone4.png"
                alt="netflixClone"
                className="w-75 rounded-4 mb-2"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutMeSection;
