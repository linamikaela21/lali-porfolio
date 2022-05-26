import { render, renderHook, screen } from '@testing-library/react';
import { SearchBar } from '../index';
import { useForm } from '../../../hooks/useForm/index';
import * as redux from 'react-redux';

const mockDispatch = jest.fn();

describe('SearchBar', () => {
  const mockValue = {
    emptyInput: '',
    inputWithData: 'shoes',
  };

  const { emptyInput, inputWithData } = mockValue;

  beforeAll(() => {
    jest.spyOn(redux, 'useDispatch').mockImplementation(() => mockDispatch);
  });

  it('should render SearchBar component', () => {
    render(<SearchBar />);
    const searchBarComponent = screen.getByTestId(/searchBarComponent/i);
    expect(searchBarComponent).toBeInTheDocument();
  });

  it('input should have a empty value as initial state', () => {
    const { result } = renderHook(() => useForm(emptyInput));
    expect(result.current[0]).toBe(emptyInput);
  });

  it('input should have a value', () => {
    const { result } = renderHook(() => useForm(inputWithData));
    expect(result.current[0]).toBe(inputWithData);
  });
});
