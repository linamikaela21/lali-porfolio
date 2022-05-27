import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ContactForm } from '../../components/ContactFrom';
import { SocialMedia } from '../../components/SocialMedia';

export const Contact = () => {
  return (
    <Container>
      <Row className="d-flex w-100 justify-content-between">
        <Col className="w-50 justify-content-center">
          <ContactForm />
        </Col>
        <Col className="w-50 justify-content-center">
          <SocialMedia />
        </Col>
      </Row>
    </Container>
  );
};
