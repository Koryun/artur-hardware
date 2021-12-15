import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../../components/Carousel/carousel.module.scss";

export default function CarouselComponent() {
  return (
    <div className={styles.all}>
      <div className={styles.wrapper}>
        <Carousel infiniteLoop autoPlay className={styles.meh}>
          <div>
            <img
              src="../images/projectimg.jpg"
              alt="project's image"
              className={styles.smallimg}
            />
          </div>
          <div>
            <img src="../images/projectimg.jpg" alt="project's image" />
          </div>
          <div>
            <img src="../images/projectimg.jpg" alt="project's image" />
          </div>
          <div>
            <img src="../images/projectimg.jpg" alt="project's image" />
          </div>
          <div>
            <img src="../images/projectimg.jpg" alt="project's image" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
