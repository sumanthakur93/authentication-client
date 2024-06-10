// src/components/CustomInput.js
import React from 'react';
import { TextField, InputLabel, Box } from '@mui/material';

const CustomInput = ({ field, form, label, ...props }) => {
  const { name } = field;
  const { errors, touched } = form;
  const errorText = touched[name] && errors[name];

  return (
    <Box mb={2}>
      <InputLabel shrink htmlFor={name} style={{ marginBottom: '5px', fontWeight:'800', fontSize:'24px'  }}>
        {label}
      </InputLabel>
      <TextField
        {...field}
        {...props}
        id={name}
        error={!!errorText}
        helperText={errorText}
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export default CustomInput;
