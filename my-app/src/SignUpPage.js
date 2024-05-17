import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Checkbox, FormControlLabel, Button } from '@mui/material';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    ageGroup: '',
    genderIdentity: '',
    ethnicity: '',
    jobRole: '',
    department: '',
    interests: [],
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

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData(prevData => ({
        ...prevData,
        interests: [...prevData.interests, name]
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        interests: prevData.interests.filter(interest => interest !== name)
      }));
    }
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
    <Container maxWidth="md">
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Age Group"
          name="ageGroup"
          value={formData.ageGroup}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Gender Identity"
          name="genderIdentity"
          value={formData.genderIdentity}
          onChange={handleChange}
          margin="normal"
        />
        {/* Other input fields */}
        <FormControlLabel
          control={<Checkbox checked={formData.interests.includes('Diversity and Inclusion')} onChange={handleCheckboxChange} name="Diversity and Inclusion" />}
          label="Diversity and Inclusion"
        />
        {/* Other checkboxes */}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default SignUpPage;
