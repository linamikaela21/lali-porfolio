import React from 'react';
import { Formik } from 'formik';
import { CustomForm } from '../share/CustomForm';
import { contactFormSchema } from '../share/CustomForm/schemaContactForm';

export const ContactForm = () => {
  const startValues = {
    fullName: '',
    email: '',
    message: '',
  };

  return (
    <Formik
      data-testid="test-id-formik"
      enableReinitialize
      initialValues={startValues}
      validationSchema={contactFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
      }}
      component={CustomForm}
    />
  );
};
