import React from 'react';
import { Container } from 'react-bootstrap';
import { CustomCarousel } from '../../components/xShare/CustomCarousel';

export const Projects = () => {
  return (
    <Container className="m-4">
      <h1 className="d-flex fw-bold text-secondary bg-light justify-content-center mb-5">
        MY PROJECTS
      </h1>
      <CustomCarousel />
    </Container>
  );
};
