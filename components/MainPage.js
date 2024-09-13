// components/MainPage.js
import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button, Box } from '@mui/material';
import MapComponent from './MapComponent';

export default function MainPage() {
  const [openDialog, setOpenDialog] = useState(false);
  const [userData, setUserData] = useState({ name: '', need: '', location: '' });
  const [location, setLocation] = useState(null);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleLocationSelect = (latlng) => {
    setLocation(latlng);
    setUserData({ ...userData, location: `${latlng.lat.toFixed(6)}, ${latlng.lng.toFixed(6)}` });
  };

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(userData);
    handleClose();
  };

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Open Dialog
      </Button>

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Donation Request</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
              onChange={handleInputChange}
              required
            />
            <TextField
              margin="dense"
              name="need"
              label="Need"
              type="text"
              fullWidth
              variant="outlined"
              onChange={handleInputChange}
              required
            />
            <TextField
              margin="dense"
              name="location"
              label="Location"
              type="text"
              fullWidth
              variant="outlined"
              value={userData.location}
              InputProps={{ readOnly: true }}
              required
            />
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <MapComponent onLocationSelect={handleLocationSelect} />
    </Box>
  );
}
