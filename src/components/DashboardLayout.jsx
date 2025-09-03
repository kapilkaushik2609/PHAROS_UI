// // src/components/DashboardLayout.jsx
// import React, { useState } from 'react';
// import BarChartWidget from './widgets/BarChartWidget';
// import GaugeWidget from './widgets/GaugeWidget';
// import AlarmsWidget from './widgets/AlarmsWidget';
// import SchematicWidget from './widgets/SchematicWidget';

// const DashboardLayout = ({ activeMainTab, setActiveMainTab }) => {
//   const mainTabs = ['System Overview', 'Waste Heat Capacity', 'Thermal Energy Storage', 'PV'];

//   // Dummy data for charts - you'd replace this with actual fetched data
//   const powerSavingsData = {
//     labels: Array.from({ length: 24 }, (_, i) => String(i + 1).padStart(2, '0')),
//     values: [
//       20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 85, 80, 70, 60, 50, 40, 30, 25, 20
//     ],
//     color: '#00F0B5' // green
//   };

//   const turbineEfficiencyData = {
//     labels: ['65%', '80%', '87%', '89%', '81%', '70%', '80%'],
//     values: [65, 80, 87, 89, 81, 70, 80], // Actual values for chart height
//     color: '#00F0B5', // green
//     showLabelsOnBars: true, // Display the percentage label on top of each bar
//   };

//   const wasteHeatCapacityData = {
//     labels: ['88%', '50%', '83%', '33%', '88%', '33%', '30%', '70%'],
//     values: [88, 50, 83, 33, 88, 33, 30, 70], // Actual values for chart height
//     color: '#4DAAFF', // blue
//     showLabelsOnBars: true,
//   };

//   return (
//     <div className="flex flex-col h-full">
//       {/* Main Tab Navigation */}
//       <div className="bg-gray-800 rounded-lg p-2 mb-6 flex flex-wrap justify-start gap-2 border border-gray-700">
//         {mainTabs.map((tab) => (
//           <button
//             key={tab}
//             className={`px-4 py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200 ${activeMainTab === tab
//               ? 'bg-pharos-blue text-white'
//               : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
//               }`}
//             onClick={() => setActiveMainTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Dashboard Content Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 flex-1">
//         {activeMainTab === 'System Overview' && (
//           <>
//             {/* Row 1 */}
//             <BarChartWidget
//               title="Daily Average Power Savings"
//               data={powerSavingsData.values}
//               labels={powerSavingsData.labels}
//               color={powerSavingsData.color}
//               className="md:col-span-2"
//             />

//             <div className="bg-pharos-card border border-gray-700 rounded-lg p-4 shadow-lg md:col-span-1 flex flex-col items-center justify-around">
//               <h3 className="text-lg font-semibold mb-4 text-white">Live System</h3>
//               <div className="flex flex-wrap justify-around w-full gap-4">
//                 <GaugeWidget label="Power Generated" value={10} max={100} unit="MW" color="#FF4D4D" />
//                 <GaugeWidget label="DC Heat" value={40} max={100} unit="°C" color="#4DAAFF" />
//                 <GaugeWidget label="TES Temperature" value={90} max={100} unit="°C" color="#FFB84D" />
//               </div>
//             </div>

//             <AlarmsWidget className="md:col-span-1" />

//             {/* Row 2 - Bar Charts */}
//             <BarChartWidget
//               title="Daily Average efficiency of Turbine"
//               data={turbineEfficiencyData.values}
//               labels={turbineEfficiencyData.labels}
//               color={turbineEfficiencyData.color}
//               showLabelsOnBars={turbineEfficiencyData.showLabelsOnBars}
//               className="md:col-span-2"
//             />
//             <BarChartWidget
//               title="Daily Waste Heat Reuse Capacity"
//               data={wasteHeatCapacityData.values}
//               labels={wasteHeatCapacityData.labels}
//               color={wasteHeatCapacityData.color}
//               showLabelsOnBars={wasteHeatCapacityData.showLabelsOnBars}
//               className="md:col-span-2"
//             />

//             {/* Schematic - takes full width on smaller screens, half on larger */}
//             <SchematicWidget className="col-span-full xl:col-span-2" />
//           </>
//         )}
//         {/* Placeholder for other tabs */}
//         {activeMainTab !== 'System Overview' && (
//           <div className="col-span-full bg-pharos-card rounded-lg p-8 flex items-center justify-center text-2xl text-gray-400">
//             Content for {activeMainTab}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

// src/components/DashboardLayout.jsx

import React, { useState, useEffect } from 'react';
import BarChartWidget from './widgets/BarChartWidget';
import GaugeWidget from './widgets/GaugeWidget';
import AlarmsWidget from './widgets/AlarmsWidget';
import SchematicWidget from './widgets/SchematicWidget';
import TimeChartWidget from './widgets/TimeChartWidget';

const DashboardLayout = ({ activeMainTab, setActiveMainTab }) => {
  const mainTabs = ['System Overview', 'Waste Heat Capacity', 'Thermal Energy Storage', 'PV'];

  // Dummy data for charts - you'd replace this with actual fetched data
  const powerSavingsData = {
    labels: Array.from({ length: 18 }, (_, i) => String(i + 1).padStart(2, '0')),
    values: [
      20, 25, 30, 35, 40, 45, 50, 55, 80, 85, 80, 70, 60, 50, 40, 30, 25, 20
    ],
    color: '#00F0B5' // green
  };

  const turbineEfficiencyData = {
    labels: ['65%', '80%', '87%', '89%', '81%', '70%', '80%'],
    values: [65, 80, 87, 89, 81, 70, 80], // Actual values for chart height
    color: '#00F0B5', // green
    // showLabelsOnBars: true, // Display the percentage label on top of each bar
  };

  const wasteHeatCapacityData = {
    labels: ['88%', '50%', '83%', '33%', '88%', '33%', '30%', '70%'],
    values: [88, 50, 83, 33, 88, 33, 30, 70], // Actual values for chart height
    color: '#4DAAFF', // blue
    showLabelsOnBars: true,
  };


  const [liveTimestamp, setLiveTimestamp] = useState('');

  useEffect(() => {
    const updateTimestamp = () => {
      const now = new Date();
      const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
      }).format(now);
      const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setLiveTimestamp(`${formattedDate} ${formattedTime}`);
    };

    updateTimestamp();
    const interval = setInterval(updateTimestamp, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex flex-col h-full">
      {/* Main Tab Navigation */}
      <div className="bg-pharos-card rounded-lg p-2 mb-6 flex flex-wrap justify-start gap-2 border border-gray-700">
        {mainTabs.map((tab) => (
          <button
            key={tab}
            className={`
        px-4 py-2 rounded-md text-sm md:text-base font-medium
        transition-all duration-200 ease-in-out
        ${activeMainTab === tab
                ? 'bg-pharos-blue text-white shadow-md transform scale-105'
                : 'bg-gray-800 text-gray-100 hover:bg-gray-700 hover:text-white'
              }
      `}
            onClick={() => setActiveMainTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dashboard Content Grid */}
      {/* Updated grid layout:
              - On large screens (xl), it's a 4-column grid.
              - Left column (span 2): Bar charts
              - Right column (span 2): Live System, Alarms, Schematic
          */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 flex-1">
        {activeMainTab === 'System Overview' && (
          <>
            {/* Left Column: Three Bar Charts, each spanning 2 columns on medium screens, 1 on extra large */}
            <BarChartWidget
              title="Daily Average Power Savings"
              data={powerSavingsData.values}
              labels={powerSavingsData.labels}
              color={powerSavingsData.color}
              className="md:col-span-2 xl:col-span-2" // On xl screens, it's 2 columns wide
            />

            <div className="md:col-span-2 xl:col-span-2 flex flex-col xl:flex-row gap-6">
              <div className="bg-pharos-card border border-gray-300 rounded-lg p-4 shadow-lg flex-1">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  Live Status - {liveTimestamp}
                </h3>
                {/* Use a flex container for horizontal alignment */}
                <div className="flex justify-around items-center w-full gap-4 mt-2">
                  {/* Power Generated Gauge */}
                  <div className="flex-1 text-center">
                    <GaugeWidget label="Power Generated" value={10} max={100} unit="MW" color="#FF4D4D" />
                  </div>
                  {/* Divider */}
                  <div className="hidden md:block h-24 w-px bg-gray-600"></div>
                  {/* DC Heat Gauge */}
                  <div className="flex-1 text-center">
                    <GaugeWidget label="DC Heat" value={40} max={100} unit="°C" color="#4DAAFF" />
                  </div>
                  {/* Divider */}
                  <div className="hidden md:block h-24 w-px bg-gray-600"></div>
                  {/* TES Temperature Gauge */}
                  <div className="flex-1 text-center">
                    <GaugeWidget label="TES Temperature" value={90} max={100} unit="°C" color="#FFB84D" />
                  </div>
                </div>
              </div>
              <AlarmsWidget className="flex-1" />
            </div>
            {/* Second Bar Chart (left) */}
            <BarChartWidget
              title="Daily Average efficiency of Turbine"
              data={turbineEfficiencyData.values}
              labels={turbineEfficiencyData.labels}
              color={turbineEfficiencyData.color}
              showLabelsOnBars={turbineEfficiencyData.showLabelsOnBars}
              className="md:col-span-2 xl:col-span-2"
            />

            {/* Schematic (right, aligned with second and third bar charts) */}
            {/* On medium screens it takes full width below the 2x2 grid.
                    On extra large screens, it spans 2 columns to sit next to the bar charts. */}
            {/* <SchematicWidget className="col-span-full xl:col-span-2 row-span-2" /> */}{/* Takes 2 rows and 2 columns on XL */}
            <div className="col-span-full xl:col-span-2 row-span-2">
              <img src="/images/image.png" alt="A schematic representation" />
            </div>

            <div className="flex border border-gray-300 rounded-lg p-4 shadow-lg md:col-span-2 xl:col-span-2">
              <TimeChartWidget />
            </div>
          </>
        )}
        {/* Placeholder for other tabs */}
        {activeMainTab !== 'System Overview' && (
          <div className="col-span-full bg-pharos-card rounded-lg p-8 flex items-center justify-center text-2xl text-gray-400">
            Content for {activeMainTab}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;