import React from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import { BiSearchAlt } from 'react-icons/bi';

export const ViewSearchBar = ({
  userInput,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <div data-testid="view-search-bar">
      <Form className="d-flex w-100 p-3" onSubmit={handleSubmit}>
        <FormControl
          type="search"
          placeholder="Search"
          aria-label="Search"
          className="d-flex w-75 p-2 m-2"
          onChange={handleInputChange}
          value={userInput}
          name="userInput"
          data-testid="form-control"
        />
        <Button
          variant="outline-success w-25 m-2"
          data-testid="button-submit"
          type="submit"
        >
          <BiSearchAlt size={25} />
          Search
        </Button>
      </Form>
    </div>
  );
};
