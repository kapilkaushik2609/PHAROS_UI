// src/components/widgets/SchematicWidget.jsx
import React from 'react';

const SchematicWidget = ({ className = '' }) => {
  // Placeholder image for the datacenter racks on the left
  const rackImage = "https://via.placeholder.com/150x200/2D2D2D/E0E0E0?text=Racks";

  return (
    <div className={`bg-pharos-card border border-gray-300 rounded-lg p-4 shadow-lg flex flex-col ${className}`}>
      <h3 className="text-lg font-semibold mb-4 text-pharos-text-light">
        Thermal Power generation - ORGANIC RANKINE CYCLE (ORC)
      </h3>

      <div className="flex flex-col md:flex-row flex-1 overflow-auto">
        {/* Left Section: Racks and TES */}
        <div className="flex flex-col items-center p-4 md:w-1/4 min-w-[200px]">
          <div className="flex space-x-2 mb-4">
            <img src={rackImage} alt="Datacenter Rack" className="w-24 h-40 object-cover rounded" />
            <img src={rackImage} alt="Datacenter Rack" className="w-24 h-40 object-cover rounded" />
          </div>
          <div className="bg-gray-800 border border-pharos-blue p-3 rounded-md text-center text-sm w-full">
            <p className="font-bold text-pharos-blue">(A) Thermal Energy Storage (TES)</p>
            <p className="text-xs text-gray-400">Charged / Discharged</p>
          </div>
        </div>

        {/* Right Section: ORC Diagram */}
        <div className="flex-1 p-4 relative min-h-[400px]">
          {/* Using a detailed SVG for the diagram based on your image */}
          <svg className="w-full h-full" viewBox="0 0 700 450">
            {/* Solar Heat Concentrator */}
            <rect x="200" y="50" width="180" height="30" fill="#333" stroke="#ccc" strokeWidth="1" />
            <text x="290" y="70" textAnchor="middle" fill="#fff" fontSize="12">Solar HEAT Concentrator</text>

            {/* Evaporator Heat Exchanger */}
            <rect x="250" y="180" width="120" height="60" fill="#333" stroke="#ccc" strokeWidth="1" />
            <text x="310" y="210" textAnchor="middle" fill="#fff" fontSize="12">Evaporator</text>
            <text x="310" y="225" textAnchor="middle" fill="#fff" fontSize="12">Heat Exchanger</text>

            {/* ORC Refrigerant container */}
            <rect x="400" y="160" width="50" height="100" fill="#333" stroke="#ccc" strokeWidth="1" />
            <text x="425" y="180" textAnchor="middle" fill="#fff" fontSize="10">ORC</text>
            <text x="425" y="195" textAnchor="middle" fill="#fff" fontSize="10">Refrigerant</text>
            {/* Refrigerant points */}
            {[...Array(6)].map((_, i) => (
              <circle key={i} cx="425" cy={215 + i * 10} r="3" fill={i % 2 === 0 ? 'red' : 'blue'} />
            ))}

            {/* Generator */}
            <rect x="550" y="80" width="100" height="40" fill="#333" stroke="#ccc" strokeWidth="1" />
            <text x="600" y="105" textAnchor="middle" fill="#fff" fontSize="12">Generator</text>

            {/* Evaporator Heat Exchanger (another one, based on diagram) */}
            <rect x="550" y="180" width="120" height="60" fill="#333" stroke="#ccc" strokeWidth="1" />
            <text x="610" y="210" textAnchor="middle" fill="#fff" fontSize="12">Evaporator</text>
            <text x="610" y="225" textAnchor="middle" fill="#fff" fontSize="12">Heat Exchanger</text>

            {/* Condenser Heat Exchanger */}
            <rect x="550" y="280" width="120" height="60" fill="#333" stroke="#ccc" strokeWidth="1" />
            <text x="610" y="310" textAnchor="middle" fill="#fff" fontSize="12">Condenser</text>
            <text x="610" y="325" textAnchor="middle" fill="#fff" fontSize="12">Heat Exchanger</text>

            {/* Pump */}
            <rect x="280" y="350" width="60" height="30" fill="#333" stroke="#ccc" strokeWidth="1" />
            <text x="310" y="370" textAnchor="middle" fill="#fff" fontSize="12">Pump</text>

            {/* Lines and arrows */}
            {/* Heat-input from racks to TES */}
            <line x1="150" y1="260" x2="250" y2="260" stroke="red" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="180" y="250" fill="red" fontSize="10">Heat-input</text>

            {/* TES to Evaporator */}
            <line x1="250" y1="260" x2="250" y2="210" stroke="red" strokeWidth="2" />
            <line x1="250" y1="210" x2="250" y2="210" stroke="red" strokeWidth="2" markerEnd="url(#arrowhead)" /> {/* Arrow to evaporator */}

            {/* Solar Concentrator to Evaporator */}
            <line x1="300" y1="80" x2="300" y2="180" stroke="orange" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="305" y="120" fill="orange" fontSize="10">Charge</text>

            {/* Evaporator to ORC Refrigerant (hot gas) */}
            <line x1="370" y1="210" x2="400" y2="210" stroke="orange" strokeWidth="2" markerEnd="url(#arrowhead)" />

            {/* ORC Refrigerant to Generator (hot gas) */}
            <line x1="450" y1="180" x2="550" y2="180" stroke="orange" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <line x1="550" y1="180" x2="550" y2="100" stroke="orange" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="490" y="170" fill="orange" fontSize="10">Heat-input</text>


            {/* Generator to Evaporator (waste heat) */}
            <line x1="600" y1="120" x2="600" y2="180" stroke="red" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="605" y="150" fill="red" fontSize="10">Heat-input</text>

            {/* Evaporator to Condenser (medium temp gas) */}
            <line x1="610" y1="240" x2="610" y2="280" stroke="blue" strokeWidth="2" markerEnd="url(#arrowhead)" />

            {/* Condenser to Pump (cooled liquid) */}
            <line x1="610" y1="340" x2="610" y2="380" stroke="cyan" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="620" y="370" fill="cyan" fontSize="10">Cooloutput</text>

            {/* Pump to Evaporator (liquid) */}
            <line x1="340" y1="365" x2="500" y2="365" stroke="cyan" strokeWidth="2" />
            <line x1="500" y1="365" x2="500" y2="240" stroke="cyan" strokeWidth="2" />
            <line x1="500" y1="240" x2="450" y2="240" stroke="cyan" strokeWidth="2" markerEnd="url(#arrowhead)" /> {/* Arrow to ORC Refrigerant */}

            {/* TES connections */}
            <line x1="200" y1="100" x2="200" y2="180" stroke="red" strokeWidth="2" />
            <line x1="200" y1="100" x2="250" y2="100" stroke="red" strokeWidth="2" markerEnd="url(#arrowhead)" />
            <text x="210" y="90" fill="red" fontSize="10">Heat-input</text>

            {/* Arrows Definition */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SchematicWidget;