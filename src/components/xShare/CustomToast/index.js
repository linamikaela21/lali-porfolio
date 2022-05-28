import { Toast, ToastContainer } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const CustomToast = ({ info, setShowToast, showToast }) => {
  return (
    <div className="fixed-top">
      <ToastContainer
        className="p-3"
        position="top-start"
        data-testid="test-id-toast-div"
      >
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg="light"
          data-testid="test-id-toast"
        >
          <Toast.Header closeButton={false}>
            <strong
              data-testid="test-id-toast-text"
              className={
                info.result === 'OK'
                  ? 'me-auto text-success'
                  : 'me-auto text-danger'
              }
            >
              {info.title}
            </strong>
          </Toast.Header>
          <Toast.Body>{info.text}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

CustomToast.propTypes = {
  info: PropTypes.object,
  showToast: PropTypes.bool,
  setShowToast: PropTypes.func,
};
