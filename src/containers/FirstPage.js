import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { Link } from 'react-router-dom';
import './FirstPage.css';

const FirstPage = () => (
  // const b64 = this.props.staticContext ? 'wait for it' : window.btoa('wait for it');
  // return (
  <div className="bold">
    <h2>First Page</h2>
    <Link to={'/second'}>Second</Link>
  </div>
);

// const mapStateToProps = state => ({
//   user: state.user,
// });

// const mapDispatchToProps = dispatch => ({
//   userActions: bindActionCreators(userActions, dispatch),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(FirstPage);

export default FirstPage;
