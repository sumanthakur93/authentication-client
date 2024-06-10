// src/components/LoginForm.js
import React from 'react';
import FormComponent from '../formComponent/FormComponent';
import { LoginSchema } from '../../validationSchemas/authSchema';
import { Link, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { userSingIn } from '../../reducer/authFeature/authSlices';
import { useNavigate } from 'react-router-dom';
// import { loginUser } from '../redux/actions'; // Example action

const initialValues = { username: '', email: '', password: '' };
const fields = [
  { name: 'username', label: 'Enter Username' },
  { name: 'email', label: 'Enter Email' },
  { name: 'password', label: 'Enter Password', type: 'password' }
];

const LoginForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state=>state.auth);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(userSingIn(values));

    if(user){
        navigate('/');
    }
  }; 

  const footer = (
    <Typography>
      Not an existing user? <Link href="/register" sx={{ textDecoration: 'none' }}>Create account</Link> <br />
      <Link href="/forget" sx={{ textDecoration: 'none' }}>Forget Password</Link>
    </Typography>
  );

  return <FormComponent initialValues={initialValues} validationSchema={LoginSchema} fields={fields} buttonLabel="Login" footer={footer} onSubmit={handleSubmit} />;
};

export default LoginForm;
