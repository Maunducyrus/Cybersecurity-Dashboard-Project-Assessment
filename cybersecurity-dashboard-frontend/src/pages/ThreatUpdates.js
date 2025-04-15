import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const ThreatUpdates = () => {
  const updates = [
    { id: 1, message: 'Phishing attack detected in multiple regions.', timestamp: '2025-04-10' },
    { id: 2, message: 'Ransomware campaign targeting healthcare organizations.', timestamp: '2025-04-12' },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h2" gutterBottom>
        Threat Updates
      </Typography>
      <Paper sx={{ p: 2 }}>
        <List>
          {updates.map((update) => (
            <ListItem key={update.id}>
              <ListItemText
                primary={update.message}
                secondary={`Reported on: ${update.timestamp}`}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ThreatUpdates;