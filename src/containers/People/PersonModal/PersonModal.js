// dependencies
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

// components
import Modal from 'components/Modal';
import Icon from 'components/Icon';

// style
import './PersonModal.styl';

const PersonModal = ({ person, close }) => (
  <Modal open={!_.isEmpty(person)} close={close}>
    <div className="top">
      <h1>{person.name}</h1>
    </div>
    <div className="person-info">
      <h3>More info</h3>
      <ul>
        <li><Icon name="fa-venus-mars" /> {person.gender}</li>
        <li><Icon name="fa-birthday-cake" /> {person.birth_year}</li>
        <li><Icon name="fa-arrows-v" /> {person.height} cm</li>
      </ul>
    </div>
  </Modal>
);

PersonModal.propTypes = {
  person: PropTypes.shape({}),
  close: PropTypes.func.isRequired,
};

export default PersonModal;
