// dependencies
import React from 'react';
import PropTypes from 'prop-types';

// style
import './TableHeader.styl';

const TableHeader = ({ children }) => (
  <th className="text-center"> { children } </th>
);

TableHeader.propTypes = {
  children: PropTypes.objectOf(PropTypes.element),
};

export default TableHeader;
