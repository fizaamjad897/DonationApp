// components/MakeRequestForm.js
import { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const MakeRequestForm = () => {
  const [username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [need, setNeed] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ username, contact, need, location });
  };

  return (
    <Box mb={2}>
      <Typography variant="h6" gutterBottom>
        Make a Request
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Contact Number"
          variant="outlined"
          fullWidth
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Need"
          variant="outlined"
          fullWidth
          value={need}
          onChange={(e) => setNeed(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit Request
        </Button>
      </form>
    </Box>
  );
};

export default MakeRequestForm;
