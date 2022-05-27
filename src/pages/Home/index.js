import React from 'react';
import { Button, Container, Col, Row, Image } from 'react-bootstrap';
import CV from '../../assets/cv/CV_Lina_Gutierrez_Arribas.pdf';
import profilePhoto from '../../assets/images/home/Lina_Gutierrez_Arribas.jpg';
import { Tecnologies } from '../../assets/images/tecnologies';

export const Home = () => {
  return (
    <Container className="d-block justify-content-center aling-items-center w-50">
      <Row className="d-blockjustify-content-between border border-success">
        <Col className="d-flex justify-content-around w-50 py-4">
          <Image
            height={300}
            width={250}
            className="rounded-circle justify-content-start"
            src={profilePhoto}
            alt="Lina Gutierrez Arribas Photo"
            title="Lina Gutierrez Arribas"
          />
        </Col>
        <Col className="d-flex  justify-content-center w-50">
          <div className="d-block py-5">
            <h1 className="text-center">Lina Gutierrez Arribas</h1>
            <h3 className="text-center">Full Stack Developer</h3>
            <div className="d-flex  justify-content-center py-4">
              <Button size="lg" variant="success">
                <a
                  href={CV}
                  download="CV_Lina_Gutierrez_Arribas"
                  className="text-decoration-none text-white fs-3"
                >
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="py-4">
        <h1 className="d-block text-center text-light py-3 bg-secondary">
          Tecnologies
        </h1>
        <Tecnologies />
      </Row>
    </Container>
  );
};
