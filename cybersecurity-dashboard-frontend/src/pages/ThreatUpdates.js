import React from 'react';
import { Box, Typography } from '@mui/material';

const ThreatUpdates = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h2" gutterBottom>
        Threat Updates
      </Typography>
      <Typography variant="body1">Here are the latest cybersecurity threat updates.</Typography>
    </Box>
  );
};

export default ThreatUpdates;