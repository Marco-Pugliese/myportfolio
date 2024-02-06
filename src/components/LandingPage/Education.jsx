import { Carousel, Col, Container, Row } from "react-bootstrap";

const Education = () => {
  return (
    <Container>
      <Row className="py-5 align-items-center">
        <Col className="col-5 text-center px-4">
          <div className="fs-4 fw-bold ">Education</div>
          <div className="d-flex text-center">
            <div className="width-changing pt-0 mb-0  border-bottom gray-border border-shadow-gray "></div>
            {/* <div className="width-changing pt-0 mb-0 border-bottom gray-border border-shadow-gray rotate-animation-180"></div> */}
          </div>

          <div className="mt-3">
            <span className="contrast-text fst-italic">EPICODE</span> -{" "}
            <span className="smaller">2023/2024</span>
          </div>
        </Col>

        <Col>
          <img
            src="/assets/media/pic/certificate copia_page-0001.jpg"
            alt="epi-degree"
            className="w-100 rounded-4 mb-2"
          />

          <div>
            <Carousel fade className="p-0 text-center">
              <Carousel.Item>
                <img
                  src="/assets/media/pic/certificate m1 copia_page-0001.jpg"
                  alt="m1"
                  className="w-50 rounded-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/pic/certificate m2 copia_page-0001.jpg"
                  alt="m2"
                  className="w-50 rounded-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/pic/certificate m3 copia_page-0001.jpg"
                  alt="m3"
                  className="w-50 rounded-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/pic/certificate m4 copia_page-0001.jpg"
                  alt="m4"
                  className="w-50 rounded-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/pic/certificate m5 copia_page-0001.jpg"
                  alt="m5"
                  className="w-50 rounded-2"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src="/assets/media/pic/certificate m6 copia_page-0001.jpg"
                  alt="m6"
                  className="w-50 rounded-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/pic/certificate m7 copia_page-0001.jpg"
                  alt="m7"
                  className="w-50 rounded-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/pic/certificate m8 copia_page-0001.jpg"
                  alt="m8"
                  className="w-50 rounded-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/pic/certificate m9 copia_page-0001.jpg"
                  alt="m9"
                  className="w-50 rounded-2"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>

      <Row className="py-5 align-items-center">
        <Col className="col-5 text-center px-4">
          <div className="fs-4 fw-bold ">Other Courses</div>
          <div>
            <div className="width-changing pt-0 mb-0  border-bottom gray-border border-shadow-gray "></div>
            {/* <div className="width-changing pt-0 mb-0 border-bottom gray-border border-shadow-gray rotate-animation-180"></div> */}
          </div>
          <div className="mt-3">
            <span className="color-change-2y ">udemy</span> - 2023
          </div>
        </Col>
        <Col>
          <Carousel fade className="py-2 text-center">
            <Carousel.Item>
              <img
                src="/assets/media/pic/The Web Developer Bootcamp 2023 - Colt Steele.jpeg"
                alt="The Web Developer Bootcamp 2023 - Colt Steele"
                className="w-100 rounded-2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="/assets/media/pic/The Complete Front-End Web Development Course - Joseph Delgadillo, Nick Germaine.jpeg"
                alt="The Complete Front-End Web Development Course - Joseph Delgadillo, Nick Germaine"
                className="w-100 rounded-2"
              />
            </Carousel.Item>
          </Carousel>
          <div>
            <Carousel fade className="py-2 text-center">
              <Carousel.Item>
                <img
                  src="/assets/media/pic/Diventa uno sviluppatore front end cond JS e jQuery - Simona Tocci.jpeg"
                  alt="Diventa uno sviluppatore front end cond JS e jQuery"
                  className="w-50 rounded-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/pic/Diventare Web Designer da 0. Il corso completo - Simona Tocci.jpeg"
                  alt="Diventare Web Designer da 0. Il corso completo"
                  className="w-50 rounded-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/pic/jQuery in Action - Crypters Infotech.jpeg"
                  alt="jQuery in Action - Crypters Infotech"
                  className="w-50 rounded-2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="/assets/media/pic/JS CSS & HTML - Gianluca Scoccozza.jpeg"
                  alt="JS CSS & HTML - Gianluca Scoccozza"
                  className="w-50 rounded-2"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Education;
