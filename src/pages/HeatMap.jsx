// selected one

// import React, { useEffect } from "react";
// import * as d3 from "d3";
// import { useNavigate } from "react-router-dom";

// const HeatMap = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Clear any previous SVG if re-rendered
//     d3.select("#heatmap-container").selectAll("*").remove();

//     // Set dimensions and margins
//     const margin = { top: 80, right: 25, bottom: 30, left: 40 },
//       width = 800 - margin.left - margin.right,
//       height = 800 - margin.top - margin.bottom;

//     // Append the svg object
//     const svg = d3
//       .select("#heatmap-container")
//       .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", `translate(${margin.left}, ${margin.top})`);

//     // Dummy data
//     d3.csv(
//       "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv"
//     ).then(function (data) {
//       const myGroups = Array.from(new Set(data.map((d) => d.group)));
//       const myVars = Array.from(new Set(data.map((d) => d.variable)));

//       // Reverse Y-axis so v10 is at the top
//       const y = d3
//         .scaleBand()
//         .range([0, height])
//         .domain(myVars.reverse())
//         .padding(0.05);

//       // X axis
//       const x = d3.scaleBand().range([0, width]).domain(myGroups).padding(0.05);
//       svg
//         .append("g")
//         .style("font-size", 15)
//         .attr("transform", `translate(0, ${height})`)
//         .call(d3.axisBottom(x).tickSize(0))
//         .select(".domain")
//         .remove();

//       // Y axis
//       svg
//         .append("g")
//         .style("font-size", 15)
//         .call(d3.axisLeft(y).tickSize(0))
//         .select(".domain")
//         .remove();

//       // Color scale
//       const myColor = d3
//         .scaleSequential()
//         .interpolator(d3.interpolateInferno)
//         .domain([1, 100]);

//       // Tooltip
//       const tooltip = d3
//         .select("#heatmap-container")
//         .append("div")
//         .style("opacity", 0)
//         .attr(
//           "class",
//           "tooltip bg-black border p-2 rounded shadow-md absolute"
//         );

//       // Mouse events
//       const mouseover = function () {
//         tooltip.style("opacity", 1);
//         d3.select(this).style("stroke", "white").style("opacity", 1);
//       };
//       const mousemove = function (event, d) {
//         tooltip
//           .html("Value: " + d.value)
//           .style("left", event.pageX + 20 + "px")
//           .style("top", event.pageY - 20 + "px");
//       };
//       const mouseleave = function () {
//         tooltip.style("opacity", 0);
//         d3.select(this).style("stroke", "none").style("opacity", 0.8);
//       };

//       // Animate row by row (v10 first, then v9, ... till v1)
//       data.forEach((d) => {
//         d.rowIndex = myVars.indexOf(d.variable); // row index (0 = v10 at top)
//         d.colIndex = myGroups.indexOf(d.group); // col index
//       });

//       // Rectangles
//       svg
//         .selectAll()
//         .data(data)
//         .join("rect")
//         .attr("x", (d) => x(d.group))
//         .attr("y", -50) // start above chart
//         .attr("rx", 4)
//         .attr("ry", 4)
//         .attr("width", x.bandwidth())
//         .attr("height", y.bandwidth())
//         .style("fill", (d) => myColor(d.value))
//         .style("stroke-width", 4)
//         .style("stroke", "none")
//         .style("opacity", 0.8)
//         .on("mouseover", mouseover)
//         .on("mousemove", mousemove)
//         .on("mouseleave", mouseleave)
//         .transition()
//         .delay((d) => d.rowIndex * myGroups.length * 20 + d.colIndex * 20) // faster
//         .duration(150) // quick drop
//         .attr("y", (d) => y(d.variable));

//       // Add values as text
//       svg
//         .selectAll(".cell-text")
//         .data(data)
//         .join("text")
//         .attr("class", "cell-text")
//         .attr("x", (d) => x(d.group) + x.bandwidth() / 2)
//         .attr("y", -50)
//         .attr("text-anchor", "middle")
//         .style("fill", "white")
//         .style("opacity", 0)
//         .text((d) => d.value)
//         .transition()
//         .delay((d) => d.rowIndex * myGroups.length * 20 + d.colIndex * 20 + 80)
//         .duration(150)
//         .attr("y", (d) => y(d.variable) + y.bandwidth() / 2 + 5)
//         .style("opacity", 1)
//         .transition()
//         .duration(200)
//         .style("font-size", "14px");
//     });
//   }, []);

//   return (
//     <div className="text-white min-h-screen bg-gradient-to-bl from-[#00406B] to-[#001A2C] p-6">
//       {/* Back Button */}
//       {/* <button
//         onClick={() => navigate(-1)}
//         className=" flex items-center text-white bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
//       >
//         ← Back
//       </button> */}

//       {/* Main Heading */}
//       <h1 className="text-3xl font-bold text-center ">SHERPA Graph 1</h1>

//       {/* Heatmap Container */}
//       <div
//         id="heatmap-container"
//         className="relative flex justify-center items-center"
//       ></div>
//     </div>
//   );
// };

// export default HeatMap;

//option 2

// import React, { useEffect } from "react";
// import * as d3 from "d3";
// import { useNavigate } from "react-router-dom";

// const HeatMap = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     d3.select("#heatmap-container").selectAll("*").remove();

//     const margin = { top: 80, right: 25, bottom: 30, left: 40 },
//       width = 800 - margin.left - margin.right,
//       height = 800 - margin.top - margin.bottom;

//     const svg = d3
//       .select("#heatmap-container")
//       .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", `translate(${margin.left}, ${margin.top})`);

//     d3.csv(
//       "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv"
//     ).then(function (data) {
//       const myGroups = Array.from(new Set(data.map((d) => d.group)));
//       let myVars = Array.from(new Set(data.map((d) => d.variable)));

//       // Reverse so v10 is on top, v1 at bottom
//       myVars = myVars.reverse();

//       const x = d3.scaleBand().range([0, width]).domain(myGroups).padding(0.05);
//       svg
//         .append("g")
//         .style("font-size", 15)
//         .attr("transform", `translate(0, ${height})`)
//         .call(d3.axisBottom(x).tickSize(0))
//         .select(".domain")
//         .remove();

//       const y = d3.scaleBand().range([0, height]).domain(myVars).padding(0.05);
//       svg
//         .append("g")
//         .style("font-size", 15)
//         .call(d3.axisLeft(y).tickSize(0))
//         .select(".domain")
//         .remove();

//       const myColor = d3
//         .scaleSequential()
//         .interpolator(d3.interpolateInferno)
//         .domain([1, 100]);

//       const tooltip = d3
//         .select("#heatmap-container")
//         .append("div")
//         .style("opacity", 0)
//         .attr(
//           "class",
//           "tooltip bg-black border p-2 rounded shadow-md absolute"
//         );

//       const mouseover = function () {
//         tooltip.style("opacity", 1);
//         d3.select(this).style("stroke", "white").style("opacity", 1);
//       };
//       const mousemove = function (event, d) {
//         tooltip
//           .html("Value: " + d.value)
//           .style("left", event.pageX + 20 + "px")
//           .style("top", event.pageY - 20 + "px");
//       };
//       const mouseleave = function () {
//         tooltip.style("opacity", 0);
//         d3.select(this).style("stroke", "none").style("opacity", 0.8);
//       };

//       // Draw all squares (invisible initially)
//       const cells = svg
//         .selectAll()
//         .data(data, (d) => d.group + ":" + d.variable)
//         .join("g");

//       const rects = cells
//         .append("rect")
//         .attr("x", (d) => x(d.group))
//         .attr("y", (d) => y(d.variable))
//         .attr("rx", 4)
//         .attr("ry", 4)
//         .attr("width", x.bandwidth())
//         .attr("height", y.bandwidth())
//         .style("fill", (d) => myColor(d.value))
//         .style("stroke-width", 4)
//         .style("stroke", "none")
//         .style("opacity", 0)
//         .on("mouseover", mouseover)
//         .on("mousemove", mousemove)
//         .on("mouseleave", mouseleave);

//       const labels = cells
//         .append("text")
//         .attr("x", (d) => x(d.group) + x.bandwidth() / 2)
//         .attr("y", (d) => y(d.variable) + y.bandwidth() / 2)
//         .attr("dy", ".35em")
//         .attr("text-anchor", "middle")
//         .style("fill", "white")
//         .style("font-size", "12px")
//         .style("opacity", 0)
//         .text((d) => d.value);

//       // Animate row by row (top to bottom)
//       myVars.forEach((variable, rowIndex) => {
//         const rowCells = rects.filter((d) => d.variable === variable);
//         const rowLabels = labels.filter((d) => d.variable === variable);

//         rowCells
//           .transition()
//           .delay(rowIndex * 1000) // wait until previous row finishes
//           .duration(800)
//           .style("opacity", 0.8);

//         rowLabels
//           .transition()
//           .delay(rowIndex * 1000 + 400) // show labels slightly later
//           .duration(600)
//           .style("opacity", 1);
//       });

//       svg
//         .append("text")
//         .attr("x", 0)
//         .attr("y", -50)
//         .attr("text-anchor", "left")
//         .style("font-size", "22px")
//         .text("");

//       svg
//         .append("text")
//         .attr("x", 0)
//         .attr("y", -20)
//         .attr("text-anchor", "left")
//         .style("font-size", "14px")
//         .style("fill", "grey")
//         .text("");
//     });
//   }, []);

//   return (
//     <div className="text-white min-h-screen bg-gradient-to-bl from-[#00406B] to-[#001A2C] p-6">
//       <button
//         onClick={() => navigate(-1)}
//         className=" flex items-center text-white bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
//       >
//         ← Back
//       </button>
//       <h1 className="text-3xl font-bold text-center ">SHERPA Graph 3</h1>
//       <div
//         id="heatmap-container"
//         className="relative flex justify-center items-center"
//       ></div>
//     </div>
//   );
// };

// export default HeatMap;

//option 3

// import React, { useEffect } from "react";
// import * as d3 from "d3";
// import { useNavigate } from "react-router-dom";

// const HeatMap = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     d3.select("#heatmap-container").selectAll("*").remove();

//     const margin = { top: 80, right: 25, bottom: 30, left: 40 },
//       width = 800 - margin.left - margin.right,
//       height = 800 - margin.top - margin.bottom;

//     const svg = d3
//       .select("#heatmap-container")
//       .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", `translate(${margin.left}, ${margin.top})`);

//     d3.csv(
//       "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv"
//     ).then(function (data) {
//       const myGroups = Array.from(new Set(data.map((d) => d.group)));
//       const myVars = Array.from(new Set(data.map((d) => d.variable)));

//       const x = d3.scaleBand().range([0, width]).domain(myGroups).padding(0.05);
//       svg
//         .append("g")
//         .style("font-size", 15)
//         .attr("transform", `translate(0, ${height})`)
//         .call(d3.axisBottom(x).tickSize(0))
//         .select(".domain")
//         .remove();

//       const y = d3.scaleBand().range([height, 0]).domain(myVars).padding(0.05);
//       svg
//         .append("g")
//         .style("font-size", 15)
//         .call(d3.axisLeft(y).tickSize(0))
//         .select(".domain")
//         .remove();

//       const myColor = d3
//         .scaleSequential()
//         .interpolator(d3.interpolateInferno)
//         .domain([1, 100]);

//       const tooltip = d3
//         .select("#heatmap-container")
//         .append("div")
//         .style("opacity", 0)
//         .attr(
//           "class",
//           "tooltip bg-black border p-2 rounded shadow-md absolute"
//         );

//       const mouseover = function () {
//         tooltip.style("opacity", 1);
//         d3.select(this).style("stroke", "white").style("opacity", 1);
//       };
//       const mousemove = function (event, d) {
//         tooltip
//           .html("Value: " + d.value)
//           .style("left", event.pageX + 20 + "px")
//           .style("top", event.pageY - 20 + "px");
//       };
//       const mouseleave = function () {
//         tooltip.style("opacity", 0);
//         d3.select(this).style("stroke", "none").style("opacity", 0.8);
//       };

//       // Sort rows (v10 at top → v1 bottom)
//       const sortedVars = myVars.sort((a, b) => {
//         const na = +a.replace("v", "");
//         const nb = +b.replace("v", "");
//         return nb - na;
//       });

//       let index = 0;
//       const cells = data.sort(
//         (a, b) =>
//           sortedVars.indexOf(a.variable) - sortedVars.indexOf(b.variable) ||
//           myGroups.indexOf(a.group) - myGroups.indexOf(b.group)
//       );

//       function animateNextCell() {
//         if (index >= cells.length) return;
//         const d = cells[index];

//         const rect = svg
//           .append("rect")
//           .attr("x", x(d.group))
//           .attr("y", y(d.variable))
//           .attr("rx", 4)
//           .attr("ry", 4)
//           .attr("width", x.bandwidth())
//           .attr("height", y.bandwidth())
//           .style("fill", myColor(d.value))
//           .style("opacity", 0)
//           .on("mouseover", mouseover)
//           .on("mousemove", mousemove)
//           .on("mouseleave", mouseleave);

//         rect
//           .transition()
//           .duration(100) // faster fade in
//           .style("opacity", 0.9)
//           .on("end", () => {
//             svg
//               .append("text")
//               .attr("x", x(d.group) + x.bandwidth() / 2)
//               .attr("y", y(d.variable) + y.bandwidth() / 2)
//               .attr("text-anchor", "middle")
//               .attr("dominant-baseline", "middle")
//               .style("fill", "white")
//               .style("font-size", "12px")
//               .style("opacity", 0)
//               .text(d.value)
//               .transition()
//               .duration(100)
//               .style("opacity", 1);

//             index++;
//             setTimeout(animateNextCell, 30); // much faster stepping
//           });
//       }

//       animateNextCell();

//       svg
//         .append("text")
//         .attr("x", 0)
//         .attr("y", -50)
//         .attr("text-anchor", "left")
//         .style("font-size", "22px")
//         .text("");

//       svg
//         .append("text")
//         .attr("x", 0)
//         .attr("y", -20)
//         .attr("text-anchor", "left")
//         .style("font-size", "14px")
//         .style("fill", "grey")
//         .text("");
//     });
//   }, []);

//   return (
//     <div className="text-white min-h-screen bg-gradient-to-bl from-[#00406B] to-[#001A2C] p-6">
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center text-white bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
//       >
//         ← Back
//       </button>
//       <h1 className="text-3xl font-bold text-center ">SHERPA Graph 4</h1>
//       <div
//         id="heatmap-container"
//         className="relative flex justify-center items-center"
//       ></div>
//     </div>
//   );
// };

// export default HeatMap;

//option 4

// import React, { useEffect } from "react";
// import * as d3 from "d3";
// import { useNavigate } from "react-router-dom";

// const HeatMap = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Clear previous SVG if re-rendered
//     d3.select("#heatmap-container").selectAll("*").remove();

//     // Set dimensions and margins
//     const margin = { top: 80, right: 25, bottom: 30, left: 40 },
//       width = 800 - margin.left - margin.right,
//       height = 800 - margin.top - margin.bottom;

//     // Append the svg object
//     const svg = d3
//       .select("#heatmap-container")
//       .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", `translate(${margin.left}, ${margin.top})`);

//     // Load dummy data
//     d3.csv(
//       "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv"
//     ).then(function (data) {
//       const myGroups = Array.from(new Set(data.map((d) => d.group)));

//       // 🔑 Reverse so v10 is top, v9 next, ... v1 bottom
//       const myVars = Array.from(new Set(data.map((d) => d.variable))).reverse();

//       // X axis
//       const x = d3.scaleBand().range([0, width]).domain(myGroups).padding(0.05);
//       svg
//         .append("g")
//         .style("font-size", 15)
//         .attr("transform", `translate(0, ${height})`)
//         .call(d3.axisBottom(x).tickSize(0))
//         .select(".domain")
//         .remove();

//       // Y axis
//       const y = d3.scaleBand().range([height, 0]).domain(myVars).padding(0.05);
//       svg
//         .append("g")
//         .style("font-size", 15)
//         .call(d3.axisLeft(y).tickSize(0))
//         .select(".domain")
//         .remove();

//       // Color scale
//       const myColor = d3
//         .scaleSequential()
//         .interpolator(d3.interpolateInferno)
//         .domain([1, 100]);

//       // Tooltip
//       const tooltip = d3
//         .select("#heatmap-container")
//         .append("div")
//         .style("opacity", 0)
//         .attr(
//           "class",
//           "tooltip bg-black border p-2 rounded shadow-md absolute text-white"
//         );

//       const mouseover = function () {
//         tooltip.style("opacity", 1);
//         d3.select(this).style("stroke", "white").style("opacity", 1);
//       };
//       const mousemove = function (event, d) {
//         tooltip
//           .html("Value: " + d.value)
//           .style("left", event.pageX + 20 + "px")
//           .style("top", event.pageY - 20 + "px");
//       };
//       const mouseleave = function () {
//         tooltip.style("opacity", 0);
//         d3.select(this).style("stroke", "none").style("opacity", 0.8);
//       };

//       // --- Falling Rectangles Animation (row-wise, v10 → v1) ---
//       svg
//         .selectAll("rect")
//         .data(data, (d) => d.group + ":" + d.variable)
//         .join("rect")
//         .attr("x", (d) => x(d.group))
//         .attr("y", 0) // start from top
//         .attr("rx", 4)
//         .attr("ry", 4)
//         .attr("width", x.bandwidth())
//         .attr("height", 0) // start collapsed
//         .style("fill", (d) => myColor(d.value))
//         .style("stroke-width", 4)
//         .style("stroke", "none")
//         .style("opacity", 0.8)
//         .on("mouseover", mouseover)
//         .on("mousemove", mousemove)
//         .on("mouseleave", mouseleave)
//         .transition()
//         .duration(1000)
//         // 🔑 delay follows reversed myVars
//         .delay((d) => myVars.indexOf(d.variable) * 400)
//         .attr("y", (d) => y(d.variable))
//         .attr("height", y.bandwidth());

//       // --- Text Values (appear row by row) ---
//       const texts = svg
//         .selectAll("text.value")
//         .data(data, (d) => d.group + ":" + d.variable)
//         .join("text")
//         .attr("class", "value")
//         .attr("x", (d) => x(d.group) + x.bandwidth() / 2)
//         .attr("y", (d) => y(d.variable) + y.bandwidth() / 2)
//         .attr("text-anchor", "middle")
//         .attr("dominant-baseline", "middle")
//         .style("fill", "white")
//         .style("font-size", "12px")
//         .style("opacity", 0)
//         .text((d) => d.value);

//       // Pulse animation for text
//       function pulse(selection) {
//         selection
//           .transition()
//           .duration(800)
//           .style("opacity", 1)
//           .style("font-size", "16px")
//           .transition()
//           .duration(800)
//           .style("opacity", 0.6)
//           .style("font-size", "12px")
//           .on("end", () => pulse(selection)); // repeat
//       }

//       // Start pulse row by row after drop
//       texts
//         .transition()
//         .delay((d) => myVars.indexOf(d.variable) * 400 + 1000) // after row falls
//         .style("opacity", 1)
//         .on("end", function () {
//           pulse(d3.select(this)); // start pulsing
//         });

//       // Title
//       svg
//         .append("text")
//         .attr("x", 0)
//         .attr("y", -50)
//         .attr("text-anchor", "left")
//         .style("font-size", "22px")
//         .text("");

//       // Subtitle
//       svg
//         .append("text")
//         .attr("x", 0)
//         .attr("y", -20)
//         .attr("text-anchor", "left")
//         .style("font-size", "14px")
//         .style("fill", "grey")
//         .text("");
//     });
//   }, []);

//   return (
//     <div className="text-white min-h-screen bg-gradient-to-bl from-[#00406B] to-[#001A2C] p-6">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className=" flex items-center text-white bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
//       >
//         ← Back
//       </button>
//       <h1 className="text-3xl font-bold text-center ">SHERPA Graph 4</h1>
//       {/* Heatmap Container */}
//       <div
//         id="heatmap-container"
//         className="relative flex justify-center items-center"
//       ></div>
//     </div>
//   );
// };

// export default HeatMap;

//option 5

// import React, { useEffect } from "react";
// import * as d3 from "d3";
// import { useNavigate } from "react-router-dom";

// const HeatMap = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Clear previous render
//     d3.select("#heatmap-container").selectAll("*").remove();

//     // Set dimensions
//     const margin = { top: 80, right: 25, bottom: 30, left: 40 },
//       width = 800 - margin.left - margin.right,
//       height = 800 - margin.top - margin.bottom;

//     // Append SVG
//     const svg = d3
//       .select("#heatmap-container")
//       .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", `translate(${margin.left}, ${margin.top})`);

//     // Load Data
//     d3.csv(
//       "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv"
//     ).then(function (data) {
//       const myGroups = Array.from(new Set(data.map((d) => d.group)));
//       const myVars = Array.from(new Set(data.map((d) => d.variable)));

//       // Y-axis (reverse so v10 at top)
//       const y = d3
//         .scaleBand()
//         .range([0, height])
//         .domain(myVars.reverse())
//         .padding(0.05);

//       // X-axis
//       const x = d3.scaleBand().range([0, width]).domain(myGroups).padding(0.05);
//       svg
//         .append("g")
//         .style("font-size", 15)
//         .attr("transform", `translate(0, ${height})`)
//         .call(d3.axisBottom(x).tickSize(0))
//         .select(".domain")
//         .remove();

//       svg
//         .append("g")
//         .style("font-size", 15)
//         .call(d3.axisLeft(y).tickSize(0))
//         .select(".domain")
//         .remove();

//       // Color scale
//       const myColor = d3
//         .scaleSequential()
//         .interpolator(d3.interpolatePlasma)
//         .domain([1, 100]);

//       // Tooltip
//       const tooltip = d3
//         .select("#heatmap-container")
//         .append("div")
//         .style("opacity", 0)
//         .attr(
//           "class",
//           "tooltip bg-black text-white px-2 py-1 rounded absolute"
//         );

//       const mouseover = function () {
//         tooltip.style("opacity", 1);
//         d3.select(this).style("stroke", "white").style("opacity", 1);
//       };
//       const mousemove = function (event, d) {
//         tooltip
//           .html("Value: " + d.value)
//           .style("left", event.pageX + 20 + "px")
//           .style("top", event.pageY - 20 + "px");
//       };
//       const mouseleave = function () {
//         tooltip.style("opacity", 0);
//         d3.select(this).style("stroke", "none").style("opacity", 0.8);
//       };

//       // Indexing for animation
//       data.forEach((d) => {
//         d.rowIndex = myVars.indexOf(d.variable);
//         d.colIndex = myGroups.indexOf(d.group);
//       });

//       // Choose animation style: "diagonal" | "spiral" | "wave"
//       const animationType = "random";

//       function getDelay(d) {
//         if (animationType === "diagonal") {
//           return (d.rowIndex + d.colIndex) * 100;
//         } else if (animationType === "spiral") {
//           return (d.rowIndex * myGroups.length + d.colIndex) * 50;
//         } else if (animationType === "wave") {
//           return d.colIndex * 200 + Math.sin(d.rowIndex) * 100;
//         }
//         return d.rowIndex * 100;
//       }

//       // Rectangles with animation
//       svg
//         .selectAll()
//         .data(data)
//         .join("rect")
//         .attr("x", (d) => x(d.group))
//         .attr("y", (d) => y(d.variable))
//         .attr("rx", 4)
//         .attr("ry", 4)
//         .attr("width", x.bandwidth())
//         .attr("height", y.bandwidth())
//         .style("fill", (d) => myColor(d.value))
//         .style("stroke-width", 2)
//         .style("stroke", "none")
//         .style("opacity", 0)
//         .on("mouseover", mouseover)
//         .on("mousemove", mousemove)
//         .on("mouseleave", mouseleave)
//         .transition()
//         .delay((d) => getDelay(d))
//         .duration(500)
//         .style("opacity", 1);

//       // Values as text
//       svg
//         .selectAll(".cell-text")
//         .data(data)
//         .join("text")
//         .attr("class", "cell-text")
//         .attr("x", (d) => x(d.group) + x.bandwidth() / 2)
//         .attr("y", (d) => y(d.variable) + y.bandwidth() / 2)
//         .attr("text-anchor", "middle")
//         .style("fill", "white")
//         .style("opacity", 0)
//         .text((d) => d.value)
//         .transition()
//         .delay((d) => getDelay(d) + 300)
//         .duration(400)
//         .style("opacity", 1);
//     });
//   }, []);

//   return (
//     <div className="text-white min-h-screen bg-gradient-to-bl from-[#00406B] to-[#001A2C] p-6">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center text-white bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
//       >
//         ← Back
//       </button>

//       {/* Heading */}
//       <h1 className="text-3xl font-bold text-center ">SHERPA Graph 6</h1>

//       {/* Heatmap */}
//       <div
//         id="heatmap-container"
//         className="relative flex justify-center items-center"
//       ></div>
//     </div>
//   );
// };

// export default HeatMap;

//option 6

// import React, { useEffect } from "react";
// import * as d3 from "d3";
// import { useNavigate } from "react-router-dom";

// const HeatMap = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     d3.select("#heatmap-container").selectAll("*").remove();

//     const margin = { top: 80, right: 25, bottom: 30, left: 40 },
//       width = 800 - margin.left - margin.right,
//       height = 800 - margin.top - margin.bottom;

//     const svg = d3
//       .select("#heatmap-container")
//       .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", `translate(${margin.left}, ${margin.top})`);

//     d3.csv(
//       "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv"
//     ).then(function (data) {
//       const myGroups = Array.from(new Set(data.map((d) => d.group)));
//       const myVars = Array.from(new Set(data.map((d) => d.variable)));

//       const y = d3
//         .scaleBand()
//         .range([0, height])
//         .domain(myVars.reverse())
//         .padding(0.05);

//       const x = d3.scaleBand().range([0, width]).domain(myGroups).padding(0.05);

//       svg
//         .append("g")
//         .style("font-size", 15)
//         .attr("transform", `translate(0, ${height})`)
//         .call(d3.axisBottom(x).tickSize(0))
//         .select(".domain")
//         .remove();

//       svg
//         .append("g")
//         .style("font-size", 15)
//         .call(d3.axisLeft(y).tickSize(0))
//         .select(".domain")
//         .remove();

//       const myColor = d3
//         .scaleSequential()
//         .interpolator(d3.interpolateInferno)
//         .domain([1, 100]);

//       const tooltip = d3
//         .select("#heatmap-container")
//         .append("div")
//         .style("opacity", 0)
//         .attr(
//           "class",
//           "tooltip bg-black border p-2 rounded shadow-md absolute"
//         );

//       const mouseover = function () {
//         tooltip.style("opacity", 1);
//         d3.select(this).style("stroke", "white").style("opacity", 1);
//       };
//       const mousemove = function (event, d) {
//         tooltip
//           .html("Value: " + d.value)
//           .style("left", event.pageX + 20 + "px")
//           .style("top", event.pageY - 20 + "px");
//       };
//       const mouseleave = function () {
//         tooltip.style("opacity", 0);
//         d3.select(this).style("stroke", "none").style("opacity", 0.8);
//       };

//       data.forEach((d) => {
//         d.rowIndex = myVars.indexOf(d.variable);
//         d.colIndex = myGroups.indexOf(d.group);
//       });

//       // 🔥 Change this variable to try different animation styles
//       const animationType = "spiral"; // options: "diagonal", "spiral", "zoom", "random"

//       const getDelay = (d) => {
//         if (animationType === "diagonal") {
//           return (d.rowIndex + d.colIndex) * 80;
//         } else if (animationType === "spiral") {
//           const centerX = myGroups.length / 2;
//           const centerY = myVars.length / 2;
//           const dist =
//             Math.abs(d.colIndex - centerX) + Math.abs(d.rowIndex - centerY);
//           return dist * 120;
//         } else if (animationType === "zoom") {
//           return 200 + d.rowIndex * 30 + d.colIndex * 30;
//         } else if (animationType === "random") {
//           return Math.random() * 2000;
//         }
//         return d.rowIndex * myGroups.length * 20 + d.colIndex * 20; // default row-wise
//       };

//       svg
//         .selectAll()
//         .data(data)
//         .join("rect")
//         .attr("x", (d) => x(d.group))
//         .attr("y", (d) => y(d.variable))
//         .attr("rx", 4)
//         .attr("ry", 4)
//         .attr("width", x.bandwidth())
//         .attr("height", y.bandwidth())
//         .style("fill", (d) => myColor(d.value))
//         .style("opacity", 0)
//         .on("mouseover", mouseover)
//         .on("mousemove", mousemove)
//         .on("mouseleave", mouseleave)
//         .transition()
//         .delay(getDelay)
//         .duration(600)
//         .style("opacity", 1)
//         .style("transform", (d) =>
//           animationType === "zoom" ? "scale(0.2)" : "scale(1)"
//         )
//         .transition()
//         .duration(400)
//         .style("transform", "scale(1)");

//       // Cell values
//       svg
//         .selectAll(".cell-text")
//         .data(data)
//         .join("text")
//         .attr("class", "cell-text")
//         .attr("x", (d) => x(d.group) + x.bandwidth() / 2)
//         .attr("y", (d) => y(d.variable) + y.bandwidth() / 2)
//         .attr("text-anchor", "middle")
//         .style("fill", "white")
//         .style("opacity", 0)
//         .text((d) => d.value)
//         .transition()
//         .delay((d) => getDelay(d) + 400)
//         .duration(400)
//         .style("opacity", 1);
//     });
//   }, []);

//   return (
//     <div className="text-white min-h-screen bg-gradient-to-bl from-[#00406B] to-[#001A2C] p-6">
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center text-white bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
//       >
//         ← Back
//       </button>
//       <h1 className="text-3xl font-bold text-center">🔥 SHERPA Heatmap</h1>
//       <div
//         id="heatmap-container"
//         className="relative flex justify-center items-center"
//       ></div>
//     </div>
//   );
// };

// export default HeatMap;

// import React, { useEffect } from "react";
// import * as d3 from "d3";
// import { useNavigate } from "react-router-dom";

// const HeatMap = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     d3.select("#heatmap-container").selectAll("*").remove();

//     const margin = { top: 100, right: 25, bottom: 30, left: 40 },
//       cellSize = 60,
//       numRows = 6, // 6 rows
//       numCols = 8, // 8 cols
//       width = cellSize * numCols,
//       height = cellSize * numRows;

//     const svg = d3
//       .select("#heatmap-container")
//       .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", `translate(${margin.left}, ${margin.top})`);

//     d3.csv(
//       "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv"
//     )
//       .then(function (data) {
//         if (!data || data.length === 0) return;

//         // Keep only 8 groups (cols) and 6 variables (rows)
//         const originalGroups = Array.from(new Set(data.map((d) => d.group))).slice(0, numCols);
//         const myVars = Array.from(new Set(data.map((d) => d.variable))).slice(0, numRows);
//         const myGroups = Array.from({ length: numCols }, (_, i) =>
//           String.fromCharCode(65 + i)
//         ); // A–H

//         const groupMapping = {};
//         originalGroups.forEach((group, i) => {
//           if (i < myGroups.length) {
//             groupMapping[group] = myGroups[i];
//           }
//         });

//         const extendedData = [];
//         data.forEach((d) => {
//           if (groupMapping[d.group] && myVars.includes(d.variable)) {
//             extendedData.push({
//               group: groupMapping[d.group],
//               variable: d.variable,
//               value: d.value,
//             });
//           }
//         });

//         // Fill missing cells with random values
//         myVars.forEach((variable) => {
//           for (let i = originalGroups.length; i < numCols; i++) {
//             extendedData.push({
//               group: myGroups[i],
//               variable,
//               value: Math.floor(Math.random() * 100),
//             });
//           }
//         });

//         // Y-axis
//         const y = d3
//           .scaleBand()
//           .range([0, height])
//           .domain(myVars.reverse())
//           .padding(0.05);

//         // X-axis
//         const x = d3
//           .scaleBand()
//           .range([0, width])
//           .domain(myGroups)
//           .padding(0.05);

//         svg
//           .append("g")
//           .style("font-size", 15)
//           .attr("transform", `translate(0, ${height})`)
//           .call(d3.axisBottom(x).tickSize(0))
//           .select(".domain")
//           .remove();

//         svg
//           .append("g")
//           .style("font-size", 15)
//           .call(d3.axisLeft(y).tickSize(0))
//           .select(".domain")
//           .remove();

//         const myColor = d3
//           .scaleThreshold()
//           .domain([40, 55, 70, 80])
//           .range([
//             "#1f7a7a", // <40
//             "#c97a4a", // 40-55
//             "#a65628", // 55-70
//             "#e41a1c", // 70-80
//             "#ff4d4d", // >80
//           ]);

//         // Add rects with animation
//         svg
//           .selectAll("rect")
//           .data(extendedData)
//           .join("rect")
//           .attr("x", (d) => x(d.group))
//           .attr("y", y(myVars[0])) // start at first row
//           .attr("width", x.bandwidth())
//           .attr("height", y.bandwidth())
//           .style("fill", (d) => myColor(+d.value))
//           .style("stroke", "black")
//           .style("opacity", 0)
//           .transition()
//           .delay((d, i) => (i % numCols) * 100 + Math.floor(i / numCols) * 200) // staggered animation
//           .duration(500)
//           .attr("y", (d) => y(d.variable))
//           .style("opacity", 0.9);

//         // Add text with animation
//         svg
//           .selectAll(".cell-text")
//           // .data(extendedData)
//           .join("text")
//           .attr("class", "cell-text")
//           .attr("x", (d) => x(d.group) + x.bandwidth() / 2)
//           .attr("y", y(myVars[0]) + y.bandwidth() / 2 + 5) // start all at top row
//           .attr("text-anchor", "middle")
//           .style("fill", "white")
//           .style("opacity", 0)
//           .text((d) => d.value)
//           .transition()
//           .delay((d, i) => (i % numCols) * 100 + Math.floor(i / numCols) * 200 + 200)
//           .duration(500)
//           .attr("y", (d) => y(d.variable) + y.bandwidth() / 2 + 5)
//           .style("opacity", 1);

//         // Legend
//         const legendData = [
//           { label: "<40kW (Safe)", color: "#1f7a7a" },
//           { label: "40-55kW (Normal)", color: "#c97a4a" },
//           { label: "55-70kW (High)", color: "#a65628" },
//           { label: "70-80kW (Critical)", color: "#e41a1c" },
//           { label: ">80kW (Emergency)", color: "#ff4d4d" },
//         ];

//         const legend = svg.append("g").attr("transform", `translate(0, -60)`);

//         legend
//           .selectAll("rect")
//           .data(legendData)
//           .enter()
//           .append("rect")
//           .attr("x", (d, i) => i * 150)
//           .attr("width", 20)
//           .attr("height", 20)
//           .style("fill", (d) => d.color);

//         legend
//           .selectAll("text")
//           .data(legendData)
//           .enter()
//           .append("text")
//           .attr("x", (d, i) => i * 150 + 30)
//           .attr("y", 15)
//           .style("fill", "white")
//           .text((d) => d.label);
//       })
//       .catch((error) => console.error("Error loading CSV:", error));
//   }, []);

//   return (
//     <div className="text-white p-1">
//       {/* <h1 className="text-3xl font-bold text-center mb-6">
//         Rack Power Risk Heatmap
//       </h1> */}

//       <div className="rounded-2xl border border-gray-300 p-6 shadow-md">
//         <div
//           id="heatmap-container"
//           className="relative flex justify-center items-center"
//         ></div>
//       </div>
//     </div>

//   );
// };

// export default HeatMap;


// import React, { useEffect } from "react";
// import * as d3 from "d3";
// import { useNavigate } from "react-router-dom";

// const HeatMap = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     d3.select("#heatmap-container").selectAll("*").remove();

//     const margin = { top: 50, right: 40, bottom: 60, left: 40 },
//       cellSize = 50,
//       numRows = 5, // 5 rows
//       numCols = 5, // 5 cols
//       width = cellSize * numCols,
//       height = cellSize * numRows;

//     const svg = d3
//       .select("#heatmap-container")
//       .append("svg")
//       .attr("width", width + margin.left + margin.right + 60) // extra for legend
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", `translate(${margin.left}, ${margin.top})`);

//     // Dummy data for 5x5 = 25 blocks
//     const groups = ["A", "B", "C", "D", "E"];
//     const variables = ["5kW", "4kW", "3kW", "2kW", "1kW"];
//     const dummyData = [];

//     groups.forEach((g, gi) => {
//       variables.forEach((v, vi) => {
//         dummyData.push({
//           group: g,
//           variable: v,
//           value: 10 + gi * 20 + vi * 10, // pattern values
//         });
//       });
//     });

//     // Y-axis
//     const y = d3
//       .scaleBand()
//       .range([0, height])
//       .domain(variables.reverse())
//       .padding(0.05);

//     // X-axis
//     const x = d3
//       .scaleBand()
//       .range([0, width])
//       .domain(groups)
//       .padding(0.05);

//     svg
//       .append("g")
//       .style("font-size", 15)
//       .attr("transform", `translate(0, ${height})`)
//       .call(d3.axisBottom(x).tickSize(0))
//       .select(".domain")
//       .remove();

//     svg
//       .append("g")
//       .style("font-size", 15)
//       .call(d3.axisLeft(y).tickSize(0))
//       .select(".domain")
//       .remove();

//     // Color scale (blue → yellow → red)
//     const myColor = d3
//       .scaleLinear()
//       .domain([10, 60, 110]) // scale spread
//       .range(["blue", "yellow", "red"]);

//     // Rects with animation
//     svg
//       .selectAll("rect")
//       .data(dummyData)
//       .join("rect")
//       .attr("x", (d) => x(d.group))
//       .attr("y", (d) => y(d.variable))
//       .attr("width", x.bandwidth())
//       .attr("height", y.bandwidth())
//       .style("fill", (d) => myColor(+d.value))
//       .style("stroke", "black")
//       .style("opacity", 0)
//       .transition()
//       .delay((d, i) => (i % numCols) * 100 + Math.floor(i / numCols) * 200)
//       .duration(500)
//       .style("opacity", 0.9);

//     // Text with animation
//     svg
//       .selectAll(".cell-text")
//       // .data(dummyData)
//       .join("text")
//       .attr("class", "cell-text")
//       .attr("x", (d) => x(d.group) + x.bandwidth() / 2)
//       .attr("y", (d) => y(d.variable) + y.bandwidth() / 2 + 5)
//       .attr("text-anchor", "middle")
//       .style("fill", "white")
//       .style("opacity", 0)
//       .text((d) => d.value)
//       .transition()
//       .delay((d, i) => (i % numCols) * 100 + Math.floor(i / numCols) * 200 + 200)
//       .duration(500)
//       .style("opacity", 1);

//     // Legend
//     const legendHeight = height;
//     const legendWidth = 20;
//     const legendScale = d3
//       .scaleLinear()
//       .domain([10, 110])
//       .range([legendHeight, 0]);

//     const legendAxis = d3
//       .axisRight(legendScale)
//       .ticks(5)
//       .tickFormat((d) => `${d}`);

//     svg
//       .append("g")
//       .attr("transform", `translate(${width + 10}, 0)`)
//       .call(legendAxis);

//     svg
//       .append("rect")
//       .attr("x", width + 10)
//       .attr("y", 0)
//       .attr("width", legendWidth)
//       .attr("height", legendHeight)
//       .style("fill", "url(#legend-gradient)")
//       .style("opacity", 0.9);

//     const gradient = svg
//       .append("defs")
//       .append("linearGradient")
//       .attr("id", "legend-gradient")
//       .attr("x1", "0%")
//       .attr("y1", "100%")
//       .attr("x2", "0%")
//       .attr("y2", "0%");

//     gradient
//       .append("stop")
//       .attr("offset", "0%")
//       .attr("style", "stop-color:blue;stop-opacity:1");

//     gradient
//       .append("stop")
//       .attr("offset", "50%")
//       .attr("style", "stop-color:yellow;stop-opacity:1");

//     gradient
//       .append("stop")
//       .attr("offset", "100%")
//       .attr("style", "stop-color:red;stop-opacity:1");
//   }, []);

//   return (
//     <div className="text-white p-1">
//       <div className="rounded-2xl border border-gray-300 p-2 shadow-md">
//         <div
//           id="heatmap-container"
//           className="relative flex justify-center items-center h-[300px]"
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default HeatMap;

import React, { useEffect } from "react";
import * as d3 from "d3";

const HeatMap = ({ selectedRack, setSelectedRack }) => {
  useEffect(() => {
    d3.select("#heatmap-container").selectAll("*").remove();

    const margin = { top: 50, right: 40, bottom: 60, left: 40 },
      cellSize = 43,
      numRows = 5,
      numCols = 5,
      width = cellSize * numCols,
      height = cellSize * numRows;

    const svg = d3
      .select("#heatmap-container")
      .append("svg")
      .attr("width", width + margin.left + margin.right + 60)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Groups (cols) & variables (rows)
    const groups = ["A", "B", "C", "D", "E"];
    const variables = ["5kW", "4kW", "3kW", "2kW", "1kW"];

    // Build full rack map (25 racks)
    const rackMap = {};
    groups.forEach((g, gi) => {
      for (let i = 1; i <= 5; i++) {
        const key = `rack${g}${String(i).padStart(2, "0")}`;
        rackMap[`${g}-${15 + gi * 5 + i}`] = key; // e.g., A-015 → rackA01
      }
    });

    const dummyData = [];
    groups.forEach((g, gi) => {
      variables.forEach((v, vi) => {
        dummyData.push({
          group: g,
          variable: v,
          value: 10 + gi * 20 + vi * 10,
          rackKey: rackMap[`${g}-${15 + gi * 5 + (vi + 1)}`] ?? null,
        });
      });
    });

    const y = d3
      .scaleBand()
      .range([0, height])
      .domain(variables.reverse())
      .padding(0.05);

    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(groups)
      .padding(0.05);

    svg
      .append("g")
      .style("font-size", 15)
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x).tickSize(0))
      .select(".domain")
      .remove();

    svg
      .append("g")
      .style("font-size", 15)
      .call(d3.axisLeft(y).tickSize(0))
      .select(".domain")
      .remove();

    const myColor = d3
      .scaleLinear()
      .domain([10, 60, 110])
      .range(["blue", "yellow", "red"]);

    svg
      .selectAll("rect")
      .data(dummyData)
      .join("rect")
      .attr("x", (d) => x(d.group))
      .attr("y", (d) => y(d.variable))
      .attr("width", x.bandwidth())
      .attr("height", y.bandwidth())
      .style("fill", (d) => myColor(+d.value))
      .style("stroke", (d) =>
        d.rackKey === selectedRack ? "cyan" : "black"
      )
      .style("stroke-width", (d) =>
        d.rackKey === selectedRack ? 4 : 1
      )
      .style("opacity", 0.9)
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        if (d.rackKey) setSelectedRack(d.rackKey);
      });
  }, [selectedRack, setSelectedRack]);

  return (
    <div className="text-white p-1 rounded-2xl">
      <div className="rounded-2xl border border-[#6783A8] bg-[#0A2137] p-2 shadow-md">
        <div
          id="heatmap-container"
          className="relative flex justify-center items-center h-[230px]"
        ></div>
      </div>
    </div>
  );
};

export default HeatMap;
