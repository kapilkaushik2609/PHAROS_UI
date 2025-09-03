import React, { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { X } from "lucide-react";
import { BiExpand } from "react-icons/bi";

const MonthlyConsumption = ({ selectedCustomer }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const data = {
    "Customer 1": {
      consumption: [120, 210, 310, 400, 450],
      savings: [500, 1200, 1500, 2000, 2500],
      colors: { consumption: "#38bdf8", savings: "#22c55e" }, // Blue + Green
    },
    "Customer 2": {
      consumption: [150, 250, 370, 420, 500],
      savings: [600, 1000, 1700, 1800, 2300],
      colors: { consumption: "#9333ea", savings: "#14b8a6" }, // Orange + Yellow
    },
  };

  const values = data[selectedCustomer] || data["Customer 1"];

  if (!values) {
    return (
      <div className="p-4 bg-[#1D3753] rounded-[20px] text-white border border-[#6783A8]">
        <p>No data available for {selectedCustomer || "this customer"}</p>
      </div>
    );
  }

  const options = {
    chart: {
      borderRadius: 12,
      height: 220, // ⬅️ smaller height 
      backgroundColor: "transparent"
    },
    title: {
      text: "Usage Trend & Projection",
      align: "left",
      style: { color: "#fff", fontSize: "16px", fontWeight: "600" }, // ⬅️ smaller title
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      labels: { style: { color: "#fff", fontSize: "11px" } }, // ⬅️ smaller labels
      lineColor: "#2c5068",
      tickColor: "#2c5068",
    },
    yAxis: [
      {
        title: { text: "Consumption (MWh)", style: { color: "#fff", fontSize: "11px" } },
        labels: { style: { color: "#fff", fontSize: "11px" } },
        gridLineColor: "#2c5068",
      },
      {
        title: { text: "Savings ($)", style: { color: "#fff", fontSize: "11px" } },
        labels: { style: { color: "#fff", fontSize: "11px" } },
        opposite: true,
        gridLineWidth: 0,
      },
    ],
    legend: {
      itemStyle: { color: "#fff", fontSize: "11px" }, // smaller legend
      align: "center",
      verticalAlign: "bottom",
    },
    tooltip: {
      shared: true,
      backgroundColor: "#1c3b57",
      borderColor: "#2c5068",
      style: { color: "#fff", fontSize: "12px" },
    },
    credits: { enabled: false },
    plotOptions: {
      column: { borderRadius: 3, pointPadding: 0.15, groupPadding: 0.05 },
      line: { marker: { enabled: true, symbol: "circle", radius: 3 } }, // smaller markers
    },
    series: [
      {
        type: "column",
        name: "Consumption (MWh)",
        data: values?.consumption,
        color: values?.colors?.consumption,
        yAxis: 0,
      },
      {
        type: "line",
        name: "Savings ($)",
        data: values.savings,
        color: values?.colors?.savings,
        yAxis: 1,
      },
    ],
  };

  return (
    <>
      {/* Normal card */}
      <div className="p-4 bg-[#1D3753] rounded-[20px] text-white border border-[#6783A8] relative">
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute top-3 right-3 p-2 rounded-lg hover:bg-[#2c5068] transition cursor-pointer"
        >
          <BiExpand size={22} className="text-white" />
        </button>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4
                 bg-black/40 backdrop-blur-sm"
        // bg-black/40 = transparent black
        // backdrop-blur-sm = blur effect (optional, remove if not needed)
        >
          <div className="bg-[#1D3753] w-[95%] h-[85%] max-w-7xl rounded-xl relative flex flex-col p-6 shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-red-500/30 transition cursor-pointer"
            >
              <X size={26} className="text-white" />
            </button>

            {/* Chart wrapper */}
            <div className="flex-1 overflow-hidden">
              <HighchartsReact
                highcharts={Highcharts}
                options={{
                  ...options,
                  chart: {
                    ...options.chart,
                    height: "80%", // chart height reduced
                    spacingBottom: 40, // space for x-axis
                  },
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MonthlyConsumption;
