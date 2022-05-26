import React from 'react';
import { Form } from 'formik';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { CustomInput } from '../CustomInput';

export const CustomForm = ({
  values,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <Form
    onSubmit={handleSubmit}
    data-testid="test-id-formik-container"
    className="w-100"
  >
    <h2 className="d-flex justify-content-center">Contact with me</h2>
    <CustomInput
      handleInputChange={handleChange}
      type="text"
      placeholder="Full Name"
      name="fullName"
      onBlur={handleBlur}
      value={values.fullName}
      errors={errors.fullName}
      isRequired={true}
    />
    <CustomInput
      handleInputChange={handleChange}
      type="text"
      placeholder="E-mail"
      name="email"
      onBlur={handleBlur}
      value={values.email}
      errors={errors.email}
      isRequired={true}
    />
    <CustomInput
      handleInputChange={handleChange}
      type="textarea"
      placeholder="Your message"
      name="message"
      onBlur={handleBlur}
      value={values.message}
      errors={errors.message}
      isRequired={true}
      asText="textarea"
      rows={6}
    />
    <div className="d-flex justify-content-center m-4 w-100">
      <Button
        className="w-25"
        size="lg"
        type="submit"
        data-testid="test-id-formik-save"
        disabled={isSubmitting ? true : false}
      >
        Send
      </Button>
    </div>
  </Form>
);

CustomForm.propTypes = {
  values: PropTypes.object,
  errors: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleBlur: PropTypes.func,
};
