import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ContactForm } from '../../components/ContactFrom';
import { SocialMedia } from '../../components/SocialMedia';

export const Contact = () => {
  return (
    <Container>
      <Row className="d-flex w-100 justify-content-between">
        <Col className="justify-content-center" sm={12} md={12} lg={6}>
          <ContactForm />
        </Col>
        <Col className="justify-content-center" sm={12} md={12} lg={6}>
          <SocialMedia />
        </Col>
      </Row>
    </Container>
  );
};
