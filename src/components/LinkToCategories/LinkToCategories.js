// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// style
import './LinkToCategories.styl';

const LinkToCategories = () => (
  <Link to="/"> {'< Categories'} </Link>
);

LinkToCategories.propTypes = {};

export default LinkToCategories;
