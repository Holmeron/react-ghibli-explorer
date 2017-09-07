import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findFilm } from '../actions/apiActions';

class FilmsPage extends Component {

 componentDidMount() {
   const {filmId} = this.props.params;
    this.props.dispatch(findFilm(filmId));
  }

  render() {
    const { film } = this.props;

    return (
      
        film ?
        <div>
          <p>{film.title}</p>
          <p>{film.description}</p>
          <p>{film.director}</p>
          <p>{film.producer}</p>
          <p>{film.release_date}</p>
          <p>{film.rt_score}</p>
        </div>
        :
        null

    )
  }
}

const mapStateToProps = ({ films }) => ({
  film : films.film
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(FilmsPage);
