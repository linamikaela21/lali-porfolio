import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export const CustomInput = ({
  label,
  type,
  name,
  rows,
  value,
  asText,
  placeholder,
  handleInputChange,
  errors,
  onBlur,
  disabled,
  isRequired,
}) => {
  return (
    <Form.Group
      className="w-100 px-3"
      data-testid="test-id-form-group-container"
    >
      <Form.Label
        data-testid="test-id-form-label"
        className="d-flex justify-content-center p-2 fs-4 text-white"
      >
        {isRequired && (
          <span
            className="text-danger px-4"
            data-testid="test-id-label-with-asterisk"
          >
            {' *'}
          </span>
        )}
        {label}
      </Form.Label>
      <Form.Control
        className="text-white"
        style={{ backgroundColor: '#000' }}
        as={asText}
        rows={rows}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        name={name}
        value={value}
        onBlur={onBlur}
        data-testid="test-id-form-control"
        disabled={disabled}
      />
      {errors && (
        <Form.Text
          className="d-flex justify-content-center text-danger py-3 fs-5"
          data-testid="test-id-error-text"
        >
          {errors}
        </Form.Text>
      )}
    </Form.Group>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleInputChange: PropTypes.func,
  errors: PropTypes.string,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  isRquired: PropTypes.bool,
};
