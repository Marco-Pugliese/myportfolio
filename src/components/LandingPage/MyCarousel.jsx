import { Carousel } from "react-bootstrap";
import { Braces, CodeSlash, FiletypeJsx } from "react-bootstrap-icons";
import { useState } from "react";

const MyCarousel = () => {
  const [hoverCont1, isHoverCont1] = useState(false);
  const [hoverCont2, isHoverCont2] = useState(false);
  const [hoverCont3, isHoverCont3] = useState(false);
  return (
    <Carousel fade>
      <Carousel.Item>
        <div
          onMouseEnter={() => {
            isHoverCont1(true);
          }}
          onMouseLeave={() => {
            isHoverCont1(false);
          }}
          className="mx-3 px-2 py-2 bg-light rounded-3 darker-bg conthover position-relative"
        >
          <div className="fs-6 p-2">
            <Braces className=" fs-4 " />
          </div>
          <div
            className={
              hoverCont1 === true
                ? "end-0 top-0 me-3 mt-3 fs-4 fw-bold border border-3 ps-2 pe-1 py-1 numberInCont rounded-circle position-absolute ishoverCont"
                : "end-0 top-0 me-3 mt-3 fs-4 fw-bold border border-3 ps-2 pe-1 py-1 numberInCont rounded-circle position-absolute"
            }
          >
            01
          </div>
          <div className="py-3 fs-5 ">Web Development</div>
          <div
            className={
              hoverCont1 === true
                ? "border-bottom w-25 light-border"
                : "border-bottom w-25 gray-border"
            }
          ></div>
          <div className="py-3 smaller">
            I use the knowledge of various programming language i've learned
            during my studies with EPICODE and other external courses
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          onMouseEnter={() => {
            isHoverCont2(true);
          }}
          onMouseLeave={() => {
            isHoverCont2(false);
          }}
          className="mx-3 bg-light ps-2 pe-1 py-2 rounded-3 darker-bg conthover position-relative"
        >
          <div className="fw-bold fs-6  p-2">
            <CodeSlash className=" fs-4 " />
          </div>
          <div
            className={
              hoverCont2 === true
                ? "end-0 top-0 me-3 mt-3 fs-4 fw-bold border border-3 px-2 py-1 numberInCont rounded-circle position-absolute ishoverCont"
                : "end-0 top-0 me-3 mt-3 fs-4 fw-bold border border-3 px-2 py-1 numberInCont rounded-circle position-absolute"
            }
          >
            02
          </div>
          <div className="py-3 fs-5 ">UI Design</div>
          <div
            className={
              hoverCont2 === true
                ? "border-bottom w-25 light-border"
                : "border-bottom w-25 gray-border"
            }
          ></div>
          <div className="py-3 smaller ">
            Crafting user-centric digital experiences that seamlessly blend
            easthetics and functionality. Expert in user-centered disign and
            responsive interfaces
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          onMouseEnter={() => {
            isHoverCont3(true);
          }}
          onMouseLeave={() => {
            isHoverCont3(false);
          }}
          className="mx-3 bg-light ps-2 pe-1 py-2 rounded-3 darker-bg conthover position-relative"
        >
          <div className="fw-bold fs-6  p-2">
            <FiletypeJsx className=" fs-4 " />
          </div>
          <div
            className={
              hoverCont3 === true
                ? "end-0 top-0 me-3 mt-3 fs-4 fw-bold border border-3 px-2 py-1 numberInCont rounded-circle position-absolute ishoverCont"
                : "end-0 top-0 me-3 mt-3 fs-4 fw-bold border border-3 px-2 py-1 numberInCont rounded-circle position-absolute"
            }
          >
            03
          </div>
          <div className="py-3 fs-5 ">Avantgarde</div>
          <div
            className={
              hoverCont3 === true
                ? "border-bottom w-25 light-border"
                : "border-bottom w-25 gray-border"
            }
          ></div>
          <div className="py-3 smaller  ">
            Starting from the basis i've now the knowledge to empower my coding
            with all the most aspects of it, using all the modern tools
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};
export default MyCarousel;
