import React from "react";
import { createPortal } from "react-dom";
import styles from "./popUp.module.scss";

const PopUp = ({ show, onClose }) => {
  if (!show) return null;

  return createPortal(
    <div>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.popUp} onClick={e => e.stopPropagation()}>
          <div className={styles.content}>
            <img src="../../svg/popUp.svg" />
            <div className={styles.context}>
              <h1 className={styles.h}>Thank You!</h1>
              <p className={styles.text}>You will be hearing from us soon!</p>
            </div>
            <button className={styles.btn} onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default PopUp;
