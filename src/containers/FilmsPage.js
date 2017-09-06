import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findAllFilms } from '../actions/apiActions';
// import { ghibliApi } from '../Api/GhibliApi';

class FilmsPage extends Component {

 componentDidMount() {
    // ghibliApi.getAll('films').then(data => console.log('data : ',data));
    this.props.dispatch(findAllFilms());
  }
  componentDidUpdate() {
     const { state } = this.props;
     console.log('update : ', state);
   }
  render() {
    const { state } = this.props;
    console.log(state, 'state');

    return (
      <div></div>
    )
  }
}

const mapStateToProps = ({ state }) => ({
  state: state
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(FilmsPage);
