import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Stack, Typography, Box, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add code to handle form submission (e.g., send data to backend)
    try {
      await axios.post(
        "http://localhost:8443/api/signup",
        formData,
        { headers: { 'Content-Type': 'application/json'}}
      )
      navigate("/signup")
    }
    catch (error) {
      alert(error.response.data['error'])
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log('Form Data:', formData);  // Check if form data is correct
  //   try {
  //     const response = await axios.post('/api/users', formData);  // Use relative URL
  //     console.log('User created:', response.data);
  //     alert('User created successfully');
  //     // Redirect or display success message
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('Failed to create user');
  //   }
  // };

  return (
    <Container maxWidth="lg" sx={{ padding: '16px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {/* Image Section */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            component="img"
            src="https://i.insider.com/62f2b5575b790400198ab02c?width=1300&format=jpeg&auto=webpg"
            alt="Sign Up Illustration"
            sx={{ width: '100%', maxWidth: '400px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          />
        </Grid>
        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ color: '#e60000', fontWeight: 'bold', marginBottom: '16px' }}>Sign Up</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            <Stack spacing={2} direction="row" justifyContent="space-between" sx={{ marginTop: '16px' }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: '#e60000', color: 'white', fontWeight: 'bold' }}
                onSubmit={handleSubmit}
              >
                Sign Up
              </Button>
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <Button
                  variant="text"
                  sx={{ color: '#333', fontWeight: 'bold' }}
                >
                  Already have an account? Log In
                </Button>
              </Link>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpForm;

