import Head from "next/head";
import styles from "../styles/sass/pages/services.module.scss";
import Scroller from "../components/Scroll/Scroller";
import Section1 from "../sections/Services/Section1";
import Section2 from "../sections/Services/Section2";
import Section3 from "../sections/Services/Section3";
import Section4 from "../sections/Services/Section4";
import Section5 from "../sections/Services/Section5";

export default function Services() {
  return (
    <>
      <Head>
        <title> Hardware Design House | Services</title>
        <meta
          name="description"
          content="Our services include PCB, Analog, Power, FGPA designs and Embedded Software as well. "
        />
        <meta
          name="keywords"
          content="Hardware design, hardware projects, requirements analysis and initial research, 
          concept design, design of hardware, PCB Design, Analog, Design, Power Design, FGPA Design, Embedded Software."
        />
        {/* Google */}
        <meta itemProp="name" content="Services" />
        <meta
          itemProp="description"
          content="Our services include PCB, Analog, Power, FGPA designs and Embedded Software as well."
        />

        {/* Facebook */}
        <meta property="og:title" content="Services" />
        <meta
          property="og:description"
          content="Our services include PCB, Analog, Power, FGPA designs and Embedded Software as well."
        />
        <meta property="og:url" content="hhtp://hardwarehouses.com/services" />
        <meta property="og:site_name" content="Hardware design house" />
      </Head>
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <img
            src="/svg/elements/bgSmall.svg"
            width="722.33"
            height="919"
            className={styles.img}
            alt="background image"
          />

          <div className={styles.firstChild}>
            <h1 className={styles.h}>
              <span className={styles.span1}> The quality</span>
              <span className={styles.span2}> you deserve</span>
            </h1>
          </div>

          <div className={styles.secondChild}>
            <div className={styles.types}>
              <img
                src="/svg/services/1.svg"
                alt="required analysis"
                width="350"
                height="281"
                className={styles.type}
              />
              <img
                src="/svg/services/2.svg"
                alt="concept design"
                width="350"
                height="281"
                className={styles.type}
              />
              <img
                src="/svg/services/3.svg"
                alt="designing stage"
                width="350"
                height="281"
                className={styles.type}
              />
              <img
                src="/svg/services/4.svg"
                alt="prototype"
                width="350"
                height="281"
                className={styles.type}
              />
              <img
                src="/svg/services/5.svg"
                alt="nmanufacturing"
                width="350"
                height="281"
                className={styles.type}
              />
              <div className={styles.scroller}>
                <Scroller />
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </main>
    </>
  );
}
