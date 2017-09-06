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
     const { films } = this.props;
   }
  render() {
    const { films } = this.props;

    return (
      <div>
      {
        films ?
        films.map((film, index) => {
          return (
            <p key={index}>
            {film.title}
            </p>
          )
        })
        :
        null
      }
      </div>
    )
  }
}

const mapStateToProps = ({ films }) => ({
  films : films.films
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(FilmsPage);
