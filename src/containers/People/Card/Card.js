// dependencies
import React from 'react';
import PropTypes from 'prop-types';

// style
import './Card.styl';

const Card = ({ data }) => (
  <div className="card" key={data.name}>
    <h3 className="name">{data.name}</h3>
    <ul>
      <li>gender {data.gender}</li>
      <li>birth year {data.birth_year}</li>
    </ul>
  </div>
);

Card.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Card;
