import { List, Box, Button, Typography, Dialog, DialogTitle, DialogContent, TextField, DialogActions, IconButton, InputAdornment } from '@mui/material';
import { useState, useEffect } from 'react';
import RequestItem from './RequestItem';
import FilterDialog from './FilterDialog';
import WarningIcon from '@mui/icons-material/Warning';
import VerifiedIcon from '@mui/icons-material/Verified';
import SendIcon from '@mui/icons-material/Send';
// Mock data for demonstration
const mockRequests = [
  {
    username: 'Fiza Amjad',
    contact: '03234894774',
    need: 'Medical Supplies',
    location: 'Karachi',
    amount: '10000',
    status: 'Active',
    pdfUrl: '/path/to/pdf1.pdf',
  },
  // More data
];

const RequestList = () => {
  const [requests, setRequests] = useState(mockRequests);
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [makeRequestFormOpen, setMakeRequestFormOpen] = useState(false);
  const [filter, setFilter] = useState({ location: '', money: '' });

  const [username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [need, setNeed] = useState('');
  const [location, setLocation] = useState('');
  const [amount, setAmount] = useState('');
  const [cnic, setCnic] = useState('');
  const [gmail, setGmail] = useState('');

  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

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

  const handleMakeRequestClick = () => {
    setMakeRequestFormOpen(true);
  };

  const handleMakeRequestClose = () => {
    setMakeRequestFormOpen(false);
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{11}$/; // Assumes 11-digit phone number
    return phoneRegex.test(number);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex
    return emailRegex.test(email);
  };

  const handleOTPRequest = () => {
    if (validatePhoneNumber(contact)) {
      setPhoneError('');
      setIsPhoneVerified(true); // Simulate OTP request
      alert('OTP sent!');
    } else {
      setPhoneError('Invalid phone number');
    }
  };

  const handleEmailVerification = () => {
    if (validateEmail(gmail)) {
      setEmailError('');
      setIsEmailVerified(true); // Simulate Email verification
      alert('Verification link sent!');
    } else {
      setEmailError('Invalid email');
    }
  };

  const handleSubmit = () => {
    if (!validatePhoneNumber(contact)) {
      setPhoneError('Invalid phone number');
    } else {
      setPhoneError('');
    }

    if (!validateEmail(gmail)) {
      setEmailError('Invalid email');
    } else {
      setEmailError('');
    }

    if (!phoneError && !emailError) {
      // Proceed with form submission logic
      handleMakeRequestClose();
    }
  };

  const handleContactChange = (e) => {
    const value = e.target.value;
    setContact(value);
    if (validatePhoneNumber(value)) {
      setPhoneError('');
    }
  };

  const handleGmailChange = (e) => {
    const value = e.target.value;
    setGmail(value);
    if (validateEmail(value)) {
      setEmailError('');
    }
  };

  useEffect(() => {
    // Filter logic would go here. For now, we use mock data.
    setRequests(mockRequests.filter(req =>
      (filter.location ? req.location.includes(filter.location) : true) &&
      (filter.money ? req.amount.includes(filter.money) : true)
    ));
  }, [filter]);

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
        <Button variant="contained" color="primary" onClick={handleMakeRequestClick}>
          Make Request
        </Button>
        <Button variant="outlined" color="primary" onClick={handleFilterClick}>
          Filter Requests
        </Button>
      </Box>
      <FilterDialog 
        open={filterDialogOpen} 
        onClose={handleFilterDialogClose} 
        onApply={handleApplyFilter} 
      />
      <Dialog open={makeRequestFormOpen} onClose={handleMakeRequestClose}>
        <DialogTitle>Make a Request</DialogTitle>
        <DialogContent>
          <TextField 
            autoFocus 
            margin="dense" 
            label="Username" 
            type="text" 
            fullWidth 
            variant="outlined" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <TextField 
            margin="dense" 
            label="Contact" 
            type="text" 
            fullWidth 
            variant="outlined" 
            value={contact} 
            onChange={handleContactChange} 
            error={!!phoneError} 
            helperText={phoneError} 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {isPhoneVerified ? (
                    <VerifiedIcon color="success" />
                  ) : (
                    <IconButton onClick={handleOTPRequest}>
                      <SendIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
          <TextField 
            margin="dense" 
            label="Need" 
            type="text" 
            fullWidth 
            variant="outlined" 
            value={need} 
            onChange={(e) => setNeed(e.target.value)} 
          />
          <TextField 
            margin="dense" 
            label="Location" 
            type="text" 
            fullWidth 
            variant="outlined" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
          />
          <TextField 
            margin="dense" 
            label="Amount" 
            type="text" 
            fullWidth 
            variant="outlined" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
          <TextField 
            margin="dense" 
            label="CNIC" 
            type="text" 
            fullWidth 
            variant="outlined" 
            value={cnic} 
            onChange={(e) => setCnic(e.target.value)} 
          />
          <TextField 
            margin="dense" 
            label="Gmail" 
            type="text" 
            fullWidth 
            variant="outlined" 
            value={gmail} 
            onChange={handleGmailChange} 
            error={!!emailError} 
            helperText={emailError} 
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {isEmailVerified ? (
                    <VerifiedIcon color="success" />
                  ) : (
                    <IconButton onClick={handleEmailVerification}>
                      <SendIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleMakeRequestClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
      <List sx={{ marginTop: 2 }}>
        {requests.map((req, index) => (
          <RequestItem key={index} request={req} />
        ))}
      </List>
    </Box>
  );
};

export default RequestList;
