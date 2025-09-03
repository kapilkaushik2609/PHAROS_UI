// import Navbar from "./Navbar";
// import Header from "./Header";
// import TenantDashboard from "./TenantDashboard";
// import HeaderSystem from "./HeaderSystem";

// const MainDashboard = () => {
//   return (
//     // <div className="min-h-screen flex flex-col  text-white">
//     <div className="min-h-screen bg-gradient-to-bl from-[#00406B] to-[#001A2C] flex flex-col  pt-6 sm:pt-8  font-sans">
//       <Navbar />
//         <HeaderSystem />
//         <Header />
//       {/* </div> */}

//       {/* Scrollable Tenant Dashboard */}
//       <div className="flex-1 overflow-y-auto px-4 sm:px-6 pt-20 pb-6">
//         <TenantDashboard />
//       </div>
//     </div>
//   );
// };

// export default MainDashboard;

// import Navbar from "./Navbar";
// import Header from "./Header";
// import TenantDashboard from "./TenantDashboard";
// import HeaderSystem from "./HeaderSystem";

// const MainDashboard = () => {
//   return (
//     <div className="h-screen bg-gradient-to-bl from-[#00406B] to-[#001A2C] flex flex-col font-sans  pt-6 sm:pt-8 ">
//       {/* Fixed Top Section */}
//       <div className="flex flex-col flex-shrink-0 z-10 ">
//         <Navbar />
//         {/* <HeaderSystem /> */}
//         <Header />
//       </div>

//       {/* Scrollable Tenant Dashboard */}
//       {/* <div className="flex-1 overflow-y-auto px-4 sm:px-6 pt-6 pb-6"> */}
//       <div
//         className="w-full flex-grow  px-4 sm:px-4 overflow-y-auto scroll-hidden custom-scroll"
//         style={{ maxHeight: "calc(100vh - 140px)" }}
//       >
//         <TenantDashboard />
//       </div>
//     </div>
//   );
// };

// export default MainDashboard;

//without customer change

// import { useState } from "react";
// import Navbar from "./Navbar";
// import Header from "./Header";
// import TenantDashboard from "./TenantDashboard";
// import HeaderSystem from "./HeaderSystem";
// import ActionCenter from "../../pages/ActionCenter";
// import HeatMap from "../../pages/HeatMap";
// import OutputResults from "./OutputResults"; // 👈 create/import this

// const MainDashboard = () => {
//   const [activeStep, setActiveStep] = useState(0); // track active header button
//   const [selectedCustomer, setSelectedCustomer] = useState("Customer 1");


//   const renderContent = () => {
//     switch (activeStep) {
//       case 0: // Summary
//         return <TenantDashboard />;
//       case 1: // Action Center
//         return <ActionCenter />;
//       case 2: // Output & Results
//         return <OutputResults />;
//       case 3: // Heatmap
//         // return null;
//         return <HeatMap />
//       default:
//         return <TenantDashboard />;
//     }
//   };

//   return (
//     <div className="h-screen bg-gradient-to-bl from-[#00406B] to-[#001A2C] flex flex-col font-sans pt-6 sm:pt-8">
//       {/* Fixed Top Section */}
//       <div className="flex flex-col flex-shrink-0 z-10">
//         <Navbar />
//         {/* <HeaderSystem /> */}
//         <Header activeStep={activeStep} onStepChange={setActiveStep} />
//       </div>

//       {/* Dynamic Content Area */}
//       <div
//         className="w-full flex-grow px-4 sm:px-4 overflow-y-auto scroll-hidden custom-scroll"
//         style={{ maxHeight: "calc(100vh - 140px)" }}
//       >
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default MainDashboard;


// import { useState } from "react";
// import Navbar from "./Navbar";
// import Header from "./Header";
// import TenantDashboard from "./TenantDashboard";
// import HeaderSystem from "./HeaderSystem";
// import ActionCenter from "../../pages/ActionCenter";
// import HeatMap from "../../pages/HeatMap";
// import OutputandResults from "../../pages/OutputandResults"; // 👈 create/import this

// const MainDashboard = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [selectedCustomer, setSelectedCustomer] = useState("Customer 1"); // 👈 central state

//   const renderContent = () => {
//     switch (activeStep) {
//       case 0:
//         return <TenantDashboard selectedCustomer={selectedCustomer} />; // pass down
//       case 1:
//         return <ActionCenter selectedCustomer={selectedCustomer} />;
//       case 2:
//         return <OutputandResults />;
//       case 3:
//         return <HeatMap />;
//       default:
//         return <TenantDashboard selectedCustomer={selectedCustomer} />;
//     }
//   };

//   return (
//     <div className="h-screen bg-gradient-to-bl from-[#00406B] to-[#001A2C] flex flex-col font-sans pt-6 sm:pt-8">
//       {/* Fixed Top Section */}
//       <div className="flex flex-col flex-shrink-0 z-10">
//         <Navbar />
//         {/* 👇 pass selectedCustomer to Header */}
//         <Header
//           activeStep={activeStep}
//           onStepChange={setActiveStep}
//           selectedCustomer={selectedCustomer}
//           setSelectedCustomer={setSelectedCustomer}
//         />
//       </div>

//       {/* Dynamic Content Area */}
//       <div
//         className="w-full flex-grow px-4 sm:px-4 overflow-y-auto scroll-hidden custom-scroll"
//         style={{ maxHeight: "calc(100vh - 140px)" }}
//       >
//         {renderContent()}
//       </div>
//     </div>
//   );
// };

// export default MainDashboard;

import { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import TenantDashboard from "./TenantDashboard";
import HeaderSystem from "./HeaderSystem";
import ActionCenter from "../../pages/ActionCenter";
import HeatMap from "../../pages/HeatMap";
import OutputandResults from "../../pages/OutputandResults";
import DashboardLayout from "../DashboardLayout";

const MainDashboard = () => {
  const [activeMainTab, setActiveMainTab] = useState('System Overview');

  return (
    <div className="h-screen bg-gradient-to-bl from-[#00406B] to-[#001A2C] flex flex-col font-sans">
      {/* Fixed Top Section (PHAROS Header/Navbar) */}
      <div className="flex flex-col flex-shrink-0 z-10 ">
        <Navbar />
      </div>
      <div
        className="w-full flex-grow p-4 sm:p-6 lg:p-8 overflow-y-auto custom-scroll"
      >
        <DashboardLayout
          activeMainTab={activeMainTab}
          setActiveMainTab={setActiveMainTab}
        />
      </div>
    </div>
  );
};

export default MainDashboard;