import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Image } from 'react-bootstrap';
import { BsFolderFill, BsHouseDoorFill } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';

export const Header = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      className="mb-5"
      data-testid="test-id-header"
      collapseOnSelect
    >
      <Container fluid>
        <Navbar.Brand className="fw-bolder justify-content-start">
          <div className="d-flex justify-content-between px-5 align-items-center">
            <Image src={require('../../assets/images/lmk.jpeg')} width={50} />
            <h4 className="mt-2 p-3 px-3">Lali Portfolio</h4>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto d-flex w-100 justify-content-around">
            <div className="d-flex justify-content-between">
              <Nav.Link className="px-5">
                <Link to="/" className="text-decoration-none text-black">
                  <BsHouseDoorFill size={40} className="mx-2" />
                  <span className="mx-2">Home</span>
                </Link>
              </Nav.Link>
              <Nav.Link className="px-5">
                <Link
                  to="/projects"
                  className="text-decoration-none text-black"
                >
                  <BsFolderFill size={40} className="mx-2" />
                  <span>Projects</span>
                </Link>
              </Nav.Link>
              <Nav.Link className="px-5">
                <Link to="/contact" className="text-decoration-none text-black">
                  <BiMessageDetail size={40} className="mx-2" />
                  <span>Contact</span>
                </Link>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
