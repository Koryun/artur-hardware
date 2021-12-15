import styles from "../PeojectPage/ProjectPageSass/section1.module.scss";
import CarouselComponent from "../../components/Carousel/Carousel";
export default function Section1() {
  return (
    <div className={styles.card}>
      <div className={styles.par}>
        <h1 className={styles.h}>
          Autonomous system of encrypted communications
        </h1>
      </div>
      <div className={styles.carouselComp}>
        <CarouselComponent />
      </div>
      <div className={styles.secondChild}>
        <p className={styles.p}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className={styles.cat}>
          Category: <span className={styles.category}>military </span>
        </p>
      </div>
    </div>
  );
}
