import { Modal } from "react-bootstrap";

const NetflixCloneModalCarousel = () => {
  return (
    <Modal className="bg-transparent">
      <Modal.Body id="modalbody">
        <img
          src="/assets/media/pic/MyCv copia_page-0001.jpg"
          alt="cv-img"
          id="cvImg"
          className="d-none d-lg-block"
        />
      </Modal.Body>
    </Modal>
  );
};
export default NetflixCloneModalCarousel;
