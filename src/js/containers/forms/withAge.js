import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAge } from '../../actions';

const mapStateToProps = ({ ageReducer }) => {
  return {
    id: ageReducer.id,
    is18: ageReducer.is18,
    label: ageReducer.label,
    options: ageReducer.options,
    message: ageReducer.message,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setAge: age => dispatch(setAge(age)),
  };
};

const withAge = WrappedComponent => {
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

export default withAge;
