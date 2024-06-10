import React from 'react';
import LoginForm from '../components/Loginform/LoginForm';
import { Grid, Box, Typography } from '@mui/material';
import Loginlogo from '../assets/vecteezy_mobile-banking-modern-flat-concept-for-web-banner-design_5877701.jpg';

const Login = () => {
  return (
    <Grid container style={{ height: '100%' }}>
      <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box>
          <img src={Loginlogo} alt="Login Logo" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box style={{ marginLeft: '2rem', marginTop: '5rem' }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>
          <LoginForm />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
