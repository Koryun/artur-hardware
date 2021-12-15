import homedata from "../../data/sections.json";
import styles from "../Home/homeSection.module.scss";
import Nums from "../../components/Scroll/ScrollingNumbers";
export default function HomeSections() {
  return (
    <div>
      {homedata.map((sections) => (
        <div key={sections.id} className={styles.main}>
          <section id={sections.id} className={styles.section}>
            <Nums />
            <div className={styles.container}>
              <div className={styles.box}>
                <img
                  className={styles.svg1}
                  src={sections.svg}
                  alt={sections.title}
                  width={sections.width}
                  height={sections.height}
                />
              </div>
              <div className={styles.content}>
                <h1 className={styles.h}> {sections.title}</h1>
                <p className={styles.description}> {sections.description}</p>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
