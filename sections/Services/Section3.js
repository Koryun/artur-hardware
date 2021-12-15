import styles from "../Services/SectionsSass/section3.module.scss";
import list from "../../data/services3.json";
export default function Section3() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.main}>
          <div className={styles.firstChild}>
            <div className={styles.title}>
              <h1 className={styles.h}>
                <span className={styles.span1}> POWER </span>
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
