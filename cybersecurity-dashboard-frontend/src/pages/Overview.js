import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import {
  CalendarMonth,
  Notifications,
  Book,
  Group,
  ArrowUpward,
  ArrowDownward,
} from '@mui/icons-material';

// ===== COLOR PALETTE (EASILY MODIFY THESE) =====
const COLORS = {
  pageBackground: '#1e1e2f',       // Dark navy (main background)
  cardBackground: '#2a2a3d',       // Darker navy (cards)
  avatarBackground: '#42425a',     // Grayish-purple (list avatars)
  textPrimary: '#ffffff',          // White (main text)
  textSecondary: '#aaaaaa',        // Light gray (secondary text)
  success: '#4caf50',              // Green (positive metrics)
  warning: '#ff9800',              // Orange (medium alerts)
  error: '#ef5350',                // Red (negative metrics)
  info: '#26c6da',                 // Cyan (neutral metrics)
};

const Overview = () => {
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (_, newValue) => {
    setTab(newValue);
  };

  return (
    <Box sx={{ 
      backgroundColor: COLORS.pageBackground, 
      minHeight: '100vh', 
      p: 4, 
      color: COLORS.textPrimary 
    }}>
      <Typography variant="h4" gutterBottom>Dashboard Overview</Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: COLORS.textSecondary }}>
        Monitor your organization's cybersecurity metrics and updates
      </Typography>

      <Tabs 
        value={tab} 
        onChange={handleTabChange} 
        textColor="inherit" 
        indicatorColor="primary"
      >
        <Tab label="Weekly" />
        <Tab label="Monthly" />
        <Tab label="Yearly" />
      </Tabs>

      {/* Metrics */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {[
          {
            title: 'Employees',
            value: 24,
            icon: <Group />,
            growth: '+5%',
            trend: 'up',
            color: COLORS.success, // Green
            note: 'vs. last month',
          },
          {
            title: 'Subscription Status',
            value: 'Active',
            icon: <CalendarMonth />,
            color: COLORS.info, // Cyan
          },
          {
            title: 'Threat Updates',
            value: 12,
            icon: <Notifications />,
            growth: '-3%',
            trend: 'down',
            color: COLORS.error, // Red
            note: 'vs. last month',
          },
          {
            title: 'Educational Resources',
            value: 45,
            icon: <Book />,
            growth: '+10%',
            trend: 'up',
            color: COLORS.success, // Green
            note: 'vs. last month',
          },
        ].map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card sx={{ backgroundColor: COLORS.cardBackground, p: 2 }}>
              <CardContent>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="subtitle1">{item.title}</Typography>
                  <Avatar sx={{ bgcolor: item.color }}>{item.icon}</Avatar>
                </Box>
                <Typography variant="h4" sx={{ mt: 1 }}>
                  {item.value}
                </Typography>
                {item.growth && (
                  <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
                    {item.trend === 'up' ? (
                      <ArrowUpward sx={{ color: item.color, fontSize: 20, mr: 0.5 }} />
                    ) : (
                      <ArrowDownward sx={{ color: item.color, fontSize: 20, mr: 0.5 }} />
                    )}
                    <Typography sx={{ color: item.color }}>{item.growth} {item.note}</Typography>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recent Activities */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>Recent Activities</Typography>
        <Card sx={{ backgroundColor: COLORS.cardBackground, p: 2 }}>
          <List>
            {[
              {
                icon: <Notifications />,
                title: 'New Ransomware Alert',
                time: '2 hours ago',
              },
              {
                icon: <Book />,
                title: 'Phishing Prevention Guide Added',
                time: '1 day ago',
              },
              {
                icon: <Group />,
                title: 'New Employee Registered',
                time: '3 days ago',
              },
            ].map((activity, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: COLORS.avatarBackground }}>{activity.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary={activity.title} 
                  secondary={activity.time} 
                  secondaryTypographyProps={{ color: COLORS.textSecondary }}
                />
              </ListItem>
            ))}
          </List>
        </Card>
      </Box>
    </Box>
  );
};

export default Overview;