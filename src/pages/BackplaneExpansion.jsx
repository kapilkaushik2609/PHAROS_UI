import React from "react";

const BackplaneExpansion = ({ selectedCustomer }) => {
  const data = {
    "Customer 1": {
      capacity: "1.2 MW",
      projected: "1.8 MW",
      traditional: "$850,000",
      sherpa: "$340,000",
      savings: "$1,190,000",
    },
    "Customer 2": {
      capacity: "1.5 MW",
      projected: "2.1 MW",
      traditional: "$920,000",
      sherpa: "$410,000",
      savings: "$1,330,000",
    },
  };

  const values = data[selectedCustomer];

  return (
    <div className="bg-[#001A2C] p-4 pr-7 pl-7 rounded-[20px] text-white border border-[#6783A8] h-[383px]">
      <h2 className="font-semibold mb-4 text-[26px]">
        Backplane Expansion Analysis
      </h2>
      <hr className="border-[#6783A8] mb-6" />

      <div className="flex justify-between text-xl mb-4">
        <span>Current Capacity</span>
        <span className="font-semibold">{values.capacity}</span>
      </div>

      <div className="flex justify-between text-xl mb-6">
        <span>Projected Need (12m)</span>
        <span className="font-semibold">{values.projected}</span>
      </div>

      <hr className="border-[#6783A8] mb-4" />

      <div className="flex justify-between text-xl mb-4">
        <span>Traditional Solution</span>
        <span className="font-semibold">{values.traditional}</span>
      </div>

      <div className="flex justify-between text-xl mb-4">
        <span>SHERPA Solution</span>
        <span className="font-semibold">{values.sherpa}</span>
      </div>

      <div className="bg-[#4C5D6F] p-3 rounded-sm flex justify-between items-center border border-[#8E8E8E] mb-4">
        <span className="text-[#1AE8FF] font-semibold text-[22px]">
          Total Savings
        </span>
        <span className="font-bold text-[20px]">{values.savings}</span>
      </div>
    </div>
  );
};

export default BackplaneExpansion;
