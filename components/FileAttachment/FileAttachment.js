import React from "react";
import { useState } from "react";
//import { useDropzone } from "react-dropzone";
import styles from "../FileAttachment/fileAttachment.module.scss";

function Accept({fileHandler}) {
  
  // console.log(selectedFile);
  return (
    <div className={styles.input}>
      <input
        onChange={fileHandler}
        className={styles.inputField}
        type="file"
        id="myfile"
        name="myfile"
        accept="text/csv, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/msword, application/vnd.ms-excel"
        multiple
      />
      {/* .docx => file extention */}
      {/* application/pdf => MIME type */}
      <br />
      <span className={styles.acceptedFiles}>
        Only *.csv, *.pdf, *.docx, *.xlsx, *.doc and *.xls files are allowed.
      </span>
    </div>
  );
}

export default Accept;
