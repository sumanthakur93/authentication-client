// src/components/RegistrationForm.js
import React from 'react';
import FormComponent from '../formComponent/FormComponent';
import { RegistrationSchema } from '../../validationSchemas/authSchema';
import { useDispatch } from 'react-redux';
import { userSingUp } from '../../reducer/authFeature/authSlices';
import { Link, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const initialValues = { username: '', email: '', password: '', confirmPassword: '' };
const fields = [
  { name: 'username', label: 'Enter Username' },
  { name: 'email', label: 'Enter Email' },
  { name: 'password', label: 'Enter Password', type: 'password' },
  { name: 'confirmPassword', label: 'Confirm Password', type: 'password' }
];

const RegistrationForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleSubmit = (values) => {
    const newValues = { ...values, navigate };
    dispatch(userSingUp(newValues));
  };

  const footer = (
    <Typography>
      Are you a existing User? <Link href="/login" sx={{ textDecoration: 'none' }}>Sign In</Link>
    </Typography>
  );


    return <FormComponent initialValues={initialValues} validationSchema={RegistrationSchema} fields={fields} buttonLabel="Register" footer = {footer} onSubmit={handleSubmit} />
};

export default RegistrationForm;
