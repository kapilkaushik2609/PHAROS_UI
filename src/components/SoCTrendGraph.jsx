import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SoCTrendGraph = ({ data }) => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // months
    datasets: [
      {
        label: "Supercap SOC",
        data: data,
        fill: true,
        backgroundColor: "rgba(26, 232, 255, 0.1)", // light cyan area
        borderColor: "#1AE8FF", // cyan line
        tension: 0.4, // smooth curve
        pointRadius: 0, // no points
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // hide legend
      title: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#0A2137",
        titleColor: "#fff",
        bodyColor: "#1AE8FF",
      },
    },
    scales: {
      x: {
        grid: { display: false }, // hide vertical grid
        ticks: { color: "#fff" }, // white labels
      },
      y: {
        display: false, // hide Y axis
      },
    },
  };

  return (
    <div className="bg-[#0A2137] p-4 rounded-xl w-full h-36">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-white text-sm font-semibold">Supercap SOC</h2>
        <div className="flex space-x-2 text-xs">
          <button className="px-2 py-1 rounded-md bg-[#305C8F] text-white">
            Day
          </button>
          <button className="px-2 py-1 rounded-md bg-[#0A2137] border border-[#305C8F] text-white">
            Week
          </button>
        </div>
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default SoCTrendGraph;
