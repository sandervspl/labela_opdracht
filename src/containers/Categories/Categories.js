// dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

// actions
import * as categoriesActions from 'ducks/modules/categories';

// components
import Header1 from 'components/Header1';
import MenuItem from './MenuItem';

// style
import './Categories.styl';

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

    if (!loaded) {
      fetchCategories();
    }
  }

  renderCategories() {
    const keysArray = _.keys(this.props.categories.list);

    return keysArray.map((category) => {
      if (category === 'people' || category === 'vehicles') {
        return (
          <Link to={`/${category}`}>
            <MenuItem key={category}>
              {category}
            </MenuItem>
          </Link>
        );
      }

      return (
        <MenuItem key={category} className="disabled">
          {category}
        </MenuItem>
      );
    });
  }

  render() {
    const { loading, loaded } = this.props.categories;
    return (
      <div>
        <Header1>Categories</Header1>
        {loading && <p className="loading">loading...</p>}
        {loaded &&
        <div id="categories-container">
          <ul id="categories-menu"> {this.renderCategories()} </ul>
        </div>}
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
