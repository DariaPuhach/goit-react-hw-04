import Modal from "react-modal";
import styles from "../ImageModal/ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ modalIsOpen, image, onClose }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            background: "transparent",
            overflow: "visible",
          },
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "#000000cf",
          },
        }}>
        <img
          className={styles.image}
          src={image}
        />
      </Modal>
    </div>
  );
}