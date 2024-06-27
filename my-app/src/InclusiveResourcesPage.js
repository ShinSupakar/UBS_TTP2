import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Grid, Card, CardContent, Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import TaskBarComponent from './components/TaskBarComponent';

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
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Taskbar */}
      <TaskBarComponent />

      <Box sx={{ padding: '80px 16px 16px 16px', }}>
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




