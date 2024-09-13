// components/DonorListItem.js
import { Card, CardContent, Typography, Button, FormControlLabel, Switch, Box } from '@mui/material';
import { useState } from 'react';

const DonorListItem = ({ donor }) => {
  const [active, setActive] = useState(donor.status === 'Active');

  const handleSwitchChange = () => {
    setActive(!active);
  };

  return (
    <Card sx={{ marginBottom: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontFamily: 'Arial, sans-serif' }}>
          {donor.username}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Arial, sans-serif', fontSize: '0.8rem' }} color="text.secondary">
          Contact: {donor.contact}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Arial, sans-serif', fontSize: '0.8rem' }} color="text.secondary">
          Need: {donor.need}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Arial, sans-serif', fontSize: '0.8rem' }} color="text.secondary">
          Location: {donor.location}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Arial, sans-serif', fontSize: '0.8rem' }} color="text.secondary">
          Amount: {donor.amount}
        </Typography>

        {/* Align the switch and button on the same line */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <FormControlLabel
            control={
              <Switch
                checked={active}
                onChange={handleSwitchChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label={active ? 'Active' : 'Inactive'}
            sx={{
              '& .MuiFormControlLabel-label': {
                fontFamily: 'Arial, sans-serif',
                fontSize: '0.875rem',
              },
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit Donation
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DonorListItem;
