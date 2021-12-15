import { useState, useCallback } from "react";
import classNames from "classnames";

import Modal from "./Modal";
import Accept from "../FileAttachment";
import PopUp from "../PopUp/popUp";
import Loader from "../Loader";

import styles from "./modalButton.module.scss";

//email regex
const emailRegex = /\S+@\S+\.\S+/;

const initialValue = { mail: false, message: false };

export default function ModalButton(onClose) {
  const [errors, setErrors] = useState({ ...initialValue });
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [isOpenConfirmationModal, setIsOpenConfirmationModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const toggleConfirmationModal = useCallback(() => {
    setIsOpenConfirmationModal(!isOpenConfirmationModal);
  }, [isOpenConfirmationModal]);

  const inputHandler = (e) => {
    setMail(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);

    if (setMessage.length && errors.message) {
      setErrors({
        ...errors,
        message: false,
      });
    }
  };

  const fileHandler = (e) => {
    setSelectedFile(e.target.files);
  };

  const handleSubmit = useCallback(() => {
    const newErrors = { ...initialValue };

    if (mail.length === 0 || !emailRegex.test(mail)) {
      newErrors.mail = true;
    }

    if (message.length === 0) {
      newErrors.message = true;
    }

    setErrors(newErrors);

    const isFormValid = Object.values(newErrors).indexOf(true) === -1;

    if (isFormValid) {
      const formData = new FormData();

      formData.append("email", mail);
      formData.append("message", message);

      if (selectedFile) {
        for (const file of selectedFile) {
          formData.append("files", file, file.name);
        }
      }

      setShowLoader(true);

      fetch("http://api.hardwarehouses.com/contact-us", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          setShowLoader(false);
          toggleModal();
          toggleConfirmationModal();
          console.log("Success:", result);
        })
        .catch((error) => {
          setShowLoader(false);
          toggleModal();
          toggleConfirmationModal();
          console.error("Error:", error);
        });
    }
  }, [mail, message, selectedFile]);

  return (
    <>
      <button className={styles.requestBtn} onClick={toggleModal}>
        Request Quote
      </button>
      <Modal toggleModal={toggleModal} show={showModal}>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <div className={styles.firstImg}>
              <img
                src="/images/request.png"
                alt="request quote"
                width="462"
                height="565.7"
              />
            </div>

            <div className={styles.secondImg}>
              <img src="/logo.svg" alt="logo" width="130" height="150" />
            </div>
          </div>
          <div className={styles.requestQuote}>
            <h1 className={styles.title}> Request quote </h1>
            <h5 className={styles.text}>
              Working with us is always a good idea.
            </h5>
            <div className={styles.emailField}>
              <i className={styles.icon}>
                <img src="/svg/mail.svg" alt="" />
              </i>
              <input
                onChange={inputHandler}
                value={mail}
                type="text"
                className={classNames(styles.inputEmail, {
                  [styles.emailError]: errors.mail,
                })}
                variant="danger"
                placeholder="*Your email"
                required
              />

              <div className={styles.warning}>
                {errors.mail && "*This field can't be empty."}
              </div>
            </div>

            <div className={styles.message}>
              <textarea
                onChange={messageHandler}
                value={message}
                type="text"
                className={classNames(styles.textArea, {
                  [styles.textError]: errors.message,
                })}
                required
                placeholder="*Your message here"
              />
              <div className={styles.warning}>
                {errors.message && "*This field can't be empty."}
              </div>
            </div>
            <Accept fileHandler={fileHandler} />
            <div className={styles.buttons}>
              <button
                href="#"
                type="cancel"
                className={styles.cancel}
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button className={styles.submit} onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <PopUp show={isOpenConfirmationModal} onClose={toggleConfirmationModal} />
      <Loader show={showLoader} />
    </>
  );
}
