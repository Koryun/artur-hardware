import styles from "../Scroll/scroller.module.scss";
import { Element, animateScroll } from "react-scroll";

export default function Scroller() {
  return (
    <Element name="myScrollToElement">
      <a onClick={() => animateScroll.scrollMore(970, 500)}>
        <img
          src=""
          className={styles.scroller}
          src="/svg/elements/Scroller.svg"
          width="44"
          height="62.576"
          alt="scroll more"
        />
      </a>
    </Element>
  );
}
