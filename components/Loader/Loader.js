import React from "react";
import { createPortal } from "react-dom";
import styles from "../Loader/Loader.module.scss";

const Loader = ({ show, onClose }) => {
  if (!show) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.spinner} />
    </div>
    ,
    document.body
  );
}

export default Loader;
