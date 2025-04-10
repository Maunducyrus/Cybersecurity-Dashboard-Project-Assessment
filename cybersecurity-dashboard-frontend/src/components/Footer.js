import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        textAlign: 'center',
        py: 2,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2025 Cybersecurity Dashboard. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;