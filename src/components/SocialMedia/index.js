import React from 'react';
import { Container, Image, Col } from 'react-bootstrap';
import whatsAppImage from '../../assets/images/socialMedia/whatsapp.png';
import linkedinImage from '../../assets/images/socialMedia/linkedin.png';
import gmailImage from '../../assets/images/socialMedia/gmail.png';
import githubImage from '../../assets/images/socialMedia/github.png';

export const SocialMedia = () => {
  const linksSocialMedia = [
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
