import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFolderFill, BsHouseDoorFill } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import { IoLogoOctocat } from 'react-icons/io';

export const Header = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="mb-5"
      data-testid="test-id-header"
    >
      <Container fluid className="d-flex justify-content-between mx-5">
        <Navbar.Brand className="fw-bolder d-block justify-content-between">
          <div className="d-flex justify-content-between px-5 align-items-center">
            <IoLogoOctocat size={45} />
            <h4 className="mt-2 p-3 px-3">Lali Porfolio</h4>
          </div>
        </Navbar.Brand>
        <div className="fw-bolder fs-3 d-flex justify-content-evenly w-50">
          <Link
            to="/home"
            className="text-decoration-none text-dark"
            data-testid="test-id-link"
          >
            <BsHouseDoorFill size={40} className="mb-3" />
          </Link>
          <Link
            to="/projects"
            className="text-decoration-none text-dark"
            data-testid="test-id-link"
          >
            <BsFolderFill size={40} className="mb-3" />
          </Link>
          <Link
            to="/contact"
            className="text-decoration-none text-dark"
            data-testid="test-id-link"
          >
            <BiMessageDetail size={40} className="mb-3" />
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};
