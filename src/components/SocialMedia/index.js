import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Image, Col } from 'react-bootstrap';
import whatsAppImage from '../../assets/images/whatsapp.png';
import linkedinImage from '../../assets/images/linkedin.png';
import gmailImage from '../../assets/images/gmail.png';

export const SocialMedia = () => {
  const linksSocialMedia = [
    { title: 'WhatsApp', image: whatsAppImage },
    { title: 'Linkedin', image: linkedinImage },
    { title: 'Gmail', image: gmailImage },
  ];

  return (
    <Container className="d-flex justify-content-start my-3">
      <Col>
        {linksSocialMedia.map((red) => (
          <ul key={red.title}>
            <div
              className="text-decoration-none d-flex justify-content-between px-5 w-100 rounded"
              style={{ backgroundColor: '#022' }}
            >
              <Link to="/" className="text-decoration-none text-white">
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
              </Link>
            </div>
          </ul>
        ))}
      </Col>
    </Container>
  );
};
