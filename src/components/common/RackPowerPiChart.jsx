import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function RackPowerPiChart() {
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
      height: 180,
      spacing: [0, 0, 0, 0], // top, right, bottom, left
      margin: [0, 0, 0, 0],
    },
    title: { text: null },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: { point: { valueSuffix: "%" } },
    plotOptions: {
      pie: {
        innerSize: "60%",
        dataLabels: { enabled: false },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Share",
        colorByPoint: true,
        data: [
          { name: "Supercap", y: 7, color: "#A020F0" },
          { name: "Grid", y: 46, color: "#3B82F6" },
          { name: "BESS", y: 32, color: "#FACC15" },
          { name: "Sola", y: 15, color: "#22C55E" },
        ],
      },
    ],
    legend: {
      enabled: true,
      itemStyle: { color: "#fff", fontSize: "12px" },
      align: "center",
      verticalAlign: "bottom",
      layout: "horizontal",
      symbolHeight: 10,
      symbolWidth: 10,
      symbolRadius: 5,
      padding: 0,
      itemMarginTop: 2,
      itemMarginBottom: 2,
    },
    credits: { enabled: false },
  };

  return (
    <div className="p-2">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default RackPowerPiChart;
