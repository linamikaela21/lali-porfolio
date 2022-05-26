import { render, screen } from '@testing-library/react';
import { ViewSearchBar } from '../ViewSearchBar';
import * as redux from 'react-redux';

const mockDispatch = jest.fn();

describe('ViewSearchBar', () => {
  beforeAll(() => {
    jest.spyOn(redux, 'useDispatch').mockImplementation(() => mockDispatch);
  });

  it('should render ViewSearchBar component', () => {
    render(<ViewSearchBar />);

    const viewSearchBarComponent = screen.getByTestId('view-search-bar');
    expect(viewSearchBarComponent).toBeInTheDocument();
  });

  it('should render Search button', () => {
    render(<ViewSearchBar />);

    const buttonElement = screen.getByTestId('button-submit');
    expect(buttonElement).toBeInTheDocument();
  });

  it('search button should not be disabled', () => {
    render(<ViewSearchBar />);

    const buttonElement = screen.getByTestId('button-submit');
    expect(buttonElement).not.toBeDisabled();
  });

  it('should render FormControl ', () => {
    render(<ViewSearchBar />);

    const formControlElement = screen.getByTestId('form-control');
    expect(formControlElement).toBeInTheDocument();
  });
});
