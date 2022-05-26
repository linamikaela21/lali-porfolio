import { Header } from '../index';
import { fireEvent, render, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import * as redux from 'react-redux';
import { dataReducer } from '../../../__test__/fixture/dataReducer';

const mockDispatch = jest.fn();
const mockSelector = dataReducer.cart;

describe('Header', () => {
  beforeEach(() => {
    jest.spyOn(redux, 'useDispatch').mockImplementation(() => mockDispatch);
    jest.spyOn(redux, 'useSelector').mockImplementation(() => mockSelector);
  });

  it('should render a Header', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const element = screen.getByTestId('test-id-header');
    expect(element).toBeInTheDocument();
  });

  it('should redirect to home', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const button = screen.getByTestId('test-id-link-home');
    fireEvent.click(button);

    expect(window.location.hash).toBe('#/');
  });

  it('should redirect to checkout', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const link = screen.getByTestId('test-id-link');
    fireEvent.click(link);
    expect(window.location.hash).toBe('#/checkout');
  });
});
