import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Grid, Card, CardContent, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const genderDictionary = [
  { term: 'Cisgender', definition: 'A person whose gender identity matches their sex assigned at birth.' },
  { term: 'Transgender', definition: 'A person whose gender identity differs from their sex assigned at birth.' },
  { term: 'Non-binary', definition: 'A person who does not identify exclusively as a man or a woman.' },
  // Add more terms and definitions as needed
];

const culturalAwarenessDays = [
  { date: 'March 8', event: 'International Women’s Day' },
  { date: 'June 19', event: 'Juneteenth' },
  { date: 'October 11', event: 'National Coming Out Day' },
  // Add more dates and events as needed
];

const inclusiveWorkshops = [
  { title: 'Understanding Gender Pronouns', description: 'Learn the importance of gender pronouns and how to use them correctly.' },
  { title: 'Creating Inclusive Workplaces', description: 'Strategies and best practices for fostering an inclusive environment.' },
  { title: 'Addressing Microaggressions', description: 'Identify and respond to microaggressions in a constructive manner.' },
  // Add more workshops as needed
];

const InclusiveResourcesPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSettingsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ padding: '16px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Taskbar */}
      <Box 
        sx={{ 
          width: '100%', 
          padding: '8px 16px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          position: 'fixed',
          top: 0,
          left: 0,  // Ensure the taskbar starts from the left edge
          right: 0,  // Ensure the taskbar extends to the right edge
          zIndex: 1000,
          margin: 0, // Remove any default margin
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>The Diversity Forum</Typography>
        <Box>
          <Link to="/newscreen" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white', marginRight: '16px', textTransform: 'none' }}>Home</Button>
          </Link>
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: 'white', marginRight: '16px', textTransform: 'none' }}>Profile</Button>
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

      <Box sx={{ paddingTop: '80px' }}>
        {/* Gender Dictionary */}
        <Paper sx={{ padding: '16px', marginBottom: '16px' }}>
          <Typography variant="h4" sx={{ color: '#e60000', fontWeight: 'bold', marginBottom: '16px' }}>Gender Dictionary</Typography>
          <List>
            {genderDictionary.map((entry, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={<Typography variant="h6" sx={{ fontWeight: 'bold' }}>{entry.term}</Typography>}
                  secondary={entry.definition}
                />
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Cultural Awareness Days Calendar */}
        <Paper sx={{ padding: '16px', marginBottom: '16px' }}>
          <Typography variant="h4" sx={{ color: '#e60000', fontWeight: 'bold', marginBottom: '16px' }}>Cultural Awareness Days</Typography>
          <Grid container spacing={2}>
            {culturalAwarenessDays.map((day, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{day.date}</Typography>
                    <Typography>{day.event}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Inclusive Language Workshops */}
        <Paper sx={{ padding: '16px' }}>
          <Typography variant="h4" sx={{ color: '#e60000', fontWeight: 'bold', marginBottom: '16px' }}>Inclusive Language Workshops</Typography>
          <Grid container spacing={2}>
            {inclusiveWorkshops.map((workshop, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{workshop.title}</Typography>
                    <Typography>{workshop.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default InclusiveResourcesPage;




