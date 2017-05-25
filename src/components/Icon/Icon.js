// dependencies
import React from 'react';
import PropTypes from 'prop-types';

// style
import './Icon.styl';

const Icon = ({ name }) => (
  <div className="icon-container">
    <i className={`fa ${name}`} aria-hidden="true" />
  </div>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
