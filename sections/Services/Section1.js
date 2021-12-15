import styles from "../Services/SectionsSass/section1.module.scss";
import list from "../../data/services1.json";

export default function Section1() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.overlay}></div>

        <div className={styles.main}>
          <div className={styles.firstChild}>
            <div className={styles.title}>
              <h1>
                <span className={styles.span1}> PCB </span>
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
