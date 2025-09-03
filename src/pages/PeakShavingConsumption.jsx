// import React, { useState, useEffect } from "react";

// const PeakShavingConsumption = ({ selectedCustomer }) => {
//   const [sliderValue, setSliderValue] = useState(2);

//   useEffect(() => {
//     if (selectedCustomer === "Customer 1") setSliderValue(2); // Medium
//     else setSliderValue(1); // Low
//   }, [selectedCustomer]);

//   const levelLabels = ["Off", "Low", "Medium", "High", "Maximum"];
//   const currentLabel = levelLabels[sliderValue];

//   return (
//     <div className="bg-[#1D3753] p-6 rounded-2xl text-white w-full h-full shadow-md border border-[#6783A8]">
//       <h2 className="text-2xl font-semibold mb-4">
//         Peak Shaving Participation
//       </h2>
//       <p className="text-xl text-white mb-4">Participation Level</p>

//       {/* Slider */}
//       <div className="mb-6">
//         <input
//           type="range"
//           min="0"
//           max="4"
//           value={sliderValue}
//           onChange={(e) => setSliderValue(Number(e.target.value))}
//           className="w-full accent-blue-500 h-2 rounded-lg cursor-pointer"
//         />
//         <div className="flex justify-between text-sm mt-2 text-gray-300 w-full">
//           {levelLabels.map((label, idx) => (
//             <span key={idx} className="flex-1 text-center">
//               {label}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Info Section */}
//       <div className="grid grid-row gap-10">
//         <div className="bg-[#305C8F80] rounded-md px-4 py-5 flex flex-row justify-between items-center text-white text-xl font-semibold shadow-sm border border-[#8E8E8E]">
//           <div className="flex items-center">
//             <span>Current Setting :</span>
//             <span className="ml-2">{currentLabel || "Medium"}</span>
//           </div>
//           <div className="flex items-center">
//             <span>Expected Monthly Savings :</span>
//             <span className="ml-2 text-[#00ff5e]">
//               {selectedCustomer === "Customer 1" ? "$75" : "$55"}
//             </span>
//           </div>
//           <div className="flex items-center">
//             <span>SLA Risk :</span>
//             <span className="ml-2">
//               {selectedCustomer === "Customer 1" ? "Low" : "Medium"}
//             </span>
//           </div>
//           <div className="flex items-center">
//             <span>Throughput Impact :</span>
//             <span className="ml-2">
//               {selectedCustomer === "Customer 1" ? "< 2%" : "< 5%"}
//             </span>
//           </div>
//         </div>

//         {/* Right Box */}
//         <div className="space-y-3">
//           <p className="font-semibold text-2xl ">Smoothing Preferences</p>
//           <label className="flex items-center space-x-4 text-lg font-semibold">
//             <input
//               type="checkbox"
//               defaultChecked
//               className="accent-blue-500 w-5 h-5"
//             />
//             <span>Expected Monthly Savings</span>
//           </label>
//           <label className="flex items-center space-x-4 text-lg font-semibold">
//             <input
//               type="checkbox"
//               defaultChecked
//               className="accent-blue-500 w-5 h-5"
//             />
//             <span>SLA Risk</span>
//           </label>
//           <label className="flex items-center space-x-4 text-lg font-semibold">
//             <input
//               type="checkbox"
//               defaultChecked
//               className="accent-blue-500 w-5 h-5"
//             />
//             <span>Throughput Impact</span>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PeakShavingConsumption;


// import React, { useState, useEffect } from "react";

// const PeakShavingConsumption = ({ selectedCustomer }) => {
//   const [sliderValue, setSliderValue] = useState(2);

//   useEffect(() => {
//     if (selectedCustomer === "Customer 1") setSliderValue(2); // Medium
//     else setSliderValue(1); // Low
//   }, [selectedCustomer]);

//   const levelLabels = ["Off", "Low", "Medium", "High", "Maximum"];
//   const currentLabel = levelLabels[sliderValue];

//   return (
//     <div className="bg-[#1D3753] p-6 rounded-2xl text-white w-full h-full shadow-md border border-[#6783A8]">
//       <h2 className="text-2xl font-semibold mb-4">
//         Peak Shaving Participation
//       </h2>
//       <p className="text-xl text-white mb-4">Participation Level</p>

//       {/* Slider */}
//       <div className="mb-6 relative">
//         <input
//           type="range"
//           min="0"
//           max="4"
//           value={sliderValue}
//           onChange={(e) => setSliderValue(Number(e.target.value))}
//           className="w-full accent-blue-500 h-2 rounded-lg cursor-pointer"
//         />
//         <div className="relative w-full mt-2 text-sm text-gray-300">
//           {levelLabels.map((label, idx) => (
//             <span
//               key={idx}
//               className="absolute text-center"
//               style={{
//                 left: `${(idx / (levelLabels.length - 1)) * 100}%`,
//                 transform: "translateX(-59%)",
//               }}
//             >
//               {label}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Info Section */}
//       <div className="grid grid-row gap-10">
//         <div className="bg-[#305C8F80] rounded-md px-4 py-5 flex flex-row justify-between items-center text-white text-xl font-semibold shadow-sm border border-[#8E8E8E] mt-7">
//           <div className="flex items-center">
//             <span>Current Setting :</span>
//             <span className="ml-2">{currentLabel || "Medium"}</span>
//           </div>
//           <div className="flex items-center">
//             <span>Expected Monthly Savings :</span>
//             <span className="ml-2 text-[#00ff5e]">
//               {selectedCustomer === "Customer 1" ? "$75" : "$55"}
//             </span>
//           </div>
//           <div className="flex items-center">
//             <span>SLA Risk :</span>
//             <span className="ml-2">
//               {selectedCustomer === "Customer 1" ? "Low" : "Medium"}
//             </span>
//           </div>
//           <div className="flex items-center">
//             <span>Throughput Impact :</span>
//             <span className="ml-2">
//               {selectedCustomer === "Customer 1" ? "< 2%" : "< 5%"}
//             </span>
//           </div>
//         </div>

//         {/* Right Box */}
//         <div className="space-y-3">
//           <p className="font-semibold text-2xl">Smoothing Preferences</p>
//           <label className="flex items-center space-x-4 text-lg font-semibold">
//             <input
//               type="checkbox"
//               defaultChecked
//               className="accent-blue-500 w-5 h-5"
//             />
//             <span>Expected Monthly Savings</span>
//           </label>
//           <label className="flex items-center space-x-4 text-lg font-semibold">
//             <input
//               type="checkbox"
//               defaultChecked
//               className="accent-blue-500 w-5 h-5"
//             />
//             <span>SLA Risk</span>
//           </label>
//           <label className="flex items-center space-x-4 text-lg font-semibold">
//             <input
//               type="checkbox"
//               defaultChecked
//               className="accent-blue-500 w-5 h-5"
//             />
//             <span>Throughput Impact</span>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PeakShavingConsumption;

import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const PeakShavingConsumption = ({ selectedCustomer }) => {
  const [level, setLevel] = useState("Medium");

  useEffect(() => {
    if (selectedCustomer === "Customer 1") setLevel("Medium");
    else setLevel("Low");
  }, [selectedCustomer]);

  const levelLabels = ["Off", "Low", "Medium", "High", "Maximum"];

  return (
    <div className="bg-[#1D3753] p-4 rounded-2xl text-white w-full shadow-md border border-[#6783A8]">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4 border-b border-[#6783A8] pb-2">
        <FaCalendarAlt className="text-[#2DE4FF]" />
        <h2 className="text-lg font-semibold">Scheduling</h2>
      </div>

      {/* Participation Section */}
      <p className="text-base mb-2">Peak Shaving Participation</p>
      <p className="text-sm text-gray-300 mb-3">Participation Level</p>

      <div className="flex w-full mb-4">
        {levelLabels.map((label) => (
          <button
            key={label}
            onClick={() => setLevel(label)}
            className={`flex-1 py-2 border border-[#2DE4FF] text-sm font-semibold ${level === label ? "bg-[#2DE4FF] text-black" : "bg-transparent"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Info Row */}
      <div className="grid grid-cols-4 text-sm border border-[#6783A8] rounded-md mb-4">
        <div className="px-3 py-2 border-r border-[#6783A8]">
          Current Setting: <span className="text-yellow-400">{level}</span>
        </div>
        <div className="px-3 py-2 border-r border-[#6783A8]">
          Expected Monthly Savings:{" "}
          <span className="text-[#00ff5e]">
            {selectedCustomer === "Customer 1" ? "$75" : "$55"}
          </span>
        </div>
        <div className="px-3 py-2 border-r border-[#6783A8]">
          SLA Risk:{" "}
          <span className="text-blue-400">
            {selectedCustomer === "Customer 1" ? "Low" : "Medium"}
          </span>
        </div>
        <div className="px-3 py-2">
          Throughput Impact:{" "}
          <span className="text-pink-400">
            {selectedCustomer === "Customer 1" ? "< 2%" : "< 5%"}
          </span>
        </div>
      </div>

      {/* Smoothing Preferences */}
      <div>
        <p className="font-semibold mb-2">Smoothing Preferences</p>
        <div className="flex items-center gap-6 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="accent-blue-500" />
            Expected Monthly Savings
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="accent-blue-500" />
            SLA Risk
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" defaultChecked className="accent-blue-500" />
            Throughput Impact
          </label>
        </div>
      </div>
    </div>
  );
};

export default PeakShavingConsumption;
