import Head from "next/head";
import styles from "../styles/sass/pages/homepage.module.scss";
import HomeSections from "../sections/Home/HomeSection";
import Scroller from "../components/Scroll/Scroller";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <Head>
          <title>Hardware Design House | Home</title>
          <meta
            name="description"
            content="
            Our mission is to bring smart, connected devices to every person on earth. Our team has big experience in military and consumer electronics design and manufacturing"
          />
          <meta
            name="keywords"
            content="Hardware design, hardware projects, requirements analysis and initial research, concept design, manufacturing, prototype, designing stage"
          />
          {/* Google */}
          <meta itemProp="name" content="Home" />
          <meta
            itemProp="description"
            content="
            Our mission is to bring smart, connected devices to every person on earth. Our team has big experience in military and consumer electronics design and manufacturing"
          />

          {/* Facebook */}
          <meta property="og:title" content="Hardware design house" />
          <meta
            property="og:description"
            content="
            Our mission is to bring smart, connected devices to every person on earth. Our team has big experience in military and consumer electronics design and manufacturing"
          />
          <meta property="og:url" content="hhtp://hardwarehouses.com" />
          <meta property="og:site_name" content="Hardware design house" />
        </Head>
      </div>
      <div className={`${styles.header} ${styles.container}`}>
        <div className={styles.VideoWrap}>
          <video
            autoPlay
            muted
            controls
            loop
            src="/video/videoplayback.mp4"
            type="video/mp4"
            className={styles.video}
            alt="background video"
          ></video>
        </div>
        <div className={styles.overlay}></div>

        <div className={styles.headerContent}>
          <div className={styles.wrapper}>
            <div className={styles.wrap1}>
              <h1 className={styles.h}>
                <span className={styles.span1}>
                  <img
                    src="/svg/elements/title.svg"
                    className={styles.white}
                    alt="title"
                  />
                </span>
                <br />
                <span className={styles.span2}> To hardest</span>
              </h1>
            </div>
            <div className={styles.wrap2}>
              <p className={styles.p}>
                We’re a team of passionate professionals with more than ten
                years of hands-on experience working in the field. In the last
                few years, we were honored to work on various projects, starting
                from complex military-grade systems, and continued with consumer
                products loved by thousands. Most of the projects were led by
                us, from concept to shipping. In each project, we strive for
                technological excellence and exceptional quality. Below you can
                find the workflow that illustrates our typical approach for each
                project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scroll}>
        <Scroller />
      </div>
      <main>
        <div className={styles.verticalLine}></div>
        <section className={styles}></section>
        <HomeSections />
      </main>
    </>
  );
}
