import styles from "../PeojectPage/ProjectPageSass/section4.module.scss";
import info from "../../data/projectInfo.json";
export default function Section4() {
  return (
    <>
      <section className={styles.flexContainer}>
        <div>
          <div className={styles.flexChild}>
            {info.map((data, index) => (
              <div index={index} className={styles.section}>
                <h1 className={styles.title}>
                  <span className={styles.span1}>{data.title} </span>
                  <span className={styles.span2}> {data.title2}</span>
                </h1>
                <p className={styles.description}>{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
