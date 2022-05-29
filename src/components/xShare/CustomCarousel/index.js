import React, { useState } from 'react';
import { Container, Carousel, Image, Button, Row } from 'react-bootstrap';
import { CustomModal } from '../CustomModal';
import noProject from '../../../assets/images/projects/no-project.png';

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
          className="bg-secondary p-3"
        >
          {projects?.map((proj, i) => (
            <Carousel.Item key={i}>
              <Image
                className="d-block w-100"
                src={proj?.image ? proj?.image : noProject}
                alt={proj.name}
                width={400}
                height={500}
              />
              <Carousel.Caption>
                <h3
                  className="d-inline p-2 rounded fw-bold"
                  style={{
                    background: '#dcdcdc',
                    color: '#087857',
                  }}
                >
                  {proj.name}
                </h3>
                <div className="d-flex py-3 justify-content-center">
                  <Button
                    variant="outline-secondary"
                    size="lg"
                    className="fw-bold"
                    style={{ color: '#dcdcdc', background: '#087857' }}
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
