import React from 'react';
import { ViewSearchBar } from './ViewSearchBar';
import { useForm } from '../../hooks/useForm/index';
//import { useDispatch } from 'react-redux';

export const SearchBar = () => {
  //const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({
    userInput: '',
  });
  const { userInput } = values;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(searchProducts(userInput));
  // };

  return (
    <div data-testid="searchBarComponent" className="w-50">
      <ViewSearchBar
        userInput={userInput}
        //handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};
