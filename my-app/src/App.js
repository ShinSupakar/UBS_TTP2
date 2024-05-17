import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Typography, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import SignUpForm from './SignUpForm';

// Define a theme with custom font
const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica Neue, serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router> {/* Ensure that the App component is wrapped with the Router component */}
        <Container maxWidth="sm">
          <Box sx={{ textAlign: 'center', mt: 20 }}>
          <Typography variant="h3" component="h1" gutterBottom>
              User Sign-Up
            </Typography>
            <Routes>
              <Route exact path="/" element={<SignUpForm />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;


