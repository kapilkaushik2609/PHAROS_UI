import React, { useState } from 'react';
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
} from '@mui/x-charts/Gauge';
import { FiAlertTriangle } from 'react-icons/fi';
import { Box, Typography, Stack, Divider } from '@mui/material';

const AlarmsWidget = ({ className = '' }) => {
  const [activeSystem, setActiveSystem] = useState('TES System');

  const alarmsData = {
    "TES System": {
      total: 7,
      critical: 3,
      major: 3,
      warning: 1,
      minor: 0,
      details: [
        "Major - Rack 1 Overheat",
        "Major - Battery Level Low",
        "Critical - Fan Speed Anomaly",
      ]
    },
    "Power System": {
      total: 3,
      critical: 3,
      major: 0,
      warning: 0,
      minor: 0,
      details: [
        "Critical - Grid Instability",
        "Critical - Voltage Fluctuation",
        "Critical - Power Surge detected"
      ]
    },
  };

  const currentAlarms = alarmsData[activeSystem];

  const totalAlarms = currentAlarms.total;
  const critical = currentAlarms.critical;
  const major = currentAlarms.major;
  const warning = currentAlarms.warning;
  const minor = currentAlarms.minor;

  const totalPercentage = (totalAlarms / 10) * 100;

  return (
    <Box className={`bg-pharos-card border border-gray-300 rounded-lg p-3 shadow-lg flex flex-col ${className}`}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <FiAlertTriangle style={{ color: '#FF4D4D', marginRight: '8px' }} />
        <Typography variant="h6" sx={{ fontWeight: 'semibold', color: 'white', fontSize: '1rem' }}>
          Active Alarms
        </Typography>
      </Box>

      {/* Main Content Area - This Stack holds the Gauge/Legend and the System Statuses */}
      <Stack direction="row" spacing={2} alignItems="flex-start" mb={2}>
        {/* Left: Gauge and Legend */}
        <Stack direction="column" spacing={2} alignItems="center">
          {/* Gauge Section */}
          <Box sx={{ position: 'relative', width: 96, height: 96, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <GaugeContainer
              width={96}
              height={96}
              startAngle={-90}
              endAngle={270}
              value={totalPercentage}
              valueMin={0}
              valueMax={100}
              sx={{
                [`& .MuiGauge-referenceArc`]: {
                  fill: '#4B5563',
                },
                [`& .MuiGauge-valueArc`]: {
                  fill: '#4DAAFF',
                },
              }}
            >
              <GaugeReferenceArc />
              <GaugeValueArc />
            </GaugeContainer>
            <Box sx={{ position: 'absolute', textAlign: 'center' }}>
              <Typography sx={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', lineHeight: 1 }}>
                {totalAlarms}
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', color: 'white' }}>
                Total Alarms
              </Typography>
            </Box>
          </Box>

          {/* Legend Section */}
          <Stack spacing={1} sx={{ color: 'white' }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#FDD835' }} />
              <Typography sx={{ fontSize: '0.75rem', color: '#FDD835' }}>Warning</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4DAAFF' }} />
              <Typography sx={{ fontSize: '0.75rem', color: '#4DAAFF' }}>Minor</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#FFB84D' }} />
              <Typography sx={{ fontSize: '0.75rem', color: '#FFB84D' }}>Major</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#FF4D4D' }} />
              <Typography sx={{ fontSize: '0.75rem', color: '#FF4D4D' }}>Critical</Typography>
            </Stack>
          </Stack>
        </Stack>

        {/* Right: System Status Section */}
        <Stack spacing={1} sx={{ mt: 2 }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 'semibold', color: 'white' }}>TES System</Typography>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', lineHeight: 1.2 }}>
            {alarmsData["TES System"].total}
          </Typography>
          <Divider sx={{ bgcolor: '#4DAAFF', height: 2, width: '50%' }} />

          <Typography sx={{ fontSize: '1rem', fontWeight: 'semibold', color: 'white', mt: 2 }}>Power System</Typography>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', lineHeight: 1.2 }}>
            {alarmsData["Power System"].total}
          </Typography>
          <Divider sx={{ bgcolor: '#FF4D4D', height: 2, width: '50%' }} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default AlarmsWidget;