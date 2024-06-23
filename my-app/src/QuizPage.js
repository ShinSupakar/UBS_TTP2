import React, { useState } from 'react';
import { Box, Typography, Button, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import TaskBarComponent from './components/TaskBarComponent';

const QuizPage = () => {
  const questions = [
    {
      text: 'How often do you interact with people from different cultures?',
      options: ['Daily', 'Weekly', 'Monthly', 'Rarely'],
      name: 'question1'
    },
    {
      text: 'Do you find it easy to relate to people with different life experiences than your own?',
      options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
      name: 'question2'
    },
    {
      text: 'How often do you reflect on your own potential biases?',
      options: ['Often', 'Sometimes', 'Rarely', 'Never'],
      name: 'question3'
    },
    {
      text: 'Do you often seek out opinions from people who are different from you?',
      options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
      name: 'question4'
    },
    {
      text: 'How comfortable are you when you are in a group where most people are of a different race/ethnicity than you?',
      options: ['Very Comfortable', 'Comfortable', 'Neutral', 'Uncomfortable', 'Very Uncomfortable'],
      name: 'question5'
    },
    {
      text: 'How often do you think about the impact of your words on people from different backgrounds?',
      options: ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'],
      name: 'question6'
    },
    {
      text: 'When hiring, how important is it to you to consider candidates from diverse backgrounds?',
      options: ['Extremely Important', 'Very Important', 'Moderately Important', 'Slightly Important', 'Not Important'],
      name: 'question7'
    },
    {
      text: 'How frequently do you participate in activities that promote diversity and inclusion?',
      options: ['Frequently', 'Occasionally', 'Rarely', 'Never'],
      name: 'question8'
    },
    {
      text: 'Do you believe that everyone has an equal opportunity to succeed in your workplace/school/community?',
      options: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
      name: 'question9'
    },
    {
      text: 'How often do you educate yourself about cultures and experiences different from your own?',
      options: ['Very Often', 'Often', 'Sometimes', 'Rarely', 'Never'],
      name: 'question10'
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setAnswers({
      ...answers,
      [event.target.name]: event.target.value,
    });
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log('Quiz answers:', answers);
  };

  const handleCustomContent = () => {
    navigate('/customcontent');
  };

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
          flex: 1,
          padding: '16px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '600px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: '32px',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" sx={{ color: '#e60000', fontWeight: 'bold', marginBottom: '16px' }}>Uncover your Unconscious Biases</Typography>

          {currentQuestion < questions.length ? (
            <FormControl component="fieldset" sx={{ width: '100%' }}>
              <Typography variant="h6" sx={{ marginBottom: '16px' }}>{questions[currentQuestion].text}</Typography>
              <RadioGroup name={questions[currentQuestion].name} value={answers[questions[currentQuestion].name]} onChange={handleChange}>
                {questions[currentQuestion].options.map((option, index) => (
                  <FormControlLabel key={index} value={option.toLowerCase()} control={<Radio />} label={option} />
                ))}
              </RadioGroup>
              <Button variant="contained" sx={{ mt: 4, backgroundColor: '#888888' }} onClick={handleNext}>
                Next
              </Button>
            </FormControl>
          ) : (
            <Box>
              <Button variant="contained" sx={{ mt: 4, backgroundColor: '#e60000' }} onClick={handleSubmit}>
                Submit
              </Button>
              {isSubmitted && (
                <>
                  <Typography variant="h6" sx={{ mt: 2, color: 'green' }}>
                    Quiz submitted
                  </Typography>
                  <Link to="/customcontent" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" sx={{ mt: 4, backgroundColor: '#e60000' }} onClick={handleCustomContent}>
                      View Custom Content
                    </Button>
                  </Link>
                </>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default QuizPage;





