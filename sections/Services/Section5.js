import styles from "../Services/SectionsSass/section5.module.scss";
import list1 from "../../data/section5.json";
import list2 from "../../data/section5.1.json";

export default function Section5() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.overlay}> </div>

        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h1>
                {" "}
                <span className={styles.span1}> Embedded </span>
                <br />
                <span className={styles.span2}> Software </span>
              </h1>
            </div>
            <ul>
              <div className={styles.firsOne}>
                {list1.map((data, index) => (
                  <ul className={styles.text} key={index}>
                    <li className={styles.li}>
                      <p className={styles.p}>{data}</p>
                    </li>
                  </ul>
                ))}
              </div>
            </ul>
          </div>
          <div className={styles.content2}>
            <div>
              {list2.map((data, index) => (
                <ul className={styles.text2} key={index}>
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
