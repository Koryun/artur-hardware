import styles from "../PeojectPage/ProjectPageSass/section2.module.scss";

export default function Section2() {
  return (
    <>
      <div className={styles.flexContainer}>
        <div className={styles.firstChild}>
          <img
            src="/svg/elements/bgSmall.svg"
            width="700.33"
            height="809"
            className={styles.backgroundImg}
            alt="background image"
          />
        </div>
        <div className={styles.secondChild}>
          <h1 className={styles.title}> Summary</h1>

          <div className={styles.par}>
            <p className={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry’s standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
