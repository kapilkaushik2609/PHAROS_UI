// import { useState } from "react";
// import HighLevelSummary from "../../pages/HighLevelSummary";
// import EPDUStatus from "../../pages/EPDUStatus";
// import MonthlyConsumption from "../../pages/MonthlyConsumption";
// import BackplaneExpansion from "../../pages/BackplaneExpansion";
// import PeakShavingConsumption from "../../pages/PeakShavingConsumption";

// const TenantDashboard = () => {
//   const [selectedCustomer, setSelectedCustomer] = useState("Customer 1");

//   return (
//     <div className="p-4 flex flex-col gap-5  overflow-y-auto scroll-hidden">
//       {/* Top Section */}
//       <div className="flex flex-col gap-5">
//         <HighLevelSummary
//           selectedCustomer={selectedCustomer}
//           setSelectedCustomer={setSelectedCustomer}
//         />
//       </div>

//       {/* Middle Section: EPDU + Peak Shaving side by side */}
//       <div className="flex flex-col lg:flex-row gap-4">
//         <div className="w-full">
//           <EPDUStatus selectedCustomer={selectedCustomer} />
//         </div>
//       </div>

//       {/* third section  */}
//       <div className="flex flex-col lg:flex-row gap-4">
//         <div className="flex-1 min-w-0">
//           <MonthlyConsumption selectedCustomer={selectedCustomer} />
//         </div>
//         <div className="flex-1 min-w-0">
//           <MonthlyConsumption selectedCustomer={selectedCustomer} />
//         </div>
//       </div>
//       {/* <div className="w-full lg:w-1/3">
//           <BackplaneExpansion selectedCustomer={selectedCustomer} />
//         </div> */}

//       <div className="w-full">
//         <PeakShavingConsumption selectedCustomer={selectedCustomer} />
//       </div>
//     </div>
//   );
// };

// export default TenantDashboard;



// import HighLevelSummary from "../../pages/HighLevelSummary";
// import EPDUStatus from "../../pages/EPDUStatus";
// import MonthlyConsumption from "../../pages/MonthlyConsumption";
// import BackplaneExpansion from "../../pages/BackplaneExpansion";
// import PeakShavingConsumption from "../../pages/PeakShavingConsumption";
// import SankeyDiagram from "../../pages/SankeyDiagram";
// import HeatMap from "../../pages/HeatMap";

// const TenantDashboard = ({ selectedCustomer }) => {
//   return (
//     <div className="p-4 flex flex-col gap-5 overflow-y-auto scroll-hidden">
//       {/* left 1/3rd Section */}
//       <div className="flex flex-col gap-5">
//         <HighLevelSummary selectedCustomer={selectedCustomer} />
//       </div>

//       <div className="flex min-w-0  p-0 rounded-lg">
//         <EPDUStatus selectedCustomer={selectedCustomer} />
//       </div>
//       <div className="w-full h-[350px] mb-20">
//         <SankeyDiagram selectedCustomer={selectedCustomer} />
//       </div>

//     </div>
//   );
// };

// export default TenantDashboard;

import HighLevelSummary from "../../pages/HighLevelSummary";
import EPDUStatus from "../../pages/EPDUStatus";
import SankeyDiagram from "../../pages/SankeyDiagram";

const TenantDashboard = ({ selectedCustomer }) => {
  return (
    <div className="p-1 grid grid-cols-3 gap-4 h-auto">
      {/* Left Section */}
      <div className="flex flex-col gap-4 p-3 border border-[#6783A8] rounded-xl">
        <HighLevelSummary selectedCustomer={selectedCustomer} />
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-4 col-span-2 h-full">
        {/* EPDU on top */}
        <div className="flex-1 min-h-[150px] border border-[#6783A8] rounded-xl p-2">
          <EPDUStatus selectedCustomer={selectedCustomer} />
        </div>

        {/* Sankey Diagram below EPDU */}
        <div className="flex-1 border border-[#6783A8] rounded-xl p-2">
          <SankeyDiagram selectedCustomer={selectedCustomer} />
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;
