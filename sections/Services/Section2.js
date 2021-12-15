import styles from "../Services/SectionsSass/section2.module.scss";
import list from "../../data/services2.json";

export default function Section2() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.overlay}>
          <img
            className={styles.img1}
            src="/images/analog2.png"
            width="744"
            height="459"
            alt="PCB"
          ></img>
        </div>
        <div className={styles.secondImg}>
          <img
            src="/images/topbgImg.jpg"
            width="902.33"
            height="919"
            className={styles.img2}
            alt="background image"
          />
        </div>
        <div className={styles.main}>
          <div className={styles.firstChild}>
            <div className={styles.title}>
              <h1>
                <span className={styles.span1}> ANALOG </span>
                <br />
                <span className={styles.span2}> Design </span>
              </h1>
            </div>
          </div>
          <div className={styles.secondChild}>
            <div className={styles.content}>
              {list.map((data, index) => (
                <ul key={index}>
                  <li className={styles.li}>
                    <p className={styles.p}>{data}</p>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
