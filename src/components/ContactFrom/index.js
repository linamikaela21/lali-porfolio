import React from 'react';
import { Formik } from 'formik';
import { CustomForm } from '../xShare/CustomForm';
import { contactFormSchema } from '../xShare/CustomForm/schemaContactForm';

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
