import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContactFrom } from '../index';

describe('Contact', () => {
  beforeEach(() => {
    render(<ContactFrom />);
  });

  it('should render a Formik container', () => {
    const formik = screen.getByTestId('test-id-formik-container');
    expect(formik).toBeInTheDocument();
  });
});
