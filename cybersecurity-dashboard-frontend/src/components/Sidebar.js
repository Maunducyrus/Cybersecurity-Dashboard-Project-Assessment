import React from 'react';
import { Link } from 'react-router-dom';
import { 
  List, 
  ListItem, 
  ListItemText, 
  Drawer, 
  Box, 
  Typography,
  Divider,
  ListItemIcon
} from '@mui/material';
import {
  Dashboard as OverviewIcon,
  Security as ThreatUpdatesIcon,
  School as EducationalResourcesIcon,
  People as EmployeeManagerIcon,
  Business as OrganizationIcon,
  Settings as SettingsIcon,
  ExitToApp as SignOutIcon
} from '@mui/icons-material';

const Sidebar = () => {
  const menuItems = [
    { text: 'Overview', path: '/overview', icon: <OverviewIcon />, active: false },
    { text: 'Threat Updates', path: '/threat-updates', icon: <ThreatUpdatesIcon />, active: false },
    { text: 'Educational Resources', path: '/resources', icon: <EducationalResourcesIcon />, active: false },
    { text: 'Employee Manager', path: '/employee-manager', icon: <EmployeeManagerIcon />, active: true },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          paddingTop: '20px',
          backgroundColor: '#f5f5f5',
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <Typography variant="h6" sx={{ 
          paddingLeft: '16px', 
          marginBottom: '20px',
          fontWeight: 'bold',
          color: '#1976d2'
        }}>
          ThreatlyEDU
        </Typography>
        
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              component={Link} 
              to={item.path} 
              key={item.text}
              selected={item.active}
              sx={{
                paddingLeft: '16px',
                '&.Mui-selected': {
                  backgroundColor: '#e3f2fd',
                  borderLeft: '4px solid #1976d2',
                },
                '&.Mui-selected:hover': {
                  backgroundColor: '#e3f2fd',
                }
              }}
            >
              <ListItemIcon sx={{ 
                minWidth: '36px',
                color: item.active ? '#1976d2' : 'inherit'
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: item.active ? '600' : '400',
                  color: item.active ? '#1976d2' : 'inherit'
                }}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ margin: '16px' }} />

        <Box sx={{ paddingLeft: '16px', marginBottom: '16px' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: '600', color: '#757575' }}>
            Organization User
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Tech Security Inc.
          </Typography>
        </Box>

        <List>
          <ListItem 
            button
            sx={{
              paddingLeft: '16px',
            }}
          >
            <ListItemIcon sx={{ minWidth: '36px', color: '#757575' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Settings" 
              primaryTypographyProps={{
                fontSize: '0.875rem',
                color: '#757575'
              }}
            />
          </ListItem>
          <ListItem 
            button
            sx={{
              paddingLeft: '16px',
            }}
          >
            <ListItemIcon sx={{ minWidth: '36px', color: '#757575' }}>
              <SignOutIcon />
            </ListItemIcon>
            <ListItemText 
              primary="Sign Out" 
              primaryTypographyProps={{
                fontSize: '0.875rem',
                color: '#757575'
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;