import { useCallback } from "react";
import ReactDOM from "react-dom";
import styles from "../Modal/modal.module.scss";

const Modal = ({ show, toggleModal, changeHandler, children }) => {
  if (!show) return null;

  return ReactDOM.createPortal(
    <div>
      <div className={styles.customOverlay} onClick={toggleModal}>
        <div
          className={styles.styledModal}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.modalHeader}>
            <a href="#" onClick={toggleModal}>
              <img
                className={styles.close}
                src="/svg/elements/CloseBtn.svg"
                alt="closing button"
                width="44"
                height="44"
              />
            </a>
          </div>

          <div className={styles.modalBody}>{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
