import React from 'react'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import { Box, Grid, Typography } from '@mui/material'
import signInlogo from '../assets/online_registration_form_and_Sign_in_button_generated.jpg';

const Register = () => {
  return (
    <Grid container style={{ height: '100%' }}>
      <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box>
          <img src={signInlogo} alt="Login Logo" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} >
        <Box style={{ marginLeft: '2rem', marginTop: '2rem'}}>
          <Typography variant="h4" gutterBottom>
            Sign Up
          </Typography>
         <RegistrationForm/>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Register