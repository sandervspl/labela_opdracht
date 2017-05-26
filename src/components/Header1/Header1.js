// dependencies
import React from 'react';
import PropTypes from 'prop-types';

// style
import './Header1.styl';

const Header1 = ({ children }) => (
  <h1> { children } </h1>
);

Header1.propTypes = {
  children: PropTypes.objectOf(PropTypes.element),
};

export default Header1;
