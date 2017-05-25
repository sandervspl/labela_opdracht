// dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// actions
import * as vehiclesActions from 'ducks/modules/vehicles';

// style
import './Vehicles.styl';

// components
import Table from './Table/Table';


class Vehicles extends Component {
  static propTypes = {
    vehicles: PropTypes.shape({
      loading: PropTypes.bool,
      loaded: PropTypes.bool,
      // error: PropTypes.bool,
      // errorMessage: PropTypes.string,
      list: PropTypes.shape({
        results: PropTypes.array,
      }),
    }),
    fetchVehicles: PropTypes.func,
  };

  componentDidMount() {
    const { fetchVehicles } = this.props;
    const { loaded } = this.props.vehicles;

    if (!loaded) {
      fetchVehicles();
    }
  }

  render() {
    const { loading, loaded } = this.props.vehicles;
    const { results } = this.props.vehicles.list;

    return (
      <div>
        <h1>Vehicles</h1>
        {loading && <p className="loading">Loading...</p>}
        {loaded &&
        <div className="vehicles-table-container">
          <Table data={results} />
        </div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    vehicles: state.app.vehicles,
  };
}

export default connect(mapStateToProps, vehiclesActions)(Vehicles);
