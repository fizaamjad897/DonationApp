// pages/dashboard.js
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const AppBar = styled('header', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard - Disaster Donation App</title>
        <meta name="description" content="Dashboard for Disaster Donation App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ display: 'flex' }}>
        <Sidebar open={true} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            backgroundColor: '#f4f6f9',
            minHeight: '100vh',
          }}
        >
          <AppBar>
            <Typography variant="h4" component="h1" gutterBottom>
              Dashboard
            </Typography>
          </AppBar>
          <Container maxWidth="lg">
            {/* Your main dashboard content goes here */}
            <Typography variant="body1">Welcome to the Disaster Donation Dashboard</Typography>
          </Container>
        </Box>
      </Box>
    </>
  );
}
