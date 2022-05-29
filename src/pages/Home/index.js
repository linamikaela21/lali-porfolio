import React from 'react';
import { Button, Container, Col, Row, Image } from 'react-bootstrap';
import CV from '../../assets/cv/CV_Lina_Gutierrez_Arribas.pdf';
import { linksSocialMedia } from '../../assets/data/dataSocialMedia';
import profilePhoto from '../../assets/images/home/Lina_Gutierrez_Arribas.jpg';
import { Tecnologies } from '../../components/Tecnologies';

export const Home = () => {
  return (
    <Container className="d-block justify-content-center aling-items-center w-75">
      <Row className="d-flex justify-content-between border border-success">
        <Col
          className="d-flex justify-content-around py-3"
          sm={12}
          md={12}
          lg={6}
        >
          <Image
            height="300hv"
            width="250wv"
            className="rounded-circle justify-content-start"
            src={profilePhoto}
            alt="Lina Gutierrez Arribas Photo"
            title="Lina Gutierrez Arribas"
          />
        </Col>
        <Col
          className="d-flex justify-content-center align-items-center"
          sm={12}
          md={12}
          lg={6}
        >
          <div className="d-block py-4">
            <h1 className="text-center">Lina Gutierrez Arribas</h1>
            <h3 className="text-center">Full Stack Developer</h3>
            <div className="d-flex  justify-content-center pt-3">
              <Button size="lg" variant="outline-success">
                <a
                  href={CV}
                  download="CV_Lina_Gutierrez_Arribas"
                  className="text-decoration-none text-secondary fs-3"
                >
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="d-block">
        <Col className="d-flex justify-content-center my-3 px-3">
          {linksSocialMedia.map((red) => (
            <div
              key={red.title}
              className=" d-flex justify-content-center text-decoration-none m-2 w-50"
            >
              <a
                href={red.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white"
              >
                <Image
                  width={60}
                  src={red.image}
                  alt={red.title}
                  title={red.title}
                />
              </a>
            </div>
          ))}
        </Col>
      </Row>
      <Row className="py-4">
        <h1
          className="d-block text-center text-light py-3"
          style={{
            background: '#087857',
          }}
        >
          TECNOLOGIES
        </h1>
        <Tecnologies />
      </Row>
    </Container>
  );
};
