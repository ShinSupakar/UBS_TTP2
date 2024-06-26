import React from 'react';
import { Box, Typography, Avatar, Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TaskBarComponent from './components/TaskBarComponent';

const ProfilePage = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    gender: 'Male',
    jobRole: 'Software Engineer',
    department: 'Engineering',
    interests: 'Coding, Reading, Hiking',
    learningStyle: 'Visual',
    languagePreference: 'English'
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      {/* Taskbar */}
      <TaskBarComponent />

      <Paper sx={{ padding: '32px', marginTop: '80px', maxWidth: '600px', width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ width: 100, height: 100, marginBottom: '16px' }}>JD</Avatar>
          <Typography variant="h4" sx={{ color: '#e60000', fontWeight: 'bold', marginBottom: '16px' }}>
            {user.name}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Email:</Typography>
            <Typography>{user.email}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Age:</Typography>
            <Typography>{user.age}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Gender:</Typography>
            <Typography>{user.gender}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Job Role:</Typography>
            <Typography>{user.jobRole}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Department:</Typography>
            <Typography>{user.department}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Interests:</Typography>
            <Typography>{user.interests}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Learning Style:</Typography>
            <Typography>{user.learningStyle}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Language Preference:</Typography>
            <Typography>{user.languagePreference}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProfilePage;

