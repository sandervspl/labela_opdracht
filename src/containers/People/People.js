// dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// actions
import * as peopleActions from 'ducks/modules/people';

// components
import Loading from 'components/Loading';
import PersonModal from './PersonModal';
import Card from './Card/Card';

// style
import './People.styl';


class People extends Component {
  static propTypes = {
    people: PropTypes.shape({
      loading: PropTypes.bool,
      loaded: PropTypes.bool,
      // error: PropTypes.bool,
      // errorMessage: PropTypes.string,
      list: PropTypes.shape({
        results: PropTypes.array,
      }),
    }),
    fetchPeople: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      activePerson: {},
    };
  }

  componentDidMount() {
    const { fetchPeople } = this.props;
    const { loaded } = this.props.people;

    if (!loaded) {
      fetchPeople();
    }
  }

  setActivePerson = (personObject) => {
    this.setState({ activePerson: personObject });
  }

  closeModal = () => {
    this.setState({ activePerson: {} });
  }

  renderPeople() {
    const { results } = this.props.people.list;

    return results.map(person => (
      <Card
        data={person}
        key={person.name}
        setActivePerson={this.setActivePerson}
      />
    ));
  }

  render() {
    const { loading, loaded } = this.props.people;
    const { activePerson } = this.state;

    return (
      <div>
        <h1>People</h1>
        <PersonModal person={activePerson} close={this.closeModal} />
        {loading && <Loading />}
        {loaded && <div className="grid"> {this.renderPeople()} </div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    people: state.app.people,
  };
}

export default connect(mapStateToProps, peopleActions)(People);
