import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findAllFilms, findAllVehicles } from '../actions/apiActions';
// import { ghibliApi } from '../Api/GhibliApi';

class FilmsPage extends Component {

 componentDidMount() {
    this.props.dispatch(findAllFilms());
  }
  componentDidUpdate() {
     const { films } = this.props;
   }
  render() {
    const { films } = this.props;

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
      </div>
    )
  }
}

const mapStateToProps = ({ films, vehicles }) => ({
  films : films.films
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(FilmsPage);
