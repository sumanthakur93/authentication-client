import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import ForgotPasswordForm from '../components/ForgetPasswordForm/ForgetForm'
import Loginlogo from '../assets/vecteezy_forgot-password-and-username-concept-businessman-confused_27957007.jpg';

const ForgotPassword = () => {
  return (
    <Grid container style={{ height: '100%', marginTop:'1rem' }}>
      <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box>
          <img src={Loginlogo} alt="Login Logo" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box style={{ marginLeft: '2rem', marginTop: '5rem' }}>
          <Typography variant="h4" gutterBottom>
            Forget Password
          </Typography>
          <ForgotPasswordForm/>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ForgotPassword