// src/components/FormComponent.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, Box } from '@mui/material';
import CustomInput from '../inputCustom/InputCustom';
import PropTypes from 'prop-types';

const FormComponent = ({ initialValues, validationSchema, fields, buttonLabel, footer, onSubmit }) => (
    
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      onSubmit(values);
    }}
  >
    {() => (
      <Form>
        {fields.map((field) => (
          <Box marginBottom={2} key={field.name} width={'80%'}>
            <Field name={field.name} label={field.label} type={field.type || 'text'} component={CustomInput} />
          </Box>
        ))}
        <div style={{display:'flex', justifyContent:'center', width:'80%'}}> 
        <Button type="submit" variant="contained" color="primary">
          {buttonLabel} 
        </Button>
        </div>

        {footer && (
          <Box mt={2} display="flex" justifyContent="center" width={'80%'}>
            {footer}
          </Box>
        )}
      </Form>
    )}
  </Formik>
);

FormComponent.propTypes = {
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string
    })
  ).isRequired,
  buttonLabel: PropTypes.string.isRequired,
  footer: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
};

export default FormComponent;
