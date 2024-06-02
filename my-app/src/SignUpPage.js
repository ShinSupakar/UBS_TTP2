import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    ageGroup: '',
    genderIdentity: '',
    ethnicity: '',
    jobRole: '',
    department: '',
    interests: '',
    learningStyle: '',
    languagePreference: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/users', formData);
      // Redirect or display success message
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ padding: '16px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h4" sx={{ color: '#e60000', fontWeight: 'bold', marginBottom: '16px' }}>Complete Your Profile</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel>Age Group</InputLabel>
          <Select
            label="Age Group"
            name="ageGroup"
            value={formData.ageGroup}
            onChange={handleChange}
          >
            <MenuItem value="20-30">20-30</MenuItem>
            <MenuItem value="30-40">30-40</MenuItem>
            <MenuItem value="40-50">40-50</MenuItem>
            <MenuItem value="50-60">50-60</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Gender Identity"
          name="genderIdentity"
          value={formData.genderIdentity}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Ethnicity"
          name="ethnicity"
          value={formData.ethnicity}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Job Role"
          name="jobRole"
          value={formData.jobRole}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Interests"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Learning Style"
          name="learningStyle"
          value={formData.learningStyle}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Language Preference"
          name="languagePreference"
          value={formData.languagePreference}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        
        {/* Add additional fields as needed */}
        <Box sx={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/newscreen" style={{ textDecoration: 'none' }}>
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#e60000', color: 'white', fontWeight: 'bold' }}>
              Submit
            </Button>
          </Link>
        </Box>
      </form>
    </Container>
  );
};

export default SignUpPage;
