import { useState, useEffect } from "react";
import { Container, Modal, Nav, Navbar, Spinner } from "react-bootstrap";
import { ClipboardHeart } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { switchSectionAction } from "../../Redux/Actions";

const Header = () => {
  const dispatch = useDispatch();
  const selectedPage = useSelector((state) => state.Page.pageSelected[0]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleClose = () => setShow(false);
  const setIsLoading = () => setLoading(false);
  const handleShow = () => {
    setShow(true);
    setLoading(true);
    setTimeout(() => {
      setIsLoading();
    }, 5000);
  };
  useEffect(() => {
    console.log(selectedPage);
  }, [selectedPage]);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar
        expand="lg"
        className={scrollTop > 30 ? "stickyHeader bgsolid " : "stickyHeader"}
      >
        <Container className="px-5 ">
          <Navbar.Brand
            className="focus-in-contract text-gray pointer"
            onClick={() => {
              dispatch(switchSectionAction("Home"));
            }}
          >
            LessIsMore <span className="fw-bold a-left color-change-2y">.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav d-flex align-items-center text-gray">
              <span
                className={
                  selectedPage === "Home"
                    ? "px-3 navtop selected"
                    : "px-3 navtop"
                }
                onClick={() => {
                  dispatch(switchSectionAction("Home"));
                }}
              >
                Home
              </span>
              <span
                className={
                  selectedPage === "About Me"
                    ? "px-3 navtop selected"
                    : "px-3 navtop"
                }
                onClick={() => {
                  dispatch(switchSectionAction("About Me"));
                }}
              >
                Works
              </span>
              <span
                className={
                  selectedPage === "Education"
                    ? "px-3 navtop selected"
                    : "px-3 navtop"
                }
                onClick={() => {
                  dispatch(switchSectionAction("Education"));
                }}
              >
                Education
              </span>
              <span
                className={
                  selectedPage === "Contact Me"
                    ? "px-3 navtop selected"
                    : "px-3 navtop"
                }
                onClick={() => {
                  dispatch(switchSectionAction("Contact Me"));
                }}
              >
                Contact Me!
              </span>
              <span
                className="display-inline-block resume rounded-3 ms-3 px-3 py-1"
                onClick={handleShow}
              >
                View Resume <ClipboardHeart id="bag" className="fs-5" />
              </span>

              <Modal
                show={show}
                onHide={handleClose}
                className="bg-transparent"
              >
                <Modal.Body id="modalbody" className="position-relative">
                  <object
                    data="/assets/media/pic/MyCv copia.pdf"
                    type="application/pdf"
                    width="100%"
                    height="100%"
                    className="rounded-3 border-sec"
                  >
                    O
                  </object>
                  {loading && (
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <Spinner
                        animation="border"
                        className="spinner-mainContrast "
                      />
                    </div>
                  )}
                </Modal.Body>
              </Modal>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
