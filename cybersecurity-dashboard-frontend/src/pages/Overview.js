import React from 'react';
import { Box, Typography } from '@mui/material';

const Overview = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h2" gutterBottom>
        Overview
      </Typography>
      <Typography variant="body1">
        Welcome to the Cybersecurity Dashboard! Here you can monitor organizational metrics, threat updates, and more.
      </Typography>
    </Box>
  );
};

export default Overview;