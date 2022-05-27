import React from 'react';
import { Button } from 'react-bootstrap';
import CV from '../../assets/cv/CV_Lina_Gutierrez_Arribas.pdf';

export const Home = () => {
  return (
    <div className="flex">
      Home
      <Button variant="outline-danger">
        <a href={CV} download="CV_Lina_Gutierrez_Arribas">
          Download CV
        </a>
      </Button>
    </div>
  );
};
