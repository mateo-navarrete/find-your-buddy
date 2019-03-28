import React, { Component } from "react";
import { connect } from "react-redux";
import { getSingleAnimal, setAnimalImg } from "../actions";

const mapStateToProps = ({ singleAnimalReducer, willAdoptReducer }) => {
  return {
    data: singleAnimalReducer.data,
    singleAnimalId: singleAnimalReducer.singleAnimalId,
    willAdoptId: willAdoptReducer.willAdoptId,
    singleAnimalImg: singleAnimalReducer.singleAnimalImg,
    loading: singleAnimalReducer.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSingleAnimal: animalId => dispatch(getSingleAnimal(animalId)),
    setAnimalImg: imgUrl => dispatch(getSingleAnimal(imgUrl))
  };
};

const withSingleAnimal = WrappedComponent => {
  class HOC extends Component {
    componentDidMount() {
      this.props.getSingleAnimal(this.props.willAdoptId);
      this.props.setAnimalImg(this.props.singleAnimalImg);
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

//animals:state. animals.(props.match.params.id)
