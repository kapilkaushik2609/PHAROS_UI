import React from "react";

const HeaderSystem = () => {
  return (
    <div className="w-full bg-[#0F1C2E] text-white overflow-hidden border-b border-gray-700">
      <div className="animate-marquee whitespace-nowrap flex space-x-20 py-3 px-6 text-[18px] font-medium">
        <div className="flex items-center space-x-40">
          <div className="flex items-center space-x-2">
            <span className="text-teal-400 text-[12px]">●</span>
            <span>
              System: <span className="font-semibold">Good</span>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-red-500 text-[12px]">●</span>
            <span>
              Alerts: <span className="font-semibold">2</span>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-teal-400 text-[12px]">●</span>
            <span>
              Peak Shaving: <span className="font-semibold">Active</span>
            </span>
          </div>
          <div>
            Grid Power:{" "}
            <span className="font-semibold">
              11.865081474457654 <span className="font-bold">MW</span>
            </span>
          </div>
          <div>
            BESS SOC: <span className="font-semibold">75.7954766578472%</span>
          </div>
          <div>
            Savings Today: <span className="font-semibold">$2450</span>
          </div>
        </div>
      </div>

      {/* Custom animation */}
      <style>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0%   { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default HeaderSystem;
