import { renderHook } from '@testing-library/react';
import { useForm } from './index';

describe('useForm', () => {
  const initialStateMockValue = {};
  const newValueMock = {
    name: 'test',
    age: 1,
    email: 'test@mail.com',
  };

  it('should have an initial state of {}', () => {
    const { result } = renderHook(useForm);
    expect(result.current[0]).toEqual(initialStateMockValue);
  });

  it('should change the state when passed data', () => {
    const { result } = renderHook(() => useForm(newValueMock));

    expect(result.current[0]).toBe(newValueMock);
  });
});
