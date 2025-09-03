import React from 'react';
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge';
import { styled } from '@mui/material/styles';

const Pointer = styled('g')(({ theme }) => ({
  '& > path': {
    fill: theme.palette.mode === 'dark' ? 'white' : 'black',
  },
}));

function GaugePointer({ value, valueMax, unit }) {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };

  return (
    <Pointer>
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="#ccc"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r={3} fill="#ccc" />
    </Pointer>
  );
}

export default function GaugeWidget({ label, value, max, unit, color }) {
  const arcLength = 220; // total arc length in degrees
  const startAngle = -110;

  return (
    <div className="flex flex-col items-center text-center p-1 min-w-[100px] sm:min-w-[120px]">
      <p className="text-sm font-semibold mb-1 text-white">{label}</p>

      <div className="relative w-full h-20">
        <GaugeContainer
          width={120}
          height={80}
          startAngle={startAngle}
          endAngle={startAngle + arcLength}
          value={value}
          valueMin={0}
          valueMax={max}
          sx={{
            [`& .MuiGauge-referenceArc`]: {
              fill: '#4B5563',
            },
            [`& .MuiGauge-valueArc`]: {
              fill: color,
            },
          }}
        >
          <GaugeReferenceArc />
          <GaugeValueArc />
          <GaugePointer />
        </GaugeContainer>
      </div>

      <p className="text-xl font-bold mt-0 text-white">{value}{unit}</p>
    </div>
  );
}