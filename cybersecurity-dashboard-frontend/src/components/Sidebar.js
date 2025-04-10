import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Drawer, Box } from '@mui/material';

const Sidebar = () => {
  const menuItems = [
    { text: 'Overview', path: '/overview' },
    { text: 'Threat Updates', path: '/threat-updates' },
    { text: 'Educational Resources', path: '/resources' },
    { text: 'Employee Manager', path: '/employee-manager' },
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
        },
      }}
    >
      <Box sx={{ overflow: 'auto', mt: 10 }}>
        <List>
          {menuItems.map((item) => (
            <ListItem button component={Link} to={item.path} key={item.text}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;