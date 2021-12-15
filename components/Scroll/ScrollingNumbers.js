// import { useState } from "react";
import sections from "../../data/sections.json";
import styles from "../Scroll/nums.module.scss";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function Nums() {
  return (
    <>
      <div className={styles.numWrap}>
        <div className={styles.numbers}>
          <Link
            className={styles.number}
            activeClass={styles.active}
            to={sections[0].id.toString()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            01
          </Link>
          <Link
            className={styles.number}
            activeClass={styles.active}
            to={sections[1].id.toString()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            02
          </Link>
          <Link
            className={styles.number}
            activeClass={styles.active}
            to={sections[2].id.toString()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            03
          </Link>

          <Link
            className={styles.number}
            activeClass={styles.active}
            to={sections[3].id.toString()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            04
          </Link>

          <Link
            className={styles.number}
            activeClass={styles.active}
            to={sections[4].id.toString()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            05
          </Link>
        </div>
      </div>
    </>
  );
}
