// CustomContentPage.js
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TaskBarComponent from './components/TaskBarComponent';

const CustomContentPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Taskbar */}
      <TaskBarComponent />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          flex: 1,
        }}
      >
        <Typography variant="h4" sx={{ color: '#e60000', fontWeight: 'bold', marginBottom: '24px', marginTop: '16px' }}>
          A Journey of D&I
         </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[...Array(6)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://via.placeholder.com/345x140?text=Content+${index + 1}`}
                  alt={`Content ${index + 1}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Content {index + 1}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description for content {index + 1}. This is where you can provide a brief summary of the content.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CustomContentPage;




