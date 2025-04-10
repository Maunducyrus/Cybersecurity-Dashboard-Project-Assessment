import React from 'react';
import { Box, Typography } from '@mui/material';

const EmployeeManager = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h2" gutterBottom>
        Employee Manager
      </Typography>
      <Typography variant="body1">
        Manage employees in your organization. Add, edit, or remove employees as needed.
      </Typography>
    </Box>
  );
};

export default EmployeeManager;