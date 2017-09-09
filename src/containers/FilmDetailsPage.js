import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findFilm } from '../actions/apiActions';

import EntityLink from '../components/EntityLink/EntityLink';

class FilmsDetailsPage extends Component {

 componentDidMount() {
   const {filmId} = this.props.params;
    this.props.dispatch(findFilm(filmId));
  }

  render() {
    const { film } = this.props;

    return (

        film ?
        <div className="helper__details-page film-details">
          <h2 className="helper__details-page_title"><i className="gb-icon info-popup"></i>{film.title}</h2>
          <p className="helper__details-page_description">{film.description}</p>
          <p className="helper__details-page_comment"><i className="gb-icon comment"></i>Directed by : {film.director}</p>
          <p className="helper__details-page_comment flex-reverse"><i className="gb-icon reverse comment"></i>Produced by : {film.producer}</p>
          <p className="helper__details-page_date">Released : {film.release_date}</p>
          <p className="helper__details-page_score icons__rotten-tomato">Rottent Tomato score :{film.rt_score}</p>
          <div className="helper__details-page_related">
            {
              film.people ?
              films.people.map((peopleLink, index) =>(<EntityLink entityLink={film.people} />))
              :
              null
            }{
              film.species ?
              films.species.map((speciesLink, index) =>(<EntityLink entityLink={film.species} />))
              :
              null
            }{
              film.locations ?
              films.locations.map((locationsLink, index) =>(<EntityLink entityLink={film.locations} />))
              :
              null
            }{
              film.vehicles ?
              films.vehicles.map((vehiclesLink, index) =>(<EntityLink entityLink={film.vehicles} />))
              :
              null
            }
          </div>
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
  mapStateToProps)(FilmsDetailsPage);
