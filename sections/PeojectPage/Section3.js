import styles from "../PeojectPage/ProjectPageSass/section3.module.scss";
import PieChart from "../../components/Charts/PieChart";

export default function Section3() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.firstChild}>
        <div className={styles.charts}>
          <div className={styles.BarChart}>
            <PieChart />
          </div>
          <div>
            <img
              className={styles.lineChart}
              src="/svg/lineChart.svg"
              width="575"
              height="363"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
