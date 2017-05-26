// dependencies
import React from 'react';
import PropTypes from 'prop-types';

// style
import './TableCell.styl';

const TableCell = ({ children }) => (
  <td> { children } </td>
);

TableCell.propTypes = {
  children: PropTypes.objectOf(PropTypes.element),
};

export default TableCell;
