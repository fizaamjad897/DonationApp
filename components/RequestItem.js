import { Card, CardContent, Typography, IconButton, Switch,FormControlLabel,CardActions,Button,Box} from '@mui/material';
import { Check, Close } from '@mui/icons-material';
import { useState } from 'react';
const RequestItem = ({ request }) => {
    const [active, setActive] = useState(request.status === 'Active');

  const handleSwitchChange = () => {
    setActive(!active);
  };

  return (
    <Card sx={{ marginBottom: 3, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontFamily: 'Arial, sans-serif' }}>{request.username}</Typography>
        <Typography variant="body2" sx={{ fontFamily:'Arial, sans-serif', fontSize:'0.8rem' }}color="text.secondary">
          Contact: {request.contact}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily:'Arial, sans-serif', fontSize:'0.8rem' }} color="text.secondary">
          Need: {request.need}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily:'Arial, sans-serif', fontSize:'0.8rem' }}color="text.secondary">
          Location: {request.location}
        </Typography>
        <Typography variant="body2"sx={{ fontFamily:'Arial, sans-serif', fontSize:'0.8rem' }} color="text.secondary">
          Amount: {request.amount}
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
            Donate to Request
          </Button>
        </Box>
     </CardContent>
          </Card>
  );
};

export default RequestItem;
