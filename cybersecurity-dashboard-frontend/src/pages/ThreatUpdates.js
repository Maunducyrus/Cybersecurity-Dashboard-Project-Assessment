import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Paper,
  Chip,
  Grid,
  Divider,
  Button,
  Avatar,
  Stack,
  LinearProgress,
  Tooltip
} from '@mui/material';
import {
  Warning as WarningIcon,
  Error as ErrorIcon,
  CheckCircle as CheckCircleIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
  Timeline as TimelineIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';

const threatData = [
  {
    id: 1,
    message: 'Phishing attack detected in multiple regions',
    timestamp: '2025-04-10 09:24',
    severity: 'High',
    details: 'A widespread phishing campaign has been observed, targeting financial institutions with fake login pages. Immediate awareness training is recommended.',
    affected: 42,
    status: 'Active',
    recommendedAction: 'Deploy email filters and conduct employee training'
  },
  {
    id: 2,
    message: 'Ransomware campaign targeting healthcare',
    timestamp: '2025-04-12 14:35',
    severity: 'Medium',
    details: 'New variant of LockBit ransomware spreading through malicious PDF attachments. Ensure backups are current and systems are patched.',
    affected: 18,
    status: 'Contained',
    recommendedAction: 'Isolate affected systems and verify backups'
  },
  {
    id: 3,
    message: 'Suspicious login attempts from unknown IPs',
    timestamp: '2025-04-14 16:42',
    severity: 'Low',
    details: 'Multiple failed login attempts from IPs in unusual geolocations. No successful breaches detected.',
    affected: 7,
    status: 'Investigating',
    recommendedAction: 'Review access logs and enable MFA'
  },
];

const getSeverityColor = (level) => {
  switch (level) {
    case 'High': return 'error';
    case 'Medium': return 'warning';
    case 'Low': return 'success';
    default: return 'default';
  }
};

const getSeverityIcon = (level) => {
  switch (level) {
    case 'High': return <ErrorIcon />;
    case 'Medium': return <WarningIcon />;
    case 'Low': return <CheckCircleIcon />;
    default: return <NotificationsIcon />;
  }
};

const ThreatUpdates = () => {
  const [selectedThreat, setSelectedThreat] = useState(threatData[0]);

  return (
    <Box sx={{ 
      p: 4, 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e1e2f 0%, #2a2a3d 100%)',
      color: '#ffffff'
    }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar sx={{ bgcolor: 'error.main' }}>
            <SecurityIcon />
          </Avatar>
          <Typography variant="h4" component="h1">
            Threat Updates
          </Typography>
        </Stack>
        <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.7)', mt: 1 }}>
          Real-time security threat monitoring and analysis
        </Typography>
      </Box>

      {/* Stats Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, background: 'rgba(46, 46, 70, 0.5)' }}>
            <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.7)' }}>Active Threats</Typography>
            <Typography variant="h3" sx={{ mt: 1 }}>3</Typography>
            <LinearProgress 
              variant="determinate" 
              value={60} 
              color="error" 
              sx={{ height: 6, mt: 2, borderRadius: 3 }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, background: 'rgba(46, 46, 70, 0.5)' }}>
            <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.7)' }}>Affected Systems</Typography>
            <Typography variant="h3" sx={{ mt: 1 }}>67</Typography>
            <LinearProgress 
              variant="determinate" 
              value={35} 
              color="warning" 
              sx={{ height: 6, mt: 2, borderRadius: 3 }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, background: 'rgba(46, 46, 70, 0.5)' }}>
            <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.7)' }}>Resolved Today</Typography>
            <Typography variant="h3" sx={{ mt: 1 }}>12</Typography>
            <LinearProgress 
              variant="determinate" 
              value={80} 
              color="success" 
              sx={{ height: 6, mt: 2, borderRadius: 3 }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 3, background: 'rgba(46, 46, 70, 0.5)' }}>
            <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.7)' }}>Avg. Response Time</Typography>
            <Typography variant="h3" sx={{ mt: 1 }}>2.4h</Typography>
            <LinearProgress 
              variant="determinate" 
              value={65} 
              sx={{ height: 6, mt: 2, borderRadius: 3 }}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* Main Content */}
      <Grid container spacing={4}>
        {/* Threat List */}
        <Grid item xs={12} md={5}>
          <Paper sx={{ 
            p: 2, 
            background: 'rgba(46, 46, 70, 0.7)',
            borderRadius: 2,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
              <Typography variant="h6">
                <NotificationsIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Active Threat Alerts
              </Typography>
              <Chip label={`${threatData.length} Active`} color="error" size="small" />
            </Stack>
            
            <List sx={{ maxHeight: 500, overflow: 'auto' }}>
              {threatData.map((threat) => (
                <ListItem
                  key={threat.id}
                  button
                  selected={selectedThreat?.id === threat.id}
                  onClick={() => setSelectedThreat(threat)}
                  sx={{
                    mb: 1,
                    borderRadius: 1,
                    transition: 'all 0.2s',
                    '&:hover': { 
                      background: 'rgba(255,255,255,0.1)',
                      transform: 'translateX(4px)'
                    },
                    '&.Mui-selected': {
                      background: 'rgba(239, 83, 80, 0.2)',
                      borderLeft: '3px solid #ef5350'
                    }
                  }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: `${getSeverityColor(threat.severity)}.dark` }}>
                      {getSeverityIcon(threat.severity)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                          {threat.message}
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                          <Chip
                            label={threat.severity}
                            color={getSeverityColor(threat.severity)}
                            size="small"
                          />
                          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                            {threat.timestamp}
                          </Typography>
                        </Stack>
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Threat Details */}
        <Grid item xs={12} md={7}>
          {selectedThreat ? (
            <Paper sx={{ 
              p: 4, 
              background: 'rgba(46, 46, 70, 0.7)',
              borderRadius: 2,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              height: '100%'
            }}>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                <Avatar sx={{ 
                  bgcolor: `${getSeverityColor(selectedThreat.severity)}.dark`,
                  width: 56, 
                  height: 56 
                }}>
                  {getSeverityIcon(selectedThreat.severity)}
                </Avatar>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    {selectedThreat.message}
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                    <Chip
                      label={selectedThreat.severity}
                      color={getSeverityColor(selectedThreat.severity)}
                      icon={getSeverityIcon(selectedThreat.severity)}
                    />
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                      Detected: {selectedThreat.timestamp}
                    </Typography>
                  </Stack>
                </Box>
              </Stack>

              <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 3 }} />

              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ mb: 2, color: 'rgba(255,255,255,0.8)' }}>
                    <TimelineIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Threat Overview
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3 }}>
                    {selectedThreat.details}
                  </Typography>

                  <Typography variant="subtitle1" sx={{ mb: 2, color: 'rgba(255,255,255,0.8)' }}>
                    <SecurityIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Impact Analysis
                  </Typography>
                  <Stack spacing={2}>
                    <Box>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                        Affected Systems
                      </Typography>
                      <Typography variant="h6">
                        {selectedThreat.affected} systems
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                        Current Status
                      </Typography>
                      <Chip 
                        label={selectedThreat.status} 
                        color={
                          selectedThreat.status === 'Active' ? 'error' : 
                          selectedThreat.status === 'Contained' ? 'warning' : 'info'
                        }
                        sx={{ mt: 1 }}
                      />
                    </Box>
                  </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ mb: 2, color: 'rgba(255,255,255,0.8)' }}>
                    <WarningIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                    Recommended Actions
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3 }}>
                    {selectedThreat.recommendedAction}
                  </Typography>

                  <Box sx={{ 
                    p: 3, 
                    background: 'rgba(0,0,0,0.2)', 
                    borderRadius: 2,
                    borderLeft: '4px solid #26c6da'
                  }}>
                    <Typography variant="subtitle2" sx={{ color: '#26c6da', mb: 1 }}>
                      Incident Response Protocol
                    </Typography>
                    <List sx={{ listStyleType: 'disc', pl: 2 }}>
                      <ListItem sx={{ display: 'list-item', p: 0, color: 'rgba(255,255,255,0.7)' }}>
                        Isolate affected systems
                      </ListItem>
                      <ListItem sx={{ display: 'list-item', p: 0, color: 'rgba(255,255,255,0.7)' }}>
                        Preserve evidence for analysis
                      </ListItem>
                      <ListItem sx={{ display: 'list-item', p: 0, color: 'rgba(255,255,255,0.7)' }}>
                        Notify security team and management
                      </ListItem>
                      <ListItem sx={{ display: 'list-item', p: 0, color: 'rgba(255,255,255,0.7)' }}>
                        Initiate recovery procedures
                      </ListItem>
                    </List>
                  </Box>

                  <Button 
                    variant="contained" 
                    color="primary" 
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mt: 3 }}
                  >
                    Create Incident Report
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          ) : (
            <Paper sx={{ 
              p: 3, 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              background: 'rgba(46, 46, 70, 0.7)',
              borderRadius: 2
            }}>
              <NotificationsIcon sx={{ fontSize: 60, color: 'rgba(255,255,255,0.2)', mb: 2 }} />
              <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                Select a threat to view detailed analysis
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.3)', mt: 1 }}>
                Click on any threat from the list to see its impact and recommended actions
              </Typography>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThreatUpdates;