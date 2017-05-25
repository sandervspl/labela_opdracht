// dependencies
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// style
import './Table.styl';

const Table = ({ data }) => {
  const filterKeys = ['created', 'edited', 'pilots', 'films', 'url'];

  const generateTableHeaders = () => {
    // filter out the keys that we want to use for our table
    const keys = _.keys(_.omit(data[0], filterKeys));

    // create table headers
    return keys.map((key) => {
      // replace underscores with space
      const newKey = key.replace(/_/g, ' ');

      // map table headers to array
      return <th key={`v-th-${key}`}>{newKey}</th>;
    });
  };

  const generateTableRows = () =>
    data.map((vehicle) => {
      // filter values
      const filterValues = _.values(_.omit(vehicle, filterKeys));

      // map table cells to array
      const tableCells = filterValues.map((value, index) => <td key={`${value}-${index}`}>{value}</td>);

      // map table rows to array
      return <tr key={vehicle.name} className="cell-row">{tableCells}</tr>;
    });

  return (
    <table>
      <thead>
        <tr className="header-row">{generateTableHeaders()}</tr>
      </thead>
      <tbody>
        {generateTableRows()}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Table;
