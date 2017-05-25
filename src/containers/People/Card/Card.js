// dependencies
import React from 'react';
import PropTypes from 'prop-types';

// style
import './Card.styl';

const Card = ({ data, setActivePerson }) => (
  <div className="card" onClick={() => setActivePerson(data)}>
    <h3 className="name">{data.name}</h3>
  </div>
);

Card.propTypes = {
  data: PropTypes.shape({}).isRequired,
  setActivePerson: PropTypes.func,
};

export default Card;
