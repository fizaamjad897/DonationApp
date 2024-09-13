import { List, Box, Button, Typography, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import DonorListItem from './DonorListItem';
import FilterDialog from './FilterDialog';
import { useEffect, useState } from 'react';

// Mock data for demonstration
const mockDonors = [
  {
    username: 'John Doe',
    contact: '123-456-7890',
    need: 'Medical Supplies',
    location: 'Karachi',
    amount: '10000',
    status: 'Active',
  },
  // Add more mock data as needed
];

const DonorList = () => {
  const [donors, setDonors] = useState(mockDonors);
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [makeDonationFormOpen, setMakeDonationFormOpen] = useState(false);
  const [filter, setFilter] = useState({ location: '', money: '' });

  const handleFilterClick = () => {
    setFilterDialogOpen(true);
  };

  const handleFilterDialogClose = () => {
    setFilterDialogOpen(false);
  };

  const handleApplyFilter = (filter) => {
    setFilter(filter);
    setFilterDialogOpen(false);
  };

  const handleMakeDonationClick = () => {
    setMakeDonationFormOpen(true);
  };

  const handleMakeDonationClose = () => {
    setMakeDonationFormOpen(false);
  };

  useEffect(() => {
    // Filter logic would go here. For now, we use mock data.
    setDonors(mockDonors.filter(donor => 
      (filter.location ? donor.location.includes(filter.location) : true) &&
      (filter.money ? donor.amount.includes(filter.money) : true)
    ));
  }, [filter]);

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Button variant="contained" color="primary" onClick={handleMakeDonationClick}>
          Make Donation
        </Button>
        <Button variant="outlined" color="primary" onClick={handleFilterClick}>
          Filter Donors
        </Button>
      </Box>
      <FilterDialog 
        open={filterDialogOpen} 
        onClose={handleFilterDialogClose} 
        onApply={handleApplyFilter} 
      />
      <Dialog open={makeDonationFormOpen} onClose={handleMakeDonationClose}>
        <DialogTitle>Make a Donation</DialogTitle>
        <DialogContent>
          <TextField 
            autoFocus 
            margin="dense" 
            label="Username" 
            type="text" 
            fullWidth 
            variant="outlined" 
          />
          <TextField 
            margin="dense" 
            label="Contact" 
            type="text" 
            fullWidth 
            variant="outlined" 
          />
          <TextField 
            margin="dense" 
            label="Need" 
            type="text" 
            fullWidth 
            variant="outlined" 
          />
          <TextField 
            margin="dense" 
            label="Location" 
            type="text" 
            fullWidth 
            variant="outlined" 
          />
          <TextField 
            margin="dense" 
            label="Amount" 
            type="text" 
            fullWidth 
            variant="outlined" 
          />
          <TextField 
            margin="dense" 
            label="Card Number" 
            type="text" 
            fullWidth 
            variant="outlined" 
          />
          <TextField 
            margin="dense" 
            label="Card Type" 
            type="text" 
            fullWidth 
            variant="outlined" 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleMakeDonationClose}>Cancel</Button>
          <Button onClick={() => {
            // Handle form submission logic here
            handleMakeDonationClose();
          }}>Submit</Button>
        </DialogActions>
      </Dialog>
      <List sx={{ marginTop: 2 }}>
        {donors.map((donor, index) => (
          <DonorListItem key={index} donor={donor} />
        ))}
      </List>
    </Box>
  );
};

export default DonorList;
