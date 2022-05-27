import React, { useState } from 'react';
import { Container, Carousel, Image, Button, Row } from 'react-bootstrap';
import { CustomModal } from '../CustomModal';

export const CustomCarousel = ({ projects }) => {
  const [index, setIndex] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [project, setProject] = useState({});

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const handleCarousel = (proj) => {
    setModalShow(true);
    setProject(proj);
  };

  return (
    <Container className="d-flex justify-content-center">
      <Row className="d-flex justify-content-between w-75">
        <Carousel
          activeIndex={index >= projects?.length ? setIndex(0) : index}
          onSelect={handleSelect}
        >
          {projects?.map((proj, i) => (
            <Carousel.Item key={i}>
              <Image
                className="d-block w-100"
                src={proj.image}
                alt={proj.name}
                width={400}
                height={500}
              />
              <Carousel.Caption>
                <h3>{proj.name}</h3>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="outline-light"
                    size="lg"
                    className="fw-bold"
                    onClick={() => handleCarousel(proj)}
                  >
                    More Info
                  </Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
          <CustomModal
            modalShow={modalShow}
            setModalShow={setModalShow}
            project={project}
          />
        </Carousel>
      </Row>
    </Container>
  );
};
