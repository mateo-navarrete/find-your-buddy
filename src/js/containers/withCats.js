import React, { Component } from "react";
import { connect } from "react-redux";
import { getCats } from "../actions";

const mapStateToProps = ({ catsReducer }) => {
  return {
    data: catsReducer.data,
    meta: catsReducer.meta,
    loading: catsReducer.loading,
    included: catsReducer.included
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCats: size => dispatch(getCats(size))
  };
};

const withCats = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      this.props.getCats();
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

export default withCats;
