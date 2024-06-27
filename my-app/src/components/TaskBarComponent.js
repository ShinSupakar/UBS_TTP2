import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Grid, Card, CardContent, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const TaskBarComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSettingsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: '100%', padding: '8px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', 'color': 'white' }}>The Diversity Forum</Typography>
      <Box>
        <Link to="/newscreen" style={{ textDecoration: 'none' }}>
          <Button sx={{ color: 'white', marginRight: '16px', textTransform: 'none' }}>Home</Button>
        </Link>
        <Link to="/profile" style={{ textDecoration: 'none' }}>
          <Button sx={{ color: 'white', marginRight: '16px', textTransform: 'none' }}>Profile</Button>
        </Link>
        <Link to="/inclusive-resources" style={{ textDecoration: 'none' }}>
          <Button sx={{ color: 'white', marginRight: '16px', textTransform: 'none' }}>Initiatives</Button>
        </Link>
        <Link to="/forum" style={{ textDecoration: 'none' }}>
          <Button sx={{ color: 'white', marginRight: '16px', textTransform: 'none' }}>Get Involved</Button>
        </Link>
        <Button
            sx={{ color: 'white', marginRight: '16px', textTransform: 'none' }}
            aria-controls="settings-menu"
            aria-haspopup="true"
            onClick={handleSettingsClick}
          >
            Settings
          </Button>
          <Menu
            id="settings-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleSettingsClose}
          >
            <MenuItem onClick={handleSettingsClose}>Account</MenuItem>
            <MenuItem onClick={handleSettingsClose}>Preferences</MenuItem>
            <MenuItem onClick={handleSettingsClose}>Log Out</MenuItem>
          </Menu>
      </Box>
    </Box>
  )
}

export default TaskBarComponent;