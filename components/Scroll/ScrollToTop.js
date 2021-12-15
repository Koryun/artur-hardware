import styles from "../Scroll/scroller.module.scss";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
  scrollToTop,
} from "react-scroll";
export default function ScrollToTop() {
  var Scroll = require("react-scroll");
  var Element = Scroll.Element;

  var scroll = Scroll.animateScroll;

  return (
    <Element name="myScrollToTopElement" className={styles.scroller2}>
      <a onClick={() => scroll.scrollToTop()}>
        <svg
          className={styles.scrollMe}
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="62.576"
          viewBox="0 0 44 62.576"
        >
          <path
            id="right-arrow"
            d="M42.138,43.338a2.219,2.219,0,1,1-3.154-3.122L54.975,24.226H2.208A2.2,2.2,0,0,1,0,22.016a2.221,2.221,0,0,1,2.208-2.24H54.975L38.984,3.815a2.264,2.264,0,0,1,0-3.154,2.209,2.209,0,0,1,3.154,0L61.914,20.438a2.172,2.172,0,0,1,0,3.122Z"
            transform="translate(0 62.576) rotate(-90)"
            fill="#fff"
          />
        </svg>
      </a>
    </Element>
  );
}
