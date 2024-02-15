import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Icons = () => {
  const selectedPage = useSelector((state) => state.Page.pageSelected[0]);
  return (
    <Container
      id="icons"
      className={
        selectedPage === "Home" || selectedPage === "Contact Me"
          ? "h-100 d-flex align-items-center rotate-center"
          : null
      }
    >
      <img
        src="/assets/media/icons/terminal-icon-512x449-f2lki385.png"
        alt="terminal"
        className="bg-light rounded-3"
      />
      <img src="/assets/media/icons/free-jquery-8-1175153.png" alt="jQuery" />
      <img
        src="/assets/media/icons/api-icon-design-illustration-free-vector.jpeg"
        alt="api"
        className="bg-light rounded-3"
      />
      <img src="/assets/media/icons/Git-Icon-1788C.png" alt="git" />
      <img
        src="/assets/media/icons/GitHub-Logo.png"
        alt="github"
        className="bg-light rounded-3"
      />
      <img
        src="/assets/media/icons/png-transparent-sass-logos-and-brands-line-filled-icon.png"
        alt="sass"
      />
      <img
        src="/assets/media/icons/react-native-app-icon.webp"
        alt="native"
        className="bg-light rounded-4"
      />
      <img src="/assets/media/icons/Bardoo_Logo-04 copia.png" alt="bardoo" />
      <img
        src="/assets/media/icons/download.png"
        alt="react-bootstrap"
        className="bg-light rounded-3"
      />
      <img
        src="/assets/media/icons/bootstrap-5-logo-icon.webp"
        alt="bootstrap"
      />
      <img
        src="/assets/media/icons/react-icon.png"
        alt="react"
        className="rounded-3 bg-light"
      />
      <img src="/assets/media/icons/redux-icon.webp" alt="redux" />
      <img src="/assets/media/icons/CSSlogo.png" alt="css" />
      <img
        src="/assets/media/icons/JavaScript-logo.png"
        alt="js"
        className=" rounded-3"
      />
      <img
        src="/assets/media/icons/html-5-logo.svg"
        alt="html"
        className="bg-light rounded-3"
      />
    </Container>
  );
};
export default Icons;
