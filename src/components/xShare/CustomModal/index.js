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
        <h4>{project?.description}</h4>
        <h6>Technologies: {project?.tecnologies}</h6>
        <div className="d-flex justify-content-between">
          <Button variant="outline-dark" size="lg" className="fw-bold">
            <a
              href={project?.urlCode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-black"
            >
              <span className=" h-100 m-2 px-4 py-4 fs-4 fw-800">
                Open Code
              </span>
            </a>
          </Button>
          <Button variant="outline-dark" size="lg" className="fw-bold">
            <a
              href={project?.urlProject}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-black"
              disabled={!project?.urlProject}
            >
              <span className=" h-100 m-2 px-4 py-4 fs-4 fw-800">
                Open Project
              </span>
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
