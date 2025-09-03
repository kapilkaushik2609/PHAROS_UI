// import React, { useState } from "react";
// import { FiSettings } from "react-icons/fi";
// import { useNavigate } from "react-router-dom"; // ✅ import

// const ToggleSwitch = ({ enabled, setEnabled }) => {
//   return (
//     <div
//       onClick={() => setEnabled(!enabled)}
//       className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-300 ${
//         enabled ? "bg-[#3B82F6]" : "bg-gray-600"
//       }`}
//     >
//       <span
//         className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
//           enabled ? "translate-x-6" : "translate-x-1"
//         }`}
//       />
//     </div>
//   );
// };

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate(); // ✅ hook

//   // Toggle states
//   const [peakEvent, setPeakEvent] = useState(true);
//   const [slaBreach, setSlaBreach] = useState(true);
//   const [rackLevel, setRackLevel] = useState(false);

//   const menuItems = [
//     "Tenant Dashboard",
//     "Energy Virtualization",
//     "Financial",
//     "Operational",
//     "Planning",
//     "Configuration",
//     "Strategic Management",
//     "Screen -2",
//   ];

//   const handleMenuClick = (item) => {
//     if (item === "Screen -2") {
//       navigate("/heatmap"); // ✅ go to heatmap page
//     }
//   };

//   return (
//     <div className="relative">
//       {/* Main Header */}
//       <div className="w-full text-white flex items-center px-6 py-3.5 border-[#28496D] bg-[#002D47] border-b-2 text-[20px] font-semibold">
//         {/* Centered Navigation */}
//         <div className="flex-1 flex justify-center space-x-6">
//           {menuItems.map((item, i) => (
//             <button
//               key={i}
//               onClick={() => handleMenuClick(item)} // ✅ click handler
//               className={`px-4 py-3 rounded-full cursor-pointer ${
//                 i === 0 ? "bg-sky-600" : ""
//               }`}
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         {/* Settings Icon */}
//         <div
//           onClick={() => setOpen(!open)}
//           className="ml-4 cursor-pointer relative"
//         >
//           <FiSettings
//             size={28}
//             className={`transition-transform duration-500 ${
//               open ? "rotate-180" : "rotate-0"
//             }`}
//           />
//         </div>
//       </div>

//       {/* Dropdown Panel */}
//       {open && (
//         <div className="absolute right-6 mt-2 w-80 bg-[#001A2C] border border-[#6783A8] rounded-lg shadow-lg p-4 z-50">
//           <h3 className="text-[22px] font-semibold mb-3 text-white">
//             Settings
//           </h3>
//           <div className="space-y-4 text-white text-[20px]">
//             <div className="flex justify-between items-center">
//               <span>Peak Event Notification</span>
//               <ToggleSwitch enabled={peakEvent} setEnabled={setPeakEvent} />
//             </div>
//             <div className="flex justify-between items-center">
//               <span>SLA Breach Notification</span>
//               <ToggleSwitch enabled={slaBreach} setEnabled={setSlaBreach} />
//             </div>
//             <div className="flex justify-between items-center">
//               <span>Rack-Level Smoothing</span>
//               <ToggleSwitch enabled={rackLevel} setEnabled={setRackLevel} />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FiChevronDown } from "react-icons/fi";

// const steps = ["Summary", "Action Control", "Output & Results",];

// const Header = ({ activeStep = 0, onStepChange, selectedCustomer, setSelectedCustomer }) => {
//   const [currentStep, setCurrentStep] = useState(activeStep);
//   const [activeTab, setActiveTab] = useState("Tenant Portal");

//   const navigate = useNavigate();

//   const handleClick = (index) => {
//     // Prevent clicking on "Output & Results" (index 2) if disabled
//     if (index === 2) return; // Skip click handling for "Output & Results"
//     setCurrentStep(index);
//     onStepChange && onStepChange(index);
//   };

//   return (
//     <div className="w-full flex flex-col items-center mt-6 pb-2 px-4 sm:px-6 z-50">
//       {/* Steps row */}
//       <div className="flex items-center justify-center flex-wrap gap-x-0 gap-y-4">
//         {steps.map((step, index) => (
//           <React.Fragment key={index}>
//             <div
//               className={`text-white font-semibold border-2 border-blue-400 rounded-full
//                 transition duration-300 text-center
//                 w-[170px] sm:w-[190px] md:w-[230px] lg:w-[240px]
//                 py-2 sm:py-3 text-[22px]
//                 z-10
//                 ${index === 2
//                   ? "bg-gray-600 text-gray-400 opacity-50 cursor-not-allowed" // Grayed-out styles for "Output & Results"
//                   : index === currentStep
//                     ? "bg-[#2D96FF] text-black shadow-md cursor-pointer"
//                     : "bg-transparent hover:bg-blue-500/20 cursor-pointer"
//                 }`}
//               onClick={() => handleClick(index)}
//             >
//               {step}
//             </div>

//             {/* Connector Line */}
//             {index !== steps.length - 1 && (
//               <div
//                 className={`h-[2px] w-3 sm:w-4 md:w-16 ${index === 2 ? "bg-gray-400" : "bg-blue-400"
//                   } z-0`}
//                 style={{ marginLeft: "-1px", marginRight: "-1px" }}
//               />
//             )}
//           </React.Fragment>
//         ))}
//       </div>

//       {/* Colo-Operator + Dropdown row */}
//       <div className="flex justify-between items-center mt-6 w-full max-w-8xl p-2">
//         {/* Toggle buttons */}
//         <div className="flex space-x-2 outline-2 outline-[#1AE8FF] rounded-sm cursor-pointer text-[20px]">
//           <button
//             className={`px-4 py-2 font-semibold opacity-50 cursor-not-allowed bg-gray-500 text-white`}
//             disabled
//             onClick={() => setActiveTab("Colo-Operator")}
//           >
//             Colo-Operator
//           </button>
//           <button
//             className={`px-4 py-2 font-semibold ${activeTab === "Tenant Portal"
//               ? "bg-[#1AE8FF] text-black"
//               : "bg-[#1A2A44] text-white"
//               }`}
//             onClick={() => setActiveTab("Tenant Portal")}
//           >
//             Tenant Portal
//           </button>
//         </div>

//         {/* Dropdown */}
//         <div className="relative w-52">
//           <select
//             value={selectedCustomer}
//             onChange={(e) => setSelectedCustomer(e.target.value)}
//             className="bg-transparent border border-white/30 text-white px-3 py-2 rounded-md focus:outline-none focus:border-sky-400 w-full appearance-none text-xl"
//           >
//             <option className="bg-[#00406B] text-white">Customer 1</option>
//             <option className="bg-[#00406B] text-white">Customer 2</option>
//           </select>
//           <FiChevronDown
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
//             size={20}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

const steps = ["Summary", "Action Control", "Output & Results"];

const Header = ({
  activeStep = 0,
  onStepChange,
  selectedCustomer,
  setSelectedCustomer,
}) => {
  const [currentStep, setCurrentStep] = useState(activeStep);
  const [activeTab, setActiveTab] = useState("Tenant Portal");

  const navigate = useNavigate();

  const handleClick = (index) => {
    setCurrentStep(index);
    onStepChange && onStepChange(index);
  };

  return (
    <div className="w-full flex flex-col items-center mt-6 pb-2 px-4 sm:px-6 z-50">
      {/* Steps row */}
      <div className="flex items-center justify-center flex-wrap gap-x-0 gap-y-4">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className={`text-white font-semibold border-2 border-blue-400 rounded-full
                transition duration-300 text-center
                w-[170px] sm:w-[190px] md:w-[230px] lg:w-[240px]
                py-2 sm:py-3 text-[22px]
                z-10
                ${index === currentStep
                  ? "bg-[#2D96FF] text-black shadow-md cursor-pointer"
                  : "bg-transparent hover:bg-blue-500/20 cursor-pointer"
                }`}
              onClick={() => handleClick(index)}
            >
              {step}
            </div>

            {/* Connector Line */}
            {index !== steps.length - 1 && (
              <div
                className="h-[2px] w-3 sm:w-4 md:w-16 bg-blue-400 z-0"
                style={{ marginLeft: "-1px", marginRight: "-1px" }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Colo-Operator + Dropdown row */}
      <div className="flex justify-between items-center mt-6 w-full max-w-8xl p-2">
        {/* Toggle buttons */}
        <div className="flex space-x-2 outline-2 outline-[#1AE8FF] rounded-sm cursor-pointer text-[20px]">
          <button
            className="px-4 py-2 font-semibold opacity-50 cursor-not-allowed bg-gray-500 text-white"
            disabled
            onClick={() => setActiveTab("Colo-Operator")}
          >
            Colo-Operator
          </button>
          <button
            className={`px-4 py-2 font-semibold ${activeTab === "Tenant Portal"
                ? "bg-[#1AE8FF] text-black"
                : "bg-[#1A2A44] text-white"
              }`}
            onClick={() => setActiveTab("Tenant Portal")}
          >
            Tenant Portal
          </button>
        </div>

        {/* Dropdown */}
        <div className="relative w-52">
          <select
            value={selectedCustomer}
            onChange={(e) => setSelectedCustomer(e.target.value)}
            className="bg-transparent border border-white/30 text-white px-3 py-2 rounded-md focus:outline-none focus:border-sky-400 w-full appearance-none text-xl"
          >
            <option className="bg-[#00406B] text-white">Customer 1</option>
            <option className="bg-[#00406B] text-white">Customer 2</option>
          </select>
          <FiChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
