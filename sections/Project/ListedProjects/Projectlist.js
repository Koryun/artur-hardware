import React from "react";
import Link from "next/link";
import styles from "../ListedProjects/projectlist.module.scss";

function Menu({ menuItem }) {
  return (
    <>
      <div className={styles.wrap}>
        {menuItem.map((item, index) => {
          return (
            <section className={styles.section} key={index}>
              <div>
                <div className={styles.container}>
                  <Link href="/page">
                    <img
                      className={styles.img}
                      src={item.img}
                      alt="projects"
                      width="572"
                      height="400"
                    />
                  </Link>

                  <div>
                    <img
                      src={item.label1}
                      className={styles.partnership}
                      alt={item.label1}
                      height={item.height}
                    />
                  </div>
                  <div>
                    <img
                      src={item.label2}
                      className={styles.endToEnd}
                      alt={item.label2}
                      height={item.height}
                    />
                  </div>
                  <div className={styles.lastHope}>
                    <Link href="/page">
                      <h1 className={styles.title}> {item.title} </h1>
                    </Link>

                    <p className={styles.description}> {item.description} </p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default Menu;
