import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Formik } from 'formik';
import { CustomForm } from '../xShare/CustomForm';
import { contactFormSchema } from '../xShare/CustomForm/schemaContactForm';
import { CustomToast } from '../xShare/CustomToast';

export const ContactForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [info, setInfo] = useState({});

  const startValues = {
    fullName: '',
    email: '',
    message: '',
  };

  const SendEmail = (object) => {
    emailjs
      .send('service_25xshjx', 'template_nolomo5', object, 'JZZ4mA49WORELupVb')
      .then(
        (result) => {
          setShowToast(true);
          setInfo({
            result: result.text,
            title: 'Success',
            text: 'Your E-mail was send it',
          });
        },
        (error) => {
          setShowToast(true);
          setInfo({
            result: error,
            title: 'Error',
            text: 'Your E-mail was not send it. Plase try again',
          });
        }
      );
  };

  return (
    <>
      <Formik
        data-testid="test-id-formik"
        enableReinitialize
        initialValues={startValues}
        validationSchema={contactFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          SendEmail(values);
        }}
        component={CustomForm}
      />
      <CustomToast
        info={info}
        setShowToast={setShowToast}
        showToast={showToast}
      />
    </>
  );
};
