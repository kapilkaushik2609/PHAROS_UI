// import React from "react";

// const EPDUStatus = ({ selectedCustomer }) => {
//   const data = {
//     "Customer 1": {
//       rackA01: { power: "42.4W", supercap: "98%", voltage: "99.8%" },
//       rackA02: { power: "51.4W", supercap: "85%", voltage: "92.8%" },
//     },
//     "Customer 2": {
//       rackA01: { power: "50.1W", supercap: "92%", voltage: "97.5%" },
//       rackA02: { power: "47.8W", supercap: "95%", voltage: "96.9%" },
//     },
//   };

//   const values = data[selectedCustomer];

//   const renderRack = (label, rack) => (
//     <div className="bg-[#001A2C] rounded-md px-6 py-4 grid grid-cols-4 text-center h-[138px]">
//       <div className="flex flex-col items-center justify-center">
//         <span className="font-semibold text-2xl">{label}</span>
//       </div>
//       <div className="flex flex-col items-center justify-center gap-2">
//         <p className="text-white text-xl">Power</p>
//         <p className="text-[#1AE8FF] font-semibold text-lg">{rack.power}</p>
//       </div>
//       <div className="flex flex-col items-center justify-center  gap-2">
//         <p className="text-white text-xl">Supercap</p>
//         <p className="text-[#1AE8FF] font-semibold text-lg">{rack.supercap}</p>
//       </div>
//       <div className="flex flex-col items-center justify-center  gap-2">
//         <p className="text-white text-xl">Voltage</p>
//         <p className="text-[#1AE8FF] font-semibold text-lg">{rack.voltage}</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="bg-[#1D3753] p-5 rounded-[20px] text-white h-full w-full">
//       <h2 className="font-semibold mb-4 text-2xl">
//         ePDU & Supercapacitor Status
//       </h2>
//       <div className="flex flex-col gap-5">
//         {renderRack("Rack A01", values.rackA01)}
//         {renderRack("Rack A02", values.rackA02)}
//       </div>
//     </div>
//   );
// };

// export default EPDUStatus;



// import React, { useState } from "react";
// import SoCTrendGraph from "../components/SoCTrendGraph"; // Ensure this path is correct
// import { BiExpand } from "react-icons/bi";
// import { X } from "lucide-react";
// import HeatMap from "./HeatMap";
// const EPDUStatus = ({ selectedCustomer }) => {
//   const [fullscreenRack, setFullscreenRack] = useState(null); // which rack is open

//   const data = {
//     "Customer 1": {
//       rackA01: {
//         power: "31.8 kW",
//         supercap: "93%",
//         voltage: "99.8%",
//         temp: "18.5 °C",
//         utilization: "93%",
//         socTrend: [90, 92, 95, 98, 96, 94, 93, 95, 97, 93],
//       },
//       rackA02: {
//         power: "51.4W",
//         supercap: "85%",
//         voltage: "92.8%",
//         temp: "18.5 °C",
//         utilization: "85%",
//         socTrend: [80, 82, 85, 84, 83, 85, 84, 85, 84, 85],
//       },
//       rackA03: {
//         power: "51.4W",
//         supercap: "85%",
//         voltage: "92.8%",
//         temp: "18.5 °C",
//         utilization: "85%",
//         socTrend: [80, 82, 85, 84, 83, 85, 84, 85, 84, 85],
//       },
//       rackA04: {
//         power: "51.4W",
//         supercap: "85%",
//         voltage: "92.8%",
//         temp: "18.5 °C",
//         utilization: "85%",
//         socTrend: [80, 82, 85, 84, 83, 85, 84, 85, 84, 85],
//       },
//       rackA05: {
//         power: "51.4W",
//         supercap: "85%",
//         voltage: "92.8%",
//         temp: "18.5 °C",
//         utilization: "85%",
//         socTrend: [80, 82, 85, 84, 83, 85, 84, 85, 84, 85],
//       },
//       rackA06: {
//         power: "51.4W",
//         supercap: "85%",
//         voltage: "92.8%",
//         temp: "18.5 °C",
//         utilization: "85%",
//         socTrend: [80, 82, 85, 84, 83, 85

//           , 84, 85, 84, 85],
//       },
//       rackA07: {
//         power: "51.4W",
//         supercap: "85%",
//         voltage: "92.8%",
//         temp: "18.5 °C",
//         utilization: "85%",
//         socTrend: [80, 82, 85, 84, 83, 85, 84, 85, 84, 85],
//       },
//       rackA08: {
//         power: "51.4W",
//         supercap: "85%",
//         voltage: "92.8%",
//         temp: "18.5 °C",
//         utilization: "85%",
//         socTrend: [80, 82, 85, 84, 83, 85, 84, 85, 84, 85],
//       },
//       rackA09: {
//         power: "51.4W",
//         supercap: "85%",
//         voltage: "92.8%",
//         temp: "18.5 °C",
//         utilization: "85%",
//         socTrend: [80, 82, 85, 84, 83, 85, 84, 85, 84, 85],
//       },
//       rackA10: {
//         power: "51.4W",
//         supercap: "85%",
//         voltage: "92.8%",
//         temp: "18.5 °C",
//         utilization: "85%",
//         socTrend: [80, 82, 85, 84, 83, 85, 84, 85, 84, 85],
//       },
//     },
//     "Customer 2": {
//       rackA01: {
//         power: "50.1W",
//         supercap: "92%",
//         voltage: "97.5%",
//         temp: "18.5 °C",
//         utilization: "92%",
//         socTrend: [88, 90, 92, 91, 90, 92, 91, 92, 91, 92],
//       },
//       rackA02: {
//         power: "47.8W",
//         supercap: "95%",
//         voltage: "96.9%",
//         temp: "18.5 °C",
//         utilization: "95%",
//         socTrend: [93, 94, 95, 94, 93, 95, 94, 95, 94, 95],
//       },
//       rackA03: {
//         power: "47.8W",
//         supercap: "95%",
//         voltage: "96.9%",
//         temp: "18.5 °C",
//         utilization: "95%",
//         socTrend: [93, 94, 95, 94, 93, 95, 94, 95, 94, 95],
//       },
//       rackA04: {
//         power: "47.8W",
//         supercap: "95%",
//         voltage: "96.9%",
//         temp: "18.5 °C",
//         utilization: "95%",
//         socTrend: [93, 94, 95, 94, 93, 95, 94, 95, 94, 95],
//       },
//       rackA05: {
//         power: "47.8W",
//         supercap: "95%",
//         voltage: "96.9%",
//         temp: "18.5 °C",
//         utilization: "95%",
//         socTrend: [93, 94, 95, 94, 93, 95, 94, 95, 94, 95],
//       },
//       rackA06: {
//         power: "47.8W",
//         supercap: "95%",
//         voltage: "96.9%",
//         temp: "18.5 °C",
//         utilization: "95%",
//         socTrend: [93, 94, 95, 94, 93, 95, 94, 95, 94, 95],
//       },
//     },
//   };

//   const values = data[selectedCustomer] || data["Customer 1"];
//   const racks = Object.keys(values);

//   // Predefined colors for each rack
//   const colors = [
//     { main: "#1AE8FF", bg: "rgba(26, 232, 255, 0.2)" },
//     { main: "#FF6B6B", bg: "rgba(255, 107, 107, 0.2)" },
//     { main: "#6AE2CA", bg: "rgba(106, 226, 202, 0.2)" },
//     { main: "#FFD93D", bg: "rgba(255, 217, 61, 0.2)" },
//     { main: "#A29BFE", bg: "rgba(162, 155, 254, 0.2)" },
//     { main: "#00C9A7", bg: "rgba(0, 201, 167, 0.2)" },
//     { main: "#FF9F1C", bg: "rgba(255, 159, 28, 0.2)" },
//   ];

//   const renderRack = (rackKey, rackData, index) => {
//     const colorSet = colors[index % colors.length]; // Rotate colors
//     return (
//       <div
//         key={rackKey}
//         className="relative bg-[#305C8F80] ml-1 rounded-md mt-1 px-6 py-4 text-center min-w-[550px] mr-4 flex flex-col items-center outline-3"
//       >
//         {/* Expand Icon (Top Right) */}
//         <button
//           className="absolute top-5 right-5 text-white hover:text-[#1AE8FF] transition "
//           title="Expand"
//           onClick={() => setFullscreenRack({ rackKey, rackData, colorSet })}
//         >
//           <BiExpand size={22} />
//         </button>

//         {/* Header */}
//         <div className="flex gap-5 w-full mb-6 items-center">
//           <span className="font-semibold text-2xl">Rack {rackKey}</span>
//           <span className="text-3xl" style={{ color: colorSet.main }}>
//             ●
//           </span>
//         </div>

//         {/* Metrics Row */}
//         <div className="flex justify-between w-full mb-6">
//           <div className="flex flex-col items-start">
//             <p className="text-white text-xl">Power Draw</p>
//             <p
//               style={{ color: colorSet.main }}
//               className="font-semibold text-lg mt-2 "
//             >
//               {rackData.power}
//             </p>
//           </div>

//           <div className="flex flex-col items-start">
//             <p className="text-white text-xl">Temperature</p>
//             <p
//               style={{ color: colorSet.main }}
//               className="font-semibold text-lg mt-2"
//             >
//               {rackData.temp}
//             </p>
//           </div>

//           <div className="flex flex-col items-start">
//             <p className="text-white text-xl">Supercap Utilization</p>
//             <p
//               style={{ color: colorSet.main }}
//               className="font-semibold text-lg mt-2 "
//             >
//               {rackData.utilization}
//             </p>
//           </div>
//         </div>

//         {/* Graph */}
//         <div className="w-full">
//           <p className="text-white text-xl text-left">Supercap SoC</p>
//           <div className="mt-2  h-40 w-full">
//             <SoCTrendGraph data={rackData.socTrend} colorSet={colorSet} />
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <style>
//         {`
//           .custom-scrollbar::-webkit-scrollbar {
//             height: 8px; /* Horizontal scrollbar height */
//           }
//           .custom-scrollbar::-webkit-scrollbar-track {
//             background: #1D3753; /* Track color (same as container background) */
//             border-radius: 4px;
//           }
//           .custom-scrollbar::-webkit-scrollbar-thumb {
//             background: #1AE8FF; /* Scrollbar thumb color */
//             border-radius: 4px;
//           }
//           .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//             background: #15C7E0; /* Slightly darker shade on hover */
//           }
//           .custom-scrollbar::-webkit-scrollbar-button {
//             display: none; /* Remove scrollbar arrows/buttons */
//           }
//           /* Firefox scrollbar styling */
//           .custom-scrollbar {
//             scrollbar-color: #1AE8FF #1D3753; /* Thumb and track colors */
//             scrollbar-width: thin; /* Thin scrollbar */
//           }
//         `}
//       </style>
//       <div className="bg-[#1D3753] p-5 rounded-[20px] text-white h-full w-full flex flex-row space-x-4">
//         <div>
//           <h2 className="font-semibold mb-4 text-[26px]">Power Overview</h2>
//           <HeatMap />
//         </div>
//         <div className="overflow-x-auto flex space-x-4 pb-4 custom-scrollbar">
//           {racks.map((rackKey, index) =>
//             renderRack(rackKey, values[rackKey], index)
//           )}
//         </div>
//       </div>

//       {/* Fullscreen Overlay for Rack */}
//       {fullscreenRack && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
//           <div className="bg-[#1D3753] w-[95%] h-[85%] max-w-6xl rounded-xl relative flex flex-col p-6 shadow-2xl">
//             {/* Close button */}
//             <button
//               onClick={() => setFullscreenRack(null)}
//               className="absolute top-4 right-4 p-2 rounded-lg hover:bg-red-500/30 transition cursor-pointer"
//             >
//               <X size={26} className="text-white" />
//             </button>

//             {/* Rack Title */}
//             <h3 className="text-2xl font-semibold mb-10 text-white">
//               Rack {fullscreenRack.rackKey} - Supercap SoC
//             </h3>

//             {/* Fullscreen Graph */}
//             <div className="flex-1 overflow-hidden">
//               <SoCTrendGraph
//                 data={fullscreenRack.rackData.socTrend}
//                 colorSet={fullscreenRack.colorSet}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EPDUStatus;



// import React, { useState } from "react";
// import SoCTrendGraph from "../components/SoCTrendGraph"; // graph component
// import { X } from "lucide-react";
// import HeatMap from "./HeatMap";

// const EPDUStatus = () => {
//   // Dummy data for 5 racks
//   const racksData = {
//     rackA01: {
//       power: "31.8 kW",
//       supercap: "93%",
//       voltage: "99.8%",
//       temp: "18.5 °C",
//       utilization: "93%",
//       socTrend: [90, 92, 95, 98, 96, 94, 93, 95, 97, 93],
//     },
//     rackA02: {
//       power: "40.5 kW",
//       supercap: "88%",
//       voltage: "97.2%",
//       temp: "19.2 °C",
//       utilization: "88%",
//       socTrend: [70, 72, 74, 78, 80, 79, 77, 75, 78, 80],
//     },
//     rackA03: {
//       power: "28.2 kW",
//       supercap: "91%",
//       voltage: "95.6%",
//       temp: "20.1 °C",
//       utilization: "91%",
//       socTrend: [82, 84, 83, 85, 87, 88, 86, 85, 86, 87],
//     },
//     rackA04: {
//       power: "35.9 kW",
//       supercap: "86%",
//       voltage: "96.3%",
//       temp: "21.5 °C",
//       utilization: "86%",
//       socTrend: [60, 65, 67, 70, 72, 74, 73, 71, 70, 72],
//     },
//     rackA05: {
//       power: "45.0 kW",
//       supercap: "94%",
//       voltage: "98.1%",
//       temp: "18.9 °C",
//       utilization: "94%",
//       socTrend: [95, 94, 93, 92, 94, 96, 95, 94, 96, 97],
//     },
//   };

//   const [selectedRack, setSelectedRack] = useState("rackA01");

//   const rackKeys = Object.keys(racksData);
//   const rack = racksData[selectedRack];

//   return (
//     <div className="bg-[#1D3753] p-6 rounded-[20px] text-white h-[450px] w-full">
//       <h2 className="font-semibold mb-6 text-[26px]">Power Overview</h2>

//       {/* Flex container for side-by-side layout */}
//       <div className="flex gap-6">
//         {/* Left: HeatMap */}
//         <div className="flex-1">
//           <HeatMap />
//         </div>

//         {/* Right: Dropdown + Rack Info + Graph */}
//         <div className="bg-[#0A2137] rounded-xl p-4 w-[800px]">
//           {/* Dropdown */}
//           <select
//             className="bg-[#305C8F] text-white px-4 py-2 rounded-md mb-6 w-full"
//             value={selectedRack}
//             onChange={(e) => setSelectedRack(e.target.value)}
//           >
//             {rackKeys.map((key) => (
//               <option key={key} value={key}>
//                 {key}
//               </option>
//             ))}
//           </select>

//           {/* Rack Info */}
//           <div className="flex mb-4 space-x-3">
//             <div>
//               <p className="text-sm">Power Draw</p>
//               <p className="text-[#1AE8FF] font-bold">{rack.power}</p>
//             </div>
//             <div>
//               <p className="text-sm">Temperature</p>
//               <p className="text-[#1AE8FF] font-bold">{rack.temp}</p>
//             </div>
//             <div>
//               <p className="text-sm">Supercap Utilization</p>
//               <p className="text-[#1AE8FF] font-bold">{rack.utilization}</p>
//             </div>
//           </div>

//           {/* Graph */}
//           <div className="w-full h-40">
//             <SoCTrendGraph data={rack.socTrend} colorSet={{ main: "#1AE8FF" }} />
//           </div>
//         </div>

//       </div>
//     </div>

//   );
// };

// export default EPDUStatus;


// import React, { useState } from "react";
// import SoCTrendGraph from "../components/SoCTrendGraph";
// import HeatMap from "./HeatMap";

// const EPDUStatus = () => {
//   // Dummy data for 5 racks
//   const racksData = {
//     rackA01: { power: "31.8 kW", supercap: "93%", voltage: "99.8%", temp: "18.5 °C", utilization: "93%", socTrend: [90, 92, 95, 98, 96, 94, 93, 95, 97, 93] },
//     rackA02: { power: "40.5 kW", supercap: "88%", voltage: "97.2%", temp: "19.2 °C", utilization: "88%", socTrend: [70, 72, 74, 78, 80, 79, 77, 75, 78, 80] },
//     rackA03: { power: "28.2 kW", supercap: "91%", voltage: "95.6%", temp: "20.1 °C", utilization: "91%", socTrend: [82, 84, 83, 85, 87, 88, 86, 85, 86, 87] },
//     rackA04: { power: "35.9 kW", supercap: "86%", voltage: "96.3%", temp: "21.5 °C", utilization: "86%", socTrend: [60, 65, 67, 70, 72, 74, 73, 71, 70, 72] },
//     rackA05: { power: "45.0 kW", supercap: "94%", voltage: "98.1%", temp: "18.9 °C", utilization: "94%", socTrend: [95, 94, 93, 92, 94, 96, 95, 94, 96, 97] },
//   };

//   // Mapping keys -> display names
//   const rackLabels = {
//     rackA01: "Rack R-A-015",
//     rackA02: "Rack R-A-016",
//     rackA03: "Rack R-A-017",
//     rackA04: "Rack R-A-018",
//     rackA05: "Rack R-A-019",
//   };


//   const [selectedRack, setSelectedRack] = useState("rackA01");
//   const rackKeys = Object.keys(racksData);
//   const rack = racksData[selectedRack];

//   return (
//     <div className="bg-[#1D3753] p-6 rounded-[20px] text-white h-[450px] w-full relative">
//       {/* Header with absolute dropdown */}
//       <div className="flex items-center justify-between mb-6 relative">
//         <h2 className="font-semibold text-[26px]">Power Overview</h2>
//         <select
//           className="absolute right-0 top-0 bg-[#305C8F] text-white px-4 py-2 rounded-md"
//           value={selectedRack}
//           onChange={(e) => setSelectedRack(e.target.value)}
//         >
//           {rackKeys.map((key) => (
//             <option key={key} value={key}>
//               {rackLabels[key]} {/* 👈 Show readable name */}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Flex container for side-by-side layout */}
//       <div className="flex gap-6">
//         {/* Left: HeatMap */}
//         <div className="flex-1">
//           <HeatMap />
//         </div>

//         {/* Right: Rack Info + Graph */}
//         <div className="bg-[#0A2137] rounded-xl p-4 w-[800px]">
//           {/* Rack Info */}
//           <div className="flex mb-4 space-x-3">
//             <div>
//               <p className="text-sm">Power Draw</p>
//               <p className="text-[#1AE8FF] font-bold">{rack.power}</p>
//             </div>
//             <div>
//               <p className="text-sm">Temperature</p>
//               <p className="text-[#1AE8FF] font-bold">{rack.temp}</p>
//             </div>
//             <div>
//               <p className="text-sm">Supercap Utilization</p>
//               <p className="text-[#1AE8FF] font-bold">{rack.utilization}</p>
//             </div>
//           </div>

//           {/* Graph */}
//           <div className="w-full h-40">
//             <SoCTrendGraph data={rack.socTrend} colorSet={{ main: "#1AE8FF" }} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EPDUStatus;

import React, { useState } from "react";
import SoCTrendGraph from "../components/SoCTrendGraph";
import HeatMap from "./HeatMap";

const EPDUStatus = () => {
  // ---------- Generate 25 racks (A-E, 01-05) ----------
  const racksData = {};
  const rackLabels = {};
  const groups = ["A", "B", "C", "D", "E"];

  groups.forEach((g, gi) => {
    for (let i = 1; i <= 5; i++) {
      const key = `rack${g}${String(i).padStart(2, "0")}`;
      const rackNumber = 15 + i + gi * 5; // like 015, 016, ...
      racksData[key] = {
        power: `${(20 + Math.random() * 30).toFixed(1)} kW`,
        supercap: `${80 + Math.floor(Math.random() * 20)}%`,
        voltage: `${95 + Math.random().toFixed(1)}%`,
        temp: `${(18 + Math.random() * 5).toFixed(1)} °C`,
        utilization: `${80 + Math.floor(Math.random() * 20)}%`,
        socTrend: Array.from({ length: 10 }, () => 70 + Math.floor(Math.random() * 30)),
      };
      rackLabels[key] = `Rack R-${g}-${String(rackNumber).padStart(3, "0")}`;
    }
  });

  // ---------- State ----------
  const [selectedRack, setSelectedRack] = useState("rackA01");
  const rackKeys = Object.keys(racksData);
  const rack = racksData[selectedRack];

  return (
    <div className="p-1 rounded-[20px] text-white h-[350px] w-full relative">
      {/* Header + Dropdown */}
      <div className="flex items-center justify-between mb-6 relative">
        <h2 className="font-semibold text-[26px]">Power Overview</h2>
        <select
          className="absolute right-0 top-0 bg-[#00406B] border border-[#6783A8] text-white px-4 py-2 rounded-md"
          value={selectedRack}
          onChange={(e) => setSelectedRack(e.target.value)}
        >
          {rackKeys.map((key) => (
            <option key={key} value={key}>
              {rackLabels[key]}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* HeatMap with state setter */}
        <div className="flex-1 w-full lg:w-1/2">
          <HeatMap selectedRack={selectedRack} setSelectedRack={setSelectedRack} />
        </div>

        {/* Rack Info + Graph */}
        <div className="bg-[#0A2137] border border-[#6783A8] rounded-xl p-4 w-full h-auto lg:w-1/2">
          <div className="flex flex-col sm:flex-row mb-4 space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="w-full sm:w-1/3">
              <p className="text-sm text-gray-400">Power Draw</p>
              <p className="text-[#1AE8FF] font-bold">{rack.power}</p>
            </div>
            <div className="w-full sm:w-1/3">
              <p className="text-sm text-gray-400">Temperature</p>
              <p className="text-[#1AE8FF] font-bold">{rack.temp}</p>
            </div>
            <div className="w-full sm:w-1/3">
              <p className="text-sm text-gray-400">Supercap Utilization</p>
              <p className="text-[#1AE8FF] font-bold">{rack.utilization}</p>
            </div>
          </div>

          <div className="w-full h-auto">
            <SoCTrendGraph data={rack.socTrend} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPDUStatus;
