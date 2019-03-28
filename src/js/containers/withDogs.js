import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDogs } from '../actions';

const mapStateToProps = ({ dogsReducer }) => {
  return {
    data: dogsReducer.data,
    meta: dogsReducer.meta,
    loading: dogsReducer.loading,
    included: dogsReducer.included,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDogs: size => dispatch(getDogs(size)),
  };
};

const withDogs = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      this.props.getDogs();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOC);
};

export default withDogs;
