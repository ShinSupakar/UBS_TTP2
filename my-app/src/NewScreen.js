import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TaskBarComponent from './components/TaskBarComponent';

const NewScreen = () => {
  const navigate = useNavigate();

  const handleQuizClick = () => {
    navigate('/quizpage');
  };

  const handleCustomContentClick = () => {
    navigate('/customcontent');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundImage: `url('https://assets-global.website-files.com/62722382edf1ccb5a513cf38/62da4a0c754c764331af4a15_Diversity-%26-inclusion-in-wor-space-hero-p-1080.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      {/* Taskbar */}
      <TaskBarComponent />
      {/* Main content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '16px', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: '4rem', color: 'white', mb: 2 }}>
          Our Mission
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: '600px', color: 'white', mb: 4 }}>
          Empowering every individual to embrace and practice true inclusion.
        </Typography>
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Link to="/quizpage" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#e60000', color: 'white', fontWeight: 'bold', padding: '10px 20px', textTransform: 'none' }}
              onClick={handleQuizClick}
            >
              Take a Quiz
            </Button>
          </Link>
          <Link to="/customcontent" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#e60000', color: 'white', fontWeight: 'bold', padding: '10px 20px', textTransform: 'none' }}
              onClick={handleCustomContentClick}
            >
              Already taken the quiz? View your Content
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default NewScreen;















