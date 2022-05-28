import React from 'react';
import { Button, Container, Col, Row, Image } from 'react-bootstrap';
import CV from '../../assets/cv/CV_Lina_Gutierrez_Arribas.pdf';
import profilePhoto from '../../assets/images/home/Lina_Gutierrez_Arribas.jpg';
import { Tecnologies } from '../../components/Tecnologies';
import whatsAppImage from '../../assets/images/socialMedia/whatsapp.png';
import linkedinImage from '../../assets/images/socialMedia/linkedin.png';
import gmailImage from '../../assets/images/socialMedia/gmail.png';
import githubImage from '../../assets/images/socialMedia/github.png';

export const Home = () => {
  const linksSocialMediaHome = [
    {
      title: 'WhatsApp',
      image: whatsAppImage,
      url: 'https://api.whatsapp.com/send/?phone=543512197488&text&app_absent=0',
    },
    {
      title: 'Linkedin',
      image: linkedinImage,
      url: 'https://www.linkedin.com/in/lina-mikaela-gutierrez-arribas/',
    },
    {
      title: 'Gmail',
      image: gmailImage,
      url: 'mailto:mikaelagutierrezarribas@gmail.com',
    },
    {
      title: 'Github',
      image: githubImage,
      url: 'https://github.com/linamikaela21/linamikaela21',
    },
  ];
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
      <Row className="d-block">
        <Col className="d-flex justify-content-between my-3 w-100">
          {linksSocialMediaHome.map((red) => (
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
        <h1 className="d-block text-center text-light py-3 bg-secondary">
          Tecnologies
        </h1>
        <Tecnologies />
      </Row>
    </Container>
  );
};
