import React from "react";
import { useState } from "react";
import styles from "../Buttons/buttons.module.scss";
import classNames from "classnames";

export default function Button({
  activeCategory,
  button,
  filter,
  selectedButton,
}) {
  //active

  const [isOpen, setIsOpen] = useState(button[0]);
  const openMenu = (categories) => {
    filter(categories);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.btncontainer}>
        {button.map((categories, index) => {
          return (
            <button
              key={index}
              className={styles.buttons}
              onClick={() => openMenu(categories)}
              className={classNames({
                [styles.buttons]: true,
                [styles.active]: categories === activeCategory,
              })}
              type="button"
            >
              {categories}
            </button>
          );
        })}
      </div>
    </>
  );
}
