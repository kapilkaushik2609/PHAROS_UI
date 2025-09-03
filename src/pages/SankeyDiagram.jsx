// import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import Sankey from "highcharts/modules/sankey";

// const SankeyDiagram = () => {
//   const options = {
//     chart: {
//       zooming: { type: "xy" },
//       panning: { enabled: true, type: "xy" },
//       panKey: "shift",
//       backgroundColor: null, // removes chart background
//       height: "57%",
//       plotBackgroundColor: null, // removes plot background
//     },
//     accessibility: {
//       point: {
//         valueDescriptionFormat:
//           "{index}. {point.from} to {point.to}, {point.weight}.",
//       },
//     },

//     tooltip: {
//       headerFormat: null,
//       pointFormat:
//         "{point.fromNode.name} → {point.toNode.name}: {point.weight:.2f} quads",
//       nodeFormat: "{point.name}: {point.sum:.2f} quads",
//     },
//     credits: { enabled: false },
//     series: [
//       {
//         keys: ["from", "to", "weight"],
//         nodes: [
//           { id: "Electricity & Heat", color: "#ffa500", offset: -110 },
//           { id: "Net Import", color: "#000000" },
//           { id: "Residential", color: "#74ffe7", column: 2, offset: 50 },
//           { id: "Commercial", color: "#8cff74", column: 2, offset: 50 },
//           { id: "Industrial", color: "#ff8da1", column: 2, offset: 50 },
//           { id: "Transportation", color: "#f4c0ff", column: 2, offset: 50 },
//           { id: "Rejected Energy", color: "#e6e6e6", column: 3, offset: -30 },
//           { id: "Energy Services", color: "#F9E79F", column: 3 },
//           { id: "Solar", color: "#009c00" },
//           { id: "Nuclear", color: "#1a8dff" },
//           { id: "Hydro", color: "#009c00" },
//           { id: "Wind", color: "#009c00" },
//           { id: "Geothermal", color: "#009c00" },
//           { id: "Natural Gas", color: "#1a8dff" },
//           { id: "Biomass", color: "#009c00" },
//           { id: "Coal", color: "#989898" },
//           { id: "Petroleum", color: "#989898", offset: -1 },
//         ],
//         data: [
//           ["Net Import", "Electricity & Heat", 0.14],
//           ["Solar", "Electricity & Heat", 1.28],
//           ["Nuclear", "Electricity & Heat", 8.05],
//           ["Hydro", "Electricity & Heat", 2.31],
//           ["Wind", "Electricity & Heat", 3.84],
//           ["Geothermal", "Electricity & Heat", 0.15],
//           ["Natural Gas", "Electricity & Heat", 12.5],
//           ["Coal", "Electricity & Heat", 8.9],
//           ["Biomass", "Electricity & Heat", 0.41],
//           ["Petroleum", "Electricity & Heat", 0.24],
//           ["Electricity & Heat", "Residential", 5.19],
//           ["Solar", "Residential", 0.4],
//           ["Geothermal", "Residential", 0.04],
//           ["Natural Gas", "Residential", 5.17],
//           ["Biomass", "Residential", 0.48],
//           ["Petroleum", "Residential", 0.98],
//           ["Electricity & Heat", "Commercial", 4.69],
//           ["Solar", "Commercial", 0.16],
//           ["Geothermal", "Commercial", 0.02],
//           ["Natural Gas", "Commercial", 3.65],
//           ["Coal", "Commercial", 0.02],
//           ["Biomass", "Commercial", 0.15],
//           ["Petroleum", "Commercial", 0.88],
//           ["Electricity & Heat", "Industrial", 3.44],
//           ["Solar", "Industrial", 0.04],
//           ["Natural Gas", "Industrial", 10.8],
//           ["Coal", "Industrial", 0.99],
//           ["Biomass", "Industrial", 2.27],
//           ["Petroleum", "Industrial", 9.13],
//           ["Electricity & Heat", "Transportation", 0.02],
//           ["Natural Gas", "Transportation", 1.29],
//           ["Biomass", "Transportation", 1.57],
//           ["Petroleum", "Transportation", 24.6],
//           ["Electricity & Heat", "Rejected Energy", 24.3],
//           ["Residential", "Rejected Energy", 4.29],
//           ["Commercial", "Rejected Energy", 3.35],
//           ["Industrial", "Rejected Energy", 13.6],
//           ["Transportation", "Rejected Energy", 21.7],
//           ["Residential", "Energy Services", 7.97],
//           ["Commercial", "Energy Services", 6.22],
//           ["Industrial", "Energy Services", 13.1],
//           ["Transportation", "Energy Services", 5.77],
//         ],
//         type: "sankey",
//         name: "US Energy Sankey",
//         dataLabels: {
//           style: { color: "var(--highcharts-neutral-color-100, #000)" },
//         },
//       },
//     ],
//   };

//   return (
//     <div className="text-white p-1">
//       {/* <h1 className="text-3xl font-bold text-center mb-6 text-white">
//         Sankey Diagram
//       </h1> */}

//       <div className=" rounded-2xl border border-gray-300 shadow-sm p-6">
//         <HighchartsReact highcharts={Highcharts} options={options} />
//       </div>
//     </div>
//   );
// };

// export default SankeyDiagram;


import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Sankey from "highcharts/modules/sankey";

// initialize sankey
// if (typeof Highcharts === "object") {
//   Sankey(Highcharts);
// }

const SankeyDiagram = ({ selectedCustomer }) => {
  // ---------- Options for Customer 1 ----------
  const optionsCustomer1 = {
    chart: {
      backgroundColor: null, plotBackgroundColor: null,
      height: 270
    },
    credits: { enabled: false },
    title: { text: null },
    tooltip: { enabled: true },
    plotOptions: { sankey: { curveFactor: 0.6 } },
    series: [
      {
        keys: ["from", "to", "weight"],
        type: "sankey",
        name: "Power Flow",
        nodes: [
          { id: "Live", color: "#e74c3c" },
          { id: "Utility", color: "#3498db" },
          { id: "Peneviable", color: "#9b59b6" },
          { id: "Cooling", color: "#2ecc71" },
          { id: "IT Load", color: "#f1c40f" },
          { id: "Lighting", color: "#e67e22" },
        ],
        data: [
          ["Live", "IT Load", 3.3],
          ["Utility", "Lighting", 4.0],
          ["Peneviable", "Cooling", 0.3],
          ["Live", "Lighting", 2.0],
          ["Utility", "Cooling", 1.5],
        ],
        dataLabels: {
          useHTML: true,
          nodeFormat:
            '<span style="font-size:14px; font-weight:600; color:#fff">{point.name}</span>',
          style: { textOutline: "none" },
        },
        linkOpacity: 0.6,
      },
    ],
  };

  // ---------- Options for Customer 2 ----------
  const optionsCustomer2 = {
    chart: { backgroundColor: null, plotBackgroundColor: null },
    credits: { enabled: false },
    title: { text: null },
    tooltip: { enabled: true },
    plotOptions: { sankey: { curveFactor: 0.55 } },
    series: [
      {
        keys: ["from", "to", "weight"],
        type: "sankey",
        name: "Power Flow",
        nodes: [
          { id: "Solar", color: "#f39c12" },
          { id: "Wind", color: "#16a085" },
          { id: "Grid", color: "#3498db" },
          { id: "Battery", color: "#2ecc71" },
          { id: "Servers", color: "#e74c3c" },
          { id: "Cooling", color: "#9b59b6" },
          { id: "Lighting", color: "#f1c40f" },
          { id: "Office", color: "#1abc9c" },
          { id: "EV Charging", color: "#e67e22" },
        ],
        data: [
          // Renewable inputs
          ["Solar", "Battery", 2.5],
          ["Solar", "Cooling", 1.5],
          ["Wind", "Battery", 1.8],
          ["Wind", "Lighting", 1.0],

          // Grid dependencies
          ["Grid", "Servers", 4.5],
          ["Grid", "Cooling", 2.0],
          ["Grid", "Office", 1.2],

          // Battery discharges
          ["Battery", "Servers", 2.0],
          ["Battery", "Office", 1.0],
          ["Battery", "EV Charging", 1.5],
        ],
        dataLabels: {
          useHTML: true,
          nodeFormat:
            '<span style="font-size:14px; font-weight:600; color:#fff">{point.name}</span>',
          style: { textOutline: "none" },
        },
        linkOpacity: 0.65,
      },
    ],
  };

  const options =
    selectedCustomer === "Customer 2" ? optionsCustomer2 : optionsCustomer1;

  return (
    <div className="text-white">
      <div className="p-1 rounded-2xl border border-gray-300 shadow-md bg-white/5">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default SankeyDiagram;
