import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SignUpPage from './SignUpPage';
import SignUpForm from './SignUpForm';
import NewScreen from './NewScreen';
import QuizPage from './QuizPage';
import CustomContentPage from './CustomContentPage';
import ProfilePage from './ProfilePage'; 
import ForumPage from './ForumPage'; 
import InclusiveResourcesPage from './InclusiveResourcesPage'; // Import the new page

const theme = createTheme({
  typography: {
    fontFamily: 'Helvetica Neue, serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/newscreen" element={<NewScreenLayout />} />
          <Route path="/quizpage" element={<QuizPage />} />
          <Route path="/customcontent" element={<CustomContentPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/inclusive-resources" element={<InclusiveResourcesPage />} /> {/* Add the new route */}
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

function DefaultLayout() {
  const location = useLocation();

  return (
    <Box sx={{ textAlign: 'center', mt: 2, width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
      <Box sx={{ width: '100%', maxWidth: 'md' }}>
        <Routes>
          <Route exact path="/" element={<SignUpForm />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Box>
    </Box>
  );
}

function NewScreenLayout() {
  return (
    <Box sx={{ width: '100%', height: '100vh', padding: 0 }}>
      <NewScreen />
    </Box>
  );
}

export default App;

