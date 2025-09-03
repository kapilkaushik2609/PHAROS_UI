// import React from "react";
// import { useState } from "react";

// const HighLevelSummary = ({ selectedCustomer, setSelectedCustomer }) => {
//   const data = {
//     "Customer 1": {
//       racks: 24,
//       usage: "1.2 MW",
//       uptime: "99.998%",
//       violations: 3,
//       penalty: "$125,000",
//       score: "98.5",
//       savings: "$3,513",
//       growth: "↑ 8%",
//     },
//     "Customer 2": {
//       racks: 30,
//       usage: "2.0 MW",
//       uptime: "99.990%",
//       violations: 1,
//       penalty: "$95,000",
//       score: "97.2",
//       savings: "$2,875",
//       growth: "↑ 5%",
//     },
//   };

//   const values = data[selectedCustomer];


//   return (
//     <div>
//       <h1 className="text-[26px] font-bold text-white mb-2 ">High Level Summary</h1>
//       {/* Summary boxes */}
//       <div className="grid grid-rows-1 md:grid-rows-3 gap-2 p-0">
//         {/* Tenant Overview */}

//         <div className="bg-[#2D96FF33] rounded-[20px] text-white border border-[#2D96FF] p-6 shadow-md">
//           {/* Title with icon */}
//           <div className="flex items-center mb-4">
//             <img src="/icons/rack.svg" alt="Rack Icon" className="w-6 h-6 mr-2" />
//             <h2 className="font-semibold text-xl">Tenant Overview</h2>
//           </div>

//           {/* 3-column metrics */}
//           <div className="grid grid-cols-3 gap-4 text-center">
//             {/* Total Racks */}
//             <div>
//               <p className="text-sm text-gray-200">Total Racks</p>
//               <p className="text-2xl font-bold text-white">{values.racks}</p>
//               <p className="text-xs text-gray-300">20 Active / 5 Idle</p>
//               {/* progress bar */}
//               <div className="w-full h-2 mt-2 bg-gray-600 rounded">
//                 <div className="h-2 bg-yellow-400 rounded" style={{ width: "80%" }} />
//               </div>
//             </div>

//             {/* SLA Uptime */}
//             <div className="border-l border-gray-500 px-2">
//               <p className="text-sm text-gray-200">SLA Uptime</p>
//               <p className="text-2xl font-bold text-white">{values.uptime}</p>
//             </div>

//             {/* Current Usage */}
//             <div className="border-l border-gray-500 px-2">
//               <p className="text-sm text-gray-200">Current Usage</p>
//               <p className="text-2xl font-bold text-white">{values.usage}</p>
//               {/* example sparkline placeholder */}
//               <img src="/icons/line.svg" alt="Usage Graph" className="mt-1 h-6 mx-auto" />
//             </div>
//           </div>
//         </div>

//         {/* SLA Performance */}

//         <div className="bg-[#2D96FF33] rounded-[20px] text-white border border-[#2D96FF] p-6 shadow-md">
//           {/* Title with icon */}
//           <div className="flex items-center mb-4">
//             <img src="/icons/warning.svg" alt="Warning Icon" className="w-6 h-6 mr-2" />
//             <h2 className="font-semibold text-xl">SLA Performance</h2>
//           </div>

//           {/* 3-column metrics */}
//           <div className="grid grid-cols-3 gap-4 text-center">
//             {/* Penalty Savings */}
//             <div>
//               <p className="text-sm text-gray-200">Penalty Savings</p>
//               <p className="text-2xl font-bold text-green-400">{values.penalty}</p>
//             </div>

//             {/* Violations Avoided */}
//             <div className="border-l border-gray-500 px-2">
//               <p className="text-sm text-gray-200">Violations Avoided</p>
//               <p className="text-2xl font-bold text-white">{values.violations}</p>
//             </div>

//             {/* Power Quality Score */}
//             <div className="border-l border-gray-500 px-2 flex flex-col items-center">
//               <p className="text-sm text-gray-200 mb-1">Power Q/S</p>
//               {/* Circular score placeholder */}
//               <div className="relative w-12 h-12">
//                 <svg className="w-12 h-12">
//                   <circle
//                     cx="24"
//                     cy="24"
//                     r="20"
//                     stroke="#444"
//                     strokeWidth="4"
//                     fill="none"
//                   />
//                   <circle
//                     cx="24"
//                     cy="24"
//                     r="20"
//                     stroke="#FFD700"
//                     strokeWidth="4"
//                     fill="none"
//                     strokeDasharray={`${(values.score / 100) * 125.6} 125.6`}
//                     strokeLinecap="round"
//                     transform="rotate(-90 24 24)"
//                   />
//                 </svg>
//                 <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
//                   {values.score}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Monthly Savings */}

//         <div className="bg-[#2D96FF33] rounded-[20px] text-white border border-[#2D96FF] p-6 shadow-md flex items-center justify-between">
//           {/* Left side: text info */}
//           <div>
//             <div className="flex items-center mb-3">
//               <img src="/icons/global.svg" alt="Money Icon" className="w-6 h-6 mr-2" />
//               <h2 className="font-semibold text-xl">Monthly Savings</h2>
//             </div>

//             {/* Savings amount */}
//             <p className="text-3xl font-bold text-green-400 mb-2">
//               {values.savings}
//             </p>

//             {/* Growth chip */}
//             <div className="flex items-center space-x-2 mt-1">
//               <span className="bg-[#008947] text-white px-2 rounded-md text-sm font-semibold border-[#37FC3E] border h-[24px] flex items-center justify-center">
//                 {values.growth}
//               </span>
//               <span className="text-gray-200 text-sm">vs last month</span>
//             </div>
//           </div>

//           {/* Right side: line chart placeholder */}
//           <div className="w-32 h-20">
//             <svg viewBox="0 0 100 60" className="w-full h-full">
//               <polyline
//                 fill="none"
//                 stroke="#37FC3E"
//                 strokeWidth="2"
//                 points="0,50 25,40 50,30 75,20 100,15"
//               />
//               <circle cx="25" cy="40" r="2" fill="#37FC3E" />
//               <circle cx="50" cy="30" r="2" fill="#37FC3E" />
//               <circle cx="75" cy="20" r="2" fill="#37FC3E" />
//               <circle cx="100" cy="15" r="2" fill="#37FC3E" />
//             </svg>
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default HighLevelSummary;


import React from "react";
import { motion } from "framer-motion";

const HighLevelSummary = ({ selectedCustomer, setSelectedCustomer }) => {
  const data = {
    "Customer 1": {
      racks: 24,
      usage: "1.2 MW",
      uptime: "99.998%",
      violations: 3,
      penalty: "$125,000",
      score: "98.5",
      savings: "$3,513",
      growth: "↑ 8%",
    },
    "Customer 2": {
      racks: 30,
      usage: "2.0 MW",
      uptime: "99.990%",
      violations: 1,
      penalty: "$95,000",
      score: "97.2",
      savings: "$2,875",
      growth: "↑ 5%",
    },
  };

  const values = data[selectedCustomer];

  return (
    <div>
      <h1 className="text-[26px] font-bold text-white mb-2">High Level Summary</h1>

      {/* Summary boxes */}
      <div className="grid grid-rows-1 md:grid-rows-3 gap-2 p-0">
        {/* Tenant Overview */}
        <div
          className="bg-[#2D96FF33] rounded-[20px] text-white border border-[#2D96FF] p-6 shadow-md"
        >
          <div className="flex items-center mb-4">
            <img src="/icons/rack.svg" alt="Rack Icon" className="w-6 h-6 mr-2" />
            <h2 className="font-semibold text-xl">Tenant Overview</h2>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-200">Total Racks</p>
              <p className="text-2xl font-bold text-white">{values.racks}</p>
              <p className="text-xs text-gray-300">20 Active / 5 Idle</p>
              <div className="w-full h-2 mt-2 bg-gray-600 rounded">
                <div className="h-2 bg-yellow-400 rounded" style={{ width: "80%" }} />
              </div>
            </div>

            <div className="border-l border-gray-500 px-2">
              <p className="text-sm text-gray-200">SLA Uptime</p>
              <p className="text-2xl font-bold text-white">{values.uptime}</p>
            </div>

            <div className="border-l border-gray-500 px-2">
              <p className="text-sm text-gray-200">Current Usage</p>
              <p className="text-2xl font-bold text-white">{values.usage}</p>
              <img src="/icons/line.svg" alt="Usage Graph" className="mt-1 h-6 mx-auto" />
            </div>
          </div>
        </div>

        {/* SLA Performance */}
        <div
          className="bg-[#2D96FF33] rounded-[20px] text-white border border-[#2D96FF] p-6 shadow-md"
        >
          <div className="flex items-center mb-4">
            <img src="/icons/warning.svg" alt="Warning Icon" className="w-6 h-6 mr-2" />
            <h2 className="font-semibold text-xl">SLA Performance</h2>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-200">Penalty Savings</p>
              <p className="text-2xl font-bold text-green-400">{values.penalty}</p>
            </div>

            <div className="border-l border-gray-500 px-2">
              <p className="text-sm text-gray-200">Violations Avoided</p>
              <p className="text-2xl font-bold text-white">{values.violations}</p>
            </div>

            <div className="border-l border-gray-500 px-2 flex flex-col items-center">
              <p className="text-sm text-gray-200 mb-1">Power Q/S</p>
              <div className="relative w-12 h-12">
                <svg className="w-12 h-12">
                  <circle cx="24" cy="24" r="20" stroke="#444" strokeWidth="4" fill="none" />
                  <circle
                    cx="24"
                    cy="24"
                    r="20"
                    stroke="#FFD700"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${(values.score / 100) * 125.6} 125.6`}
                    strokeLinecap="round"
                    transform="rotate(-90 24 24)"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                  {values.score}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Savings */}
        <div
          className="bg-[#2D96FF33] rounded-[20px] text-white border border-[#2D96FF] p-6 shadow-md flex items-center justify-between"
        >
          <div>
            <div className="flex items-center mb-3">
              <img src="/icons/global.svg" alt="Money Icon" className="w-6 h-6 mr-2" />
              <h2 className="font-semibold text-xl">Monthly Savings</h2>
            </div>

            <p className="text-3xl font-bold text-green-400 mb-2">{values.savings}</p>

            <div className="flex items-center space-x-2 mt-1">
              <span className="bg-[#008947] text-white px-2 rounded-md text-sm font-semibold border-[#37FC3E] border h-[24px] flex items-center justify-center">
                {values.growth}
              </span>
              <span className="text-gray-200 text-sm">vs last month</span>
            </div>
          </div>

          <div className="w-32 h-20">
            <svg viewBox="0 0 100 60" className="w-full h-full">
              <polyline
                fill="none"
                stroke="#37FC3E"
                strokeWidth="2"
                points="0,50 25,40 50,30 75,20 100,15"
              />
              <circle cx="25" cy="40" r="2" fill="#37FC3E" />
              <circle cx="50" cy="30" r="2" fill="#37FC3E" />
              <circle cx="75" cy="20" r="2" fill="#37FC3E" />
              <circle cx="100" cy="15" r="2" fill="#37FC3E" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighLevelSummary;
