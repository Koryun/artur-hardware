import styles from "../Services/SectionsSass/section4.module.scss";
import list from "../../data/services4.json";

export default function Section4() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.overlay}>
          <img
            className={styles.img1}
            src="/images/fgpa.jpg"
            width="679"
            height="568.04"
            alt="background-image"
          ></img>
        </div>
        <div className={styles.main}>
          <div className={styles.firstChild}>
            <div className={styles.title}>
              <h1>
                <span className={styles.span1}> FGPA </span>
                <br />
                <span className={styles.span2}> Design </span>
              </h1>
            </div>
          </div>
          <div className={styles.secondChild}>
            <div className={styles.content}>
              <div>
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
        </div>
      </section>
    </>
  );
}
