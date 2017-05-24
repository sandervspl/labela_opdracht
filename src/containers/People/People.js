/* eslint-disable */
// dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// components
import Card from './Card/Card';

// style
import './People.styl';

// actions
import * as peopleActions from '../../ducks/modules/people';

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

  componentDidMount() {
    const { fetchPeople } = this.props;
    const { loaded } = this.props.people;

    if (!loaded) {
      fetchPeople();
    }
  }

  renderPeople() {
    const { results } = this.props.people.list;

    return results.map((person) => <Card data={person} />);
  }

  render() {
    const { loading, loaded } = this.props.people;
    return (
      <div>
        <h1>People</h1>
        {loading && <p className="loading">Loading...</p>}
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
