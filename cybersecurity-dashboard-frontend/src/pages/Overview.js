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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material';
import {
  CalendarMonth,
  Notifications,
  Book,
  Group,
  ArrowUpward,
  ArrowDownward,
} from '@mui/icons-material';

const COLORS = {
  pageBackground: '#2a2a3d',
  cardBackground: '#4e4e6a',
  avatarBackground: '#42425a',
  textPrimary: '#ffffff',
  textSecondary: '#aaaaaa',
  success: '#4caf50',
  warning: '#ff9800',
  error: '#ef5350',
  info: '#26c6da',
  tableBackground: '#3a3a4f',
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
      p: 2, 
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

      {/* Metrics - Horizontal Cards */}
      <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 3 }}>
        {[
          {
            title: 'Employees',
            value: 24,
            icon: <Group />,
            growth: '+5%',
            trend: 'up',
            color: COLORS.success,
            note: 'vs. last month',
          },
          {
            title: 'Subscription Status',
            value: 'Active',
            icon: <CalendarMonth />,
            color: COLORS.info,
          },
          {
            title: 'Threat Updates',
            value: 12,
            icon: <Notifications />,
            growth: '-3%',
            trend: 'down',
            color: COLORS.error,
            note: 'vs. last month',
          },
          {
            title: 'Educational Resources',
            value: 45,
            icon: <Book />,
            growth: '+10%',
            trend: 'up',
            color: COLORS.success,
            note: 'vs. last month',
          },
        ].map((item, index) => (
          <Card key={index} sx={{ 
            backgroundColor: COLORS.cardBackground, 
            p: 2,
            flex: 1,
            minWidth: '200px'
          }}>
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
        ))}
      </Box>

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

      {/* Subscription Information */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>Subscription Information</Typography>
        <TableContainer component={Card} sx={{ backgroundColor: COLORS.tableBackground }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell sx={{ color: COLORS.textPrimary }}>Next Payment</TableCell>
                <TableCell sx={{ color: COLORS.textPrimary }}>Subscription Plan</TableCell>
                <TableCell sx={{ color: COLORS.textPrimary }}>Renewal Status</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ color: COLORS.textSecondary }}>June 15, 2023</TableCell>
                <TableCell sx={{ color: COLORS.textSecondary }}>Enterprise</TableCell>
                <TableCell sx={{ color: COLORS.success }}>Auto-renewal enabled</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Overview;