import React, { useState } from 'react';
import { Container, Carousel, Image, Button, Row } from 'react-bootstrap';
import { CustomModal } from '../CustomModal';

export const CustomCarousel = () => {
  const [index, setIndex] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [project, setProject] = useState({});

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  const projects = [
    {
      name: 'Project Uno',
      urlProject:
        'https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg',
      urlCode:
        'https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440',
      description: 'Una description',
    },
    {
      name: 'Project Dos',
      urlProject:
        'https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440',
      urlCode:
        'https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440',
      description: 'Una description',
    },
  ];

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
                src={proj.urlProject}
                alt={proj.name}
              />
              <Carousel.Caption>
                <h3>{proj.name}</h3>
                <div className="d-flex justify-content-center">
                  <Button
                    variant="outline-dark"
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
