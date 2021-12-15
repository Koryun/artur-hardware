import styles from "../Footer/footer.module.scss";
import ScrollToTop from "../Scroll/ScrollToTop";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.firstChild}>
            <img
              className={styles.logo}
              src="/svg/FooterLogo.svg"
              alt="logo"
              width="311.82"
              height="56.679"
            />
          </div>

          <div className={styles.secondChild}>
            <div className={styles.section1}>
              <p>We are SMART IN CONTROL. </p>
              <p> Let us show you how.</p>
            </div>

            <div className={styles.section2}>
              <p> Call us: </p>
              <p>
                <a className={styles.a} href="tel:+37455342262">
                  +37455342262
                </a>
                | |
                <a className={styles.a} href="tel:+37441777704">
                  +37441777704
                </a>
              </p>
              <div className={styles.section3}>
                <p>Email us: </p>
                <p>
                  <a className={styles.mail} href="Info@hardware.am">
                    info@hardwarehouses.com
                  </a>
                </p>
              </div>
              <div className={styles.onTop}>
                <p className={styles.topP}> Back to top </p>
                <ScrollToTop />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.copyRight}>
          <p>© Hardware Design House 2021</p>
        </div>
      </footer>
    </>
  );
}
