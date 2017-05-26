// dependencies
import React from 'react';
import PropTypes from 'prop-types';

// components
import Icon from 'components/Icon';

// style
import './MenuItem.styl';

const MenuItem = ({ children, className }) => (
  <li className={`menu-item ${className}`}>
    { children }
    <Icon name="fa-angle-right" />
  </li>
);

MenuItem.propTypes = {
  children: PropTypes.objectOf(PropTypes.element),
  className: PropTypes.string,
};

export default MenuItem;
