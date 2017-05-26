// dependencies
import React from 'react';
import PropTypes from 'prop-types';

// components
import Icon from 'components/Icon';

// style
import './Error.styl';

const Error = ({ children }) => (
  <div className="error-message">
    <Icon name="fa-exclamation-triangle" />
    { children }
  </div>
);

Error.propTypes = {
  children: PropTypes.objectOf(PropTypes.element),
};

export default Error;
