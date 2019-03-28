import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setWillAdoptID } from '../actions';

const mapStateToProps = ({ willAdoptReducer }) => {
  return {
    willAdoptId: willAdoptReducer.willAdoptId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setWillAdoptID: id => dispatch(setWillAdoptID(id)),
  };
};

const withWillAdopt = WrappedComponent => {
  class HOC extends Component {
    // componentDidMount() {
    //   this.props.setWillAdoptID(this.props.pet.id);
    // }

    render() {
      return <WrappedComponent {...this.props}/>;
    }
  }
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOC);
};

export default withWillAdopt;
