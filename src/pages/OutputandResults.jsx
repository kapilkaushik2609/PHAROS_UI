import React from "react";
import MonthlyConsumption from "./MonthlyConsumption";
import RackPowerPiChart from "../components/common/RackPowerPiChart";
import { motion } from "framer-motion"; // ⬅️ import Frame and motion from Framer

function OutputandResults() {
  return (
    <div className="p-4 space-y-4">
      {/* Rack Power Source Mix */}
      <div
        className="bg-[#012D52] rounded-xl p-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-white font-bold text-lg mb-2">Rack Power Source Mix</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#013764] border border-[#2D96FF55] rounded-lg p-4 flex flex-col items-center"
            >
              <h3 className="text-white font-semibold mb-2">Rack R-A-015</h3>
              {/* Use reusable RackPowerPiChart */}
              <RackPowerPiChart />
            </div>
          ))}
        </div>
      </div>

      {/* Performance + Analysis Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[150px]">
        {/* My Performance Outlook */}
        <div
          className="bg-[#012D52] rounded-xl p-4 md:col-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-white font-bold text-lg mb-2">My Performance Outlook</h2>
          <MonthlyConsumption selectedCustomer="Customer 1" />
        </div>

        {/* Backplane Expansion Analysis */}
        <div
          className="bg-[#012D52] rounded-xl p-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-white font-bold text-lg mb-2">Backplane Expansion Analysis</h2>
          <div className="text-gray-200 text-sm space-y-2">
            <div className="flex justify-between">
              <span>Current Capacity</span>
              <span className="text-white font-bold">1.2 MW</span>
            </div>
            <div className="flex justify-between">
              <span>Projected Need (12m)</span>
              <span className="text-white font-bold">1.8 MW</span>
            </div>
            <div className="flex justify-between">
              <span>Traditional Solution</span>
              <span className="text-white font-bold">$850,000</span>
            </div>
            <div className="flex justify-between">
              <span>SHERPA Solution</span>
              <span className="text-white font-bold">$340,000</span>
            </div>
            <div className="flex justify-between bg-[#2D96FF44] px-2 py-1 rounded">
              <span>Total Savings</span>
              <span className="text-teal-300 font-bold">$510,000</span>
            </div>
          </div>

          {/* Toggles */}
          <div className="mt-4 space-y-2">
            {[
              { label: "Peak Event Notification", enabled: true },
              { label: "SLA Breach Notification", enabled: true },
              { label: "Rack-Level Smoothing", enabled: false },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-white text-sm">{item.label}</span>
                <div
                  className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer ${item.enabled ? "bg-blue-500" : "bg-gray-500"
                    }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${item.enabled ? "translate-x-5" : ""
                      }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutputandResults;