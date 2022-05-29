import React from 'react';
import { Container, Image, Col } from 'react-bootstrap';
import { linksSocialMedia } from '../../assets/data/dataSocialMedia';

export const SocialMedia = () => {
  return (
    <Container className="d-flex justify-content-center my-3">
      <Col className="d-block">
        {linksSocialMedia.map((red) => (
          <div
            key={red.title}
            className="text-decoration-none d-flex justify-content-center my-3 w-100 rounded"
            style={{ backgroundColor: '#022' }}
          >
            <a
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white"
            >
              <Image
                width={40}
                className="my-2"
                src={red.image}
                alt={red.title}
                title={red.title}
              />
              <span className=" h-100 m-2 px-4 py-4 fs-2 fw-800">
                {red.title}
              </span>
            </a>
          </div>
        ))}
      </Col>
    </Container>
  );
};
