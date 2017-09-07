import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findAllFilms, findAllVehicles } from '../actions/apiActions';
// import { ghibliApi } from '../Api/GhibliApi';

class FilmsPage extends Component {

 componentDidMount() {
    // ghibliApi.getAll('films').then(data => console.log('data : ',data));
    this.props.dispatch(findAllFilms());
    this.props.dispatch(findAllVehicles());
  }
  componentDidUpdate() {
     const { films } = this.props;
   }
  render() {
    const { films, vehicles } = this.props;

    return (
      <div>
        <div className="col-md-6">
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
        <div className="col-md-6">
        {
          vehicles ?
          vehicles.map((vehicle, index) => {
            return (
              <p key={index}>
              {vehicle.name}
              </p>
            )
          })
          :
          null
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ films, vehicles }) => ({
  films : films.films,
  vehicles : vehicles.vehicles
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(FilmsPage);
