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
        <div className="helper__details-page film-details">
        <i className="gb-icon add-star"></i>
          <h2>{film.title}</h2>
          <p>{film.description}</p>
          <p>Directed by : {film.director}</p>
          <p>Produced by : {film.producer}</p>
          <p>Released : {film.release_date}</p>
          <p className="icons__rotten-tomato">{film.rt_score}</p>
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
