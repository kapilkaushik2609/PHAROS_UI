import React from "react";
import PeakShavingConsumption from "./PeakShavingConsumption";
import { FaCogs, FaRegClipboard } from "react-icons/fa";
import { motion } from "framer-motion";

const ActionCenter = ({ selectedCustomer }) => {
  return (
    <>
      {/* Keep Peak Shaving unchanged */}
      <div>
        <PeakShavingConsumption selectedCustomer={selectedCustomer} />
      </div>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 - My Service Settings */}
        <div
          className="bg-[#1a2a44] text-white p-4 rounded-2xl shadow-md border border-[#2DE4FF]"
        >
          {/* Header */}
          <div className="flex items-center space-x-2 mb-4 border-b border-[#2DE4FF] pb-2">
            <FaCogs className="text-[#2DE4FF]" />
            <h3 className="text-lg font-semibold">My Service Settings</h3>
          </div>

          {/* SLA Tier */}
          <p className="text-sm mb-2">SLA Tier</p>
          <div className="flex gap-2 mb-4">
            {["Tier 1", "Tier 2", "Tier 3", "Tier 4"].map((tier, idx) => (
              <button
                key={idx}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-transparent border border-[#2DE4FF] rounded-md py-1 text-sm"
              >
                {tier}
              </button>
            ))}
          </div>

          {/* Configure Alerts */}
          <button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#2DE4FF] text-black font-bold py-2 rounded-md mb-1"
          >
            Configure Alerts
          </button>
          <p className="text-xs text-gray-300 mb-3">
            Set up notifications for performance and costs
          </p>

          {/* Billing Preferences */}
          <button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#5B5B5B] text-white font-semibold py-2 rounded-md mb-1"
          >
            Set Billing Preferences
          </button>
          <p className="text-xs text-gray-300">
            Choose payment and reporting options
          </p>
        </div>

        {/* Card 2 - Expansion Planning */}
        <div
          className="bg-[#1a2a44] text-white p-4 rounded-2xl shadow-md border border-[#2DE4FF]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          whileHover={{ scale: 1.02, boxShadow: "0px 8px 25px rgba(45, 228, 255, 0.2)" }}
        >
          {/* Header */}
          <div className="flex items-center space-x-2 mb-4 border-b border-[#2DE4FF] pb-2">
            <FaRegClipboard className="text-[#2DE4FF]" />
            <h3 className="text-lg font-semibold">Expansion Planning</h3>
          </div>

          {/* Add Racks */}
          <button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#2DE4FF] text-black font-semibold py-2 rounded-md mb-1"
          >
            Add Racks
          </button>
          <p className="text-xs text-gray-300 mb-3">
            Expand your infrastructure capacity
          </p>

          {/* Upgrade Capacity */}
          <button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#5B5B5B] text-white font-semibold py-2 rounded-md mb-1"
          >
            Upgrade Capacity
          </button>
          <p className="text-xs text-gray-300 mb-3">
            Increase power allocation for existing racks
          </p>

          {/* Plan Growth */}
          <button
            whileTap={{ scale: 0.95 }}
            className="w-full bg-transparent border border-[#2DE4FF] text-white font-semibold py-2 rounded-md mb-1"
          >
            Plan Growth
          </button>
          <p className="text-xs text-gray-300">
            Get recommendations for future expansion
          </p>
        </div>
      </div>
    </>
  );
};

export default ActionCenter;
