import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { setAge } from '../../actions';

const mapStateToProps = ({ ageReducer }) => {
  return {
    isAgeComplete: ageReducer.isComplete,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // setAge: age => dispatch(setAge(age)),
  };
};

const withSteps = WrappedComponent => {
  class HOC extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOC);
};

export default withSteps;
