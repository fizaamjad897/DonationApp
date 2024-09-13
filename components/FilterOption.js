// components/FilterOptions.js
import { Box, TextField, Button } from '@mui/material';
import { useState } from 'react';

const FilterOptions = ({ onChange }) => {
  const [location, setLocation] = useState('');
  const [money, setMoney] = useState('');

  const handleApplyFilter = () => {
    onChange({ location, money });
  };

  return (
    <Box mb={2}>
      <TextField
        label="Location"
        variant="outlined"
        fullWidth
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Money"
        variant="outlined"
        fullWidth
        value={money}
        onChange={(e) => setMoney(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleApplyFilter}>
        Apply Filter
      </Button>
    </Box>
  );
};

export default FilterOptions;
