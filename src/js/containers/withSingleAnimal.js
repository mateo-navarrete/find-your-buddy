import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleAnimal } from "../actions";

const mapStateToProps = ({ singleAnimalReducer }) => {
  return {
    data: singleAnimalReducer.data,
    meta: singleAnimalReducer.meta,
    loading: singleAnimalReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleAnimal: animalId => dispatch(getSingleAnimal(animalId))
  };
};

const withSingleAnimal = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      this.props.getSingleAnimal();
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

export default withSingleAnimal;
