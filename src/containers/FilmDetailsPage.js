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
        <div className="helper__details-page film-details">
          <h2 className="helper__details-page_title"><i className="gb-icon info-popup"></i>{film.title}</h2>
          <p className="helper__details-page_description">{film.description}</p>
          <p className="helper__details-page_comment"><i className="gb-icon comment"></i>Directed by : {film.director}</p>
          <p className="helper__details-page_comment flex-reverse"><i className="gb-icon reverse comment"></i>Produced by : {film.producer}</p>
          <p className="helper__details-page_date">Released : {film.release_date}</p>
          <p className="helper__details-page_score icons__rotten-tomato">Rotten Tomato score : {film.rt_score}</p>
          <div className="helper__details-page_related">
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
