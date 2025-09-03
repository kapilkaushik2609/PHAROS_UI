// src/components/widgets/BarChartWidget.jsx
import React from 'react';

const BarChartWidget = ({ title, data, labels, color, showLabelsOnBars = false, className = '' }) => {
  // Find the maximum value to scale bars correctly.
  const maxValue = Math.max(...data);
  // Max label length for Y-axis scaling
  const maxLabelLength = labels.reduce((max, label) => Math.max(max, label.length), 0);

  // Y-axis labels - for this specific design, we'll hardcode based on the image's example
  // For a dynamic solution, you'd calculate these based on data range.
  const yAxisLabels = ["0%", "23%", "42%", "65%"]; // Example for Turbine Efficiency
  const yAxisLabelsPower = ["0", "0", "0", "0", "0"]; // Example for Power Savings, less clear in image
  const yAxisLabelsWasteHeat = ["10%", "40%", "86%", "00%"]; // Example for Waste Heat

  let currentYLabels = [];
  if (title.includes("Power Savings")) {
    currentYLabels = ["", "", "", ""]; // Based on image, it looks like no explicit Y-labels
  } else if (title.includes("Turbine")) {
    currentYLabels = yAxisLabels;
  } else if (title.includes("Waste Heat")) {
    currentYLabels = yAxisLabelsWasteHeat;
  }

  return (
    <div className={`bg-pharos-card border border-gray-300 rounded-lg p-4 shadow-lg flex flex-col ${className}`}>
      <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
      <div className="flex flex-1 min-h-[150px]"> {/* Ensure min height for chart */}
        {/* Y-axis labels (if applicable) */}
        {currentYLabels.length > 0 && (
          <div className="flex flex-col justify-between pr-2 text-xs text-white">
            {currentYLabels.slice().reverse().map((label, index) => (
              <span key={index}>{label}</span>
            ))}
          </div>
        )}

        {/* Chart Bars */}
        <div className="flex-1 flex items-end justify-around h-full space-x-1 sm:space-x-2">
          {data.map((value, index) => (
            <div key={index} className="flex flex-col items-center flex-grow group relative h-full justify-end">
              {showLabelsOnBars && (
                <span className="absolute -top-5 text-xs text-white opacity-90">
                  {labels[index]} {/* Using passed labels for actual bar display */}
                </span>
              )}
              <div
                className="w-full rounded-t-sm transition-all duration-300 hover:opacity-80"
                style={{
                  height: `${(value / maxValue) * 100}%`,
                  backgroundColor: color,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      {/* X-axis Labels */}
      <div className="flex justify-around text-xs text-white mt-2 pt-2 border-t border-gray-700">
        {labels.map((label, index) => (
          <span key={index} className="flex-grow text-center">{label}</span>
        ))}
      </div>
    </div>
  );
};

export default BarChartWidget;