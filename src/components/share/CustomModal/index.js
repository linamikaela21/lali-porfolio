import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

export const CustomModal = ({ setModalShow, modalShow, project }) => {
  return (
    <Modal
      show={modalShow}
      size="lg"
      centered
      data-testid="test-id-modal-container"
    >
      <Modal.Header>
        <Modal.Title className="text-center w-100">
          <h1>{project?.name}</h1>
        </Modal.Title>
        <Button className="bg-danger" onClick={() => setModalShow(false)}>
          x
        </Button>
      </Modal.Header>
      <Modal.Body>
        <p>{project?.description}</p>
        <div className="d-flex justify-content-between">
          <Button variant="outline-dark" size="lg" className="fw-bold">
            Open Code
          </Button>
          <Button variant="outline-dark" size="lg" className="fw-bold">
            Open Project
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

CustomModal.propTypes = {
  modalTitle: PropTypes.string,
  setModalShow: PropTypes.func,
  modalShow: PropTypes.bool,
};
