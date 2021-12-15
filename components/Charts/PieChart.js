import React from "react";
import styles from "../Charts/Pie.module.scss";
import { Pie, defaults } from "react-chartjs-2";

const PieChart = () => {
  return (
    <div className={styles.pie}>
      <Pie
        data={{
          labels: ["Red", "Blue", "Yellow", "Green"],
          datasets: [
            {
              label: "# of votes",
              data: [10, 13, 59, 18],
              backgroundColor: [
                "rgba(110, 162, 133)",
                "rgba(8, 126, 61)",
                "rgba(45, 180, 106)",
                "rgba(46, 226, 127)",
              ],
              borderColor: [
                "rgba(0, 0, 0, 0.5)",
                "rgba(0, 0, 0, 0.5)",
                "rgba(0, 0, 0, 0.5)",
                "rgba(0, 0, 0, 0.5)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
