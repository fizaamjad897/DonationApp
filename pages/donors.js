// pages/donor.js
import { useState } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import FilterOptions from '../components/FilterOption';
import DonorList from '../components/DonorList';
import MakeDonationForm from '../components/MakeDonationForm';
import { styled } from '@mui/material/styles';

const PageContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const DonorPage = () => {
  const [filter, setFilter] = useState({ location: '', money: '' });
  const [showForm, setShowForm] = useState(false);

  const handleFilterChange = (newFilter) => setFilter(newFilter);
  const handleToggleForm = () => setShowForm(!showForm);

  return (
    <div style={{ flex: 1 }}>
      <PageContainer>
        <Typography variant="h4" gutterBottom>
          Donors
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FilterOptions onChange={handleFilterChange} />
            <Button variant="contained" color="primary" onClick={handleToggleForm}>
              {showForm ? 'Close Form' : 'Make Donation'}
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            {showForm && <MakeDonationForm />}
            <DonorList filter={filter} />
          </Grid>
        </Grid>
      </PageContainer>
    </div>
  );
};

export default DonorPage;
