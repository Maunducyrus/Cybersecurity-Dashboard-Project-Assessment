import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Chip,
  Grid,
  Divider
} from '@mui/material';

const threatData = [
  {
    id: 1,
    message: 'Phishing attack detected in multiple regions.',
    timestamp: '2025-04-10',
    severity: 'High',
    details:
      'A widespread phishing campaign has been observed, targeting financial institutions and users with fake login pages. Immediate awareness training is recommended.',
  },
  {
    id: 2,
    message: 'Ransomware campaign targeting healthcare organizations.',
    timestamp: '2025-04-12',
    severity: 'Medium',
    details:
      'Ransomware is being spread through malicious email attachments. Ensure backups are current and systems are patched.',
  },
  {
    id: 3,
    message: 'Suspicious login attempts detected from unknown IPs.',
    timestamp: '2025-04-14',
    severity: 'Low',
    details:
      'Several login attempts were made from IPs not associated with known users. Review access logs and enable MFA.',
  },
];

const getSeverityColor = (level) => {
  switch (level) {
    case 'High':
      return 'error';
    case 'Medium':
      return 'warning';
    case 'Low':
      return 'success';
    default:
      return 'default';
  }
};

const ThreatUpdates = () => {
  const [selectedThreat, setSelectedThreat] = useState(null);

  return (
    <Box sx={{ p: 3, backgroundColor: '#1e1e2f', minHeight: '100vh', color: '#fff' }}>
      <Typography variant="h4" gutterBottom>
        Threat Updates
      </Typography>

      <Grid container spacing={3}>
        {/* Threat List */}
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 2, backgroundColor: '#2a2a3d', color: '#fff' }}>
            <Typography variant="h6" gutterBottom>
              All Threats
            </Typography>
            <List>
              {threatData.map((threat) => (
                <ListItem
                  button
                  key={threat.id}
                  onClick={() => setSelectedThreat(threat)}
                  sx={{
                    borderBottom: '1px solid #444',
                    '&:hover': { backgroundColor: '#333' },
                  }}
                >
                  <ListItemText
                    primary={
                      <Box display="flex" alignItems="center" justifyContent="space-between">
                        <span>{threat.message}</span>
                        <Chip
                          label={threat.severity}
                          color={getSeverityColor(threat.severity)}
                          size="small"
                        />
                      </Box>
                    }
                    secondary={`Reported on: ${threat.timestamp}`}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Threat Details */}
        <Grid item xs={12} md={7}>
          {selectedThreat ? (
            <Paper sx={{ p: 3, backgroundColor: '#2a2a3d', color: '#fff' }}>
              <Typography variant="h6" gutterBottom>
                Threat Details
              </Typography>
              <Divider sx={{ mb: 2, borderColor: '#444' }} />
              <Typography variant="subtitle1" gutterBottom>
                <strong>Message:</strong> {selectedThreat.message}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                <strong>Severity:</strong>{' '}
                <Chip
                  label={selectedThreat.severity}
                  color={getSeverityColor(selectedThreat.severity)}
                  size="small"
                />
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                {selectedThreat.details}
              </Typography>
              <Typography variant="caption" display="block" sx={{ mt: 2, color: '#aaa' }}>
                Reported on: {selectedThreat.timestamp}
              </Typography>
            </Paper>
          ) : (
            <Paper
              sx={{
                p: 3,
                backgroundColor: '#2a2a3d',
                color: '#888',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Typography>Select a threat to view details</Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThreatUpdates;
