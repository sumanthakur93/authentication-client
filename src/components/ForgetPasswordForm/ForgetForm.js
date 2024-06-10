// src/components/ForgotPasswordForm.js
import React from 'react';
import FormComponent from '../formComponent/FormComponent';
import { ForgotPasswordSchema } from '../../validationSchemas/authSchema';
import { useDispatch } from 'react-redux';
import { forgetPassword } from '../../reducer/authFeature/authSlices';
import { Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const initialValues = { email: '', password:'', confirmPassword:'' };
const fields = [
  { name: 'email', label: 'Enter Email' },
  { name:'password', label:'New Passowrd', type: 'password'},
  { name:'confirmPassword', label:'Confirm Password', type: 'password'}
];

const ForgotPasswordForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleSubmit = (values) => {

    const valuesWithNavigate = { ...values, navigate };
    dispatch(forgetPassword(valuesWithNavigate));
  };

  const footer = (
    <Typography>
         <Link href="/login" sx={{ textDecoration: 'none'}}>Go To Sign In</Link>
    </Typography>
  );


    return <FormComponent initialValues={initialValues} validationSchema={ForgotPasswordSchema} fields={fields} buttonLabel="Submit" footer = {footer} onSubmit={handleSubmit} />;
}

export default ForgotPasswordForm;
