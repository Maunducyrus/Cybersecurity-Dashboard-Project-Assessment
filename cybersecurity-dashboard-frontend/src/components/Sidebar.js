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
  Checkbox,
  ListItemIcon
} from '@mui/material';

const Sidebar = () => {
  const menuItems = [
    { text: 'Overview', path: '/overview', active: false },
    { text: 'Threat Updates', path: '/threat-updates', active: false },
    { text: 'Educational Resources', path: '/resources', active: false },
    { text: 'Employee Manager', path: '/employee-manager', active: true },
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
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <Typography variant="h6" sx={{ paddingLeft: '16px', marginBottom: '20px' }}>
          ThreatlyEDU
        </Typography>
        
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              component={Link} 
              to={item.path} 
              key={item.text}
              sx={{
                paddingLeft: '8px',
                '&.Mui-selected': {
                  backgroundColor: 'transparent',
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: '36px' }}>
                <Checkbox
                  edge="start"
                  checked={item.active}
                  tabIndex={-1}
                  disableRipple
                  sx={{
                    padding: '6px',
                    color: '#1976d2',
                    '&.Mui-checked': {
                      color: '#1976d2',
                    },
                  }}
                />
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: item.active ? '600' : '400'
                }}
              />
            </ListItem>
          ))}
        </List>

        <Divider sx={{ margin: '16px 0' }} />

        <Box sx={{ paddingLeft: '16px', marginBottom: '16px' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: '600' }}>
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
              paddingLeft: '8px',
            }}
          >
            <ListItemIcon sx={{ minWidth: '36px' }}>
              <Checkbox
                edge="start"
                checked={false}
                tabIndex={-1}
                disableRipple
                sx={{
                  padding: '6px',
                  color: '#1976d2',
                }}
              />
            </ListItemIcon>
            <ListItemText 
              primary="Sign Out" 
              primaryTypographyProps={{
                fontSize: '0.875rem'
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;