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
        <Modal.Title className="text-center w-100 text-secondary py-1">
          <h1>{project?.name}</h1>
        </Modal.Title>
        <Button className="bg-danger" onClick={() => setModalShow(false)}>
          x
        </Button>
      </Modal.Header>
      <Modal.Body className="p-4 m-3 bg-light">
        <h4 className="p-3">{project?.description}</h4>
        <h6 className="p-3">Technologies: {project?.tecnologies}</h6>
        <div className="d-flex justify-content-between">
          <Button
            variant="outline-secondary"
            size="lg"
            className="fw-bold"
            style={{ color: '#dcdcdc', background: '#087857' }}
          >
            <a
              href={project?.urlCode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-light"
            >
              <span className=" h-100 fs-4 text-center">Open Code</span>
            </a>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="fw-bold"
            style={{ color: '#dcdcdc', background: '#087857' }}
            disabled={!project?.urlProject}
          >
            <a
              href={project?.urlProject}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-light"
            >
              <span className=" h-100 fs-4 text-center">Open Project</span>
            </a>
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
