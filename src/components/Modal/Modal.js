// dependencies
import React from 'react';
import PropTypes from 'prop-types';

// style
import './Modal.styl';

const Modal = ({ open, close, children }) => {
  const className = open ? 'open' : '';
  let ref;

  // only close when clicking on modal overlay
  function closeModal(e) {
    if (e.target === ref) close();
  }

  return (
    <div id="modal-overlay" onClick={e => closeModal(e)} className={className} ref={r => (ref = r)}>
      <div id="modal">
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.objectOf(PropTypes.element).isRequired,
};

export default Modal;
