import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findFilm } from '../actions/apiActions';

import DumbList from '../components/DumbList/DumbList';

class FilmsDetailsPage extends Component {

 componentDidMount() {
   const {filmId} = this.props.params;
    this.props.dispatch(findFilm(filmId));
  }

  render() {
    const { film } = this.props;

    return (

        film ?
        <div className="details-page film-details">
          <h2 className="details-page__title"><i className="gb-icon info-popup"></i>{film.title}</h2>
          <p className="details-page__description">{film.description}</p>
          <p className="details-page__comment"><i className="gb-icon comment"></i>Directed by : {film.director}</p>
          <p className="details-page__comment flex-reverse"><i className="gb-icon reverse comment"></i>Produced by : {film.producer}</p>
          <p className="details-page__date">Released : {film.release_date}</p>
          <p className="details-page__score icons__rotten-tomato">Rotten Tomato score : {film.rt_score}</p>
          <div className="details-page__related">
            <div>
              <h4> People : </h4>
              <DumbList entities={film.people} />
            </div>
            <div>
              <h4> Species : </h4>
              <DumbList entities={film.species} />
            </div>
            <div>
              <h4> Locations : </h4>
              <DumbList entities={film.locations} />
            </div>
            <div>
              <h4> Vehicles : </h4>
              <DumbList entities={film.vehicles} />
            </div>
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
