// dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

// actions
import * as categoriesActions from 'ducks/modules/categories';

// style
import './Categories.css';


class Categories extends Component {
  static propTypes = {
    categories: PropTypes.shape({
      loading: PropTypes.bool,
      loaded: PropTypes.bool,
      // error: PropTypes.bool,
      // errorMessage: PropTypes.string,
      list: PropTypes.shape({}),
    }),
    fetchCategories: PropTypes.func,
  };

  componentDidMount() {
    const { fetchCategories } = this.props;
    const { loaded } = this.props.categories;

    if (!loaded) { fetchCategories(); }
  }

  renderCategories() {
    const keysArray = _.keys(this.props.categories.list);
    return keysArray.map(category => (<li key={category}><Link to={`/${category}`}>{category}</Link></li>));
  }

  render() {
    const { loading, loaded } = this.props.categories;
    return (
      <div>
        <h1>Categories</h1>
        {loading && <p className="loading">loading...</p>}
        {loaded && <ul> {this.renderCategories()} </ul>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.app.categories,
  };
}

export default connect(mapStateToProps, categoriesActions)(Categories);
