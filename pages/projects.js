import items from "../data/projects.json";
import Head from "next/head";
import { useState } from "react";
import Button from "../sections/Project/Buttons/Buttons";
import Menu from "../sections/Project/ListedProjects/Projectlist";
import styles from "../styles/sass/pages/projects.module.scss";
import Scroller from "../components/Scroll/Scroller";
let selectedButton = "ALL PROJECTS";
const allCategories = [
  "ALL PROJECTS",
  ...new Set(items.map((item) => item.category)),
];
export default function Projects() {
  const [menuItem, setMenuItem] = useState(items);
  const [activeCategory, setActiveCategory] = useState(allCategories[0]);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    filter(category);
  };

  const filter = (category) => {
    if (category === "ALL PROJECTS") {
      return setMenuItem(items);
    }

    const filteredData = items.filter((item) => item.category === category);
    return setMenuItem(filteredData);
  };

  return (
    <>
      <Head>
        <title> Hardware Design House | Projects</title>
        <meta
          name="description"
          content="Here you can find some of the projects that we designed."
        />
        <meta
          name="keywords"
          content="projects, hardware, military, industrial, medical, retail, private contracts, analysis systems, exoskeleton, encrypted system"
        />

        <meta itemProp="name" content="Projects" />
        <meta
          itemProp="description"
          content="Here you can find some of the projects that we designed."
        />

        {/* Facebook */}
        <meta property="og:title" content="Projects" />
        <meta
          property="og:description"
          content="Here you can find some of the projects that we designed."
        />
        <meta property="og:url" content="hhtps://hardwarehouses.com/projects" />
        <meta property="og:site_name" content="Hardware design house" />
      </Head>
      <div>
        <div className={styles.headContainer}>
          <div className={styles.container}>
            <img
              src="/svg/elements/bgSmall.svg"
              width="722.33"
              height="919"
              className={styles.img}
              alt="background image"
            />

            <div className={styles.title}>
              <h1 className={styles.h}>
                <span className={styles.span1}> The Projects </span> <br />
                <span className={styles.span2}> we designed</span>
              </h1>
              <div className={styles.content}>
                <p className={styles.p}>
                  On this page you can find some of the projects that we
                  designed and built. Some of those were build from scratch,
                  whereas others were designed in close cooperation with
                  different partners. Each solution you see here has a long
                  story behind it and thousands of hours of hard work. Due to
                  obvious reasons, we can not provide more details. You can
                  observe each specific project by simply clicking on it.
                </p>
              </div>
            </div>
            <div className={styles.scroller}>
              <Scroller />
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className={styles.AllProjects}>
          <Button
            button={buttons}
            className={styles.buttons}
            activeCategory={activeCategory}
            filter={handleCategoryChange}
          />

          <Menu menuItem={menuItem} />
        </div>
      </main>
    </>
  );
}
