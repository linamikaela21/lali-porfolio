import React from 'react';
import { Container, Image, Col, Row } from 'react-bootstrap';
import { tecnologies } from './data';

export const Tecnologies = () => {
  return (
    <Container className="d-flex justify-content-start my-3">
      <Row className="d-flex justify-content-between">
        {tecnologies.map((cat) => (
          <Row
            key={Object.entries(cat).flat()[0]}
            className="d-flex justify-content-between"
          >
            <h1 className="d-block text-center fst-italic py-3 bg-light">
              {Object.entries(cat).flat()[0]}
            </h1>
            {Object.values(cat)
              .flat()
              .map((tec) => (
                <Col key={tec.title} className="d-block mb-3">
                  <div className="d-flex justify-content-center">
                    <Image
                      height={50}
                      width={70}
                      className="my-2"
                      src={tec.image}
                      alt={tec.title}
                      title={tec.title}
                    />
                  </div>
                  <span className="d-flex justify-content-center h-100 m-2 px-4 fs-5 fw-800">
                    {tec.title}
                  </span>
                </Col>
              ))}
          </Row>
        ))}
      </Row>
    </Container>
  );
};
