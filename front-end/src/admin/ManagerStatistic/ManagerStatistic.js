import React from "react";
import { Bar } from "react-chartjs-2";
import "./ManagerStatistic.css";
import anh10 from "../../assets/user-icon.png";
import anh11 from "../../assets/projecticon.png";
import anh12 from "../../assets/re-icon.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   plugins: {
//     title: {
//       display: true,
//       text: "Chart.js Bar Chart - Stacked",
//     },
//   },

//   interaction: {
//     mode: "index",
//     intersect: false,
//   },
//   scales: {
//     x: {
//       stacked: true,
//     },
//     y: {
//       stacked: true,
//     },
//   },
// };

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       backgroundColor: "rgb(255, 99, 132)",
//       stack: "Stack 0",
//     },
//     {
//       label: "Dataset 2",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       backgroundColor: "rgb(75, 192, 192)",
//       stack: "Stack 0",
//     },
//     {
//       label: "Dataset 3",
//       data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//       backgroundColor: "rgb(53, 162, 235)",
//       stack: "Stack 1",
//     },
//   ],
// };

export default function ManagerStatistic() {
  return (
    <div className="admin-ana-content">
      <h1 className="ana-table-title">Thống kê</h1>
      <div className="admin-ana-container">
        <div className="admin-ana-info">
          <div className="admin-ana-info-re ">
            <div className="ana-info-re-body">
              <div className="ana-info-re-content">
                <span className="ana-info-re-header">Nhà đất</span>
                <span>100 </span>
              </div>
              <img
                className="ana-img"
                src={anh12}
                width="100px"
                height="100px"
              ></img>
            </div>
            <button className="ana-info-re-btn">Xem chi tiết</button>
          </div>
          <div className="admin-ana-info-pj ">
            <div className="ana-info-pj-body">
              <div className="ana-info-pj-content">
                <span className="ana-info-pj-header">Dự án</span>
                <span>25 </span>
              </div>
              <img src={anh11} width="100px" height="100px"></img>
            </div>
            <button className="ana-info-pj-btn">Xem chi tiết</button>
          </div>
          <div className="admin-ana-info-us ">
            <div className="ana-info-us-body">
              <div className="ana-info-us-content">
                <span className="ana-info-us-header">Tài khoản</span>
                <span>4 </span>
              </div>
              <img src={anh10} width="100px" height="100px"></img>
            </div>
            <button className="ana-info-us-btn">Xem chi tiết</button>
          </div>
        </div>
        <div className="admin-ana-chart-table">
          <div className="admin-ana-table">
            <table className="ana-table-content">
              <tr>
                <th>Xem nhiều nhất</th>
              </tr>
              <tr>
                <td>Vinhomes</td>
              </tr>
              <tr>
                {" "}
                <td>Sala</td>
              </tr>
              <tr>
                {" "}
                <td>NovaLand</td>
              </tr>
              <tr>
                {" "}
                <td>DHQG</td>
              </tr>
            </table>
          </div>
          <div className="admin-ana-chart">
            <Bar
              className="chart"
              data={{
                labels: ["Vinhomes", "Sala", "NovaLand", "DHQG"],
                datasets: [
                  {
                    label: "Cost",
                    backgroundColor: [
                      "#3e95cd",
                      "#8e5ea2",
                      "#3cba9f",
                      "#e8c3b9",
                      "#c45850",
                    ],
                    data: [2478, 5267, 734, 784, 433],
                  },
                ],
              }}
              height={300}
              width={800}
              options={{
                legend: { display: false },
                title: {
                  display: true,
                  text: "Predicted world population (millions) in 2050",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
