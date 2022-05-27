import React from 'react';
import { Container } from 'react-bootstrap';
import { CustomCarousel } from '../../components/share/CustomCarousel';

export const Projects = () => {
  return (
    <Container className="flex">
      <h1 className="d-flex justify-content-center">My Projects </h1>
      <CustomCarousel />
    </Container>
  );
};
