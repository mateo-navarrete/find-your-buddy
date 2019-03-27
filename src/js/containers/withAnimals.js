import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnimals } from '../actions';

const mapStateToProps = ({ animalsReducer }) => {
  return {
    animals: animalsReducer.animals,
    loading: animalsReducer.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAnimals: size => dispatch(getAnimals(size)),
  };
};

const withAnimals = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      this.props.getAnimals();
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

export default withAnimals;
