import React, { useState } from 'react';
import { Container, TextField, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
        />
        <Stack spacing={18} direction="row">
          <Link to="/signup">
            <Button
              type="submit"
              variant="text"
              color="primary"
              size="medium"
              style={{ backgroundColor: '#f44336', color: 'white', fontWeight: 'bold' }}
            >
              Sign Up
            </Button>
          </Link>
          <Button
            variant="text"
            color="secondary"
            size="medium"
            style={{ color: 'black', fontWeight: 'bold' }}
          >
            Already have an account? Log In
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default SignUpForm;

