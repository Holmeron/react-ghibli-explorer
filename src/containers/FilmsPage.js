import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findAllFilms, findAllVehicles } from '../actions/apiActions';

import EntityCard from '../components/EntityCard/EntityCard';

class FilmsPage extends Component {

 componentDidMount() {
    this.props.dispatch(findAllFilms());
  }
  componentDidUpdate() {
     const { films } = this.props;
   }
  render() {
    const { films } = this.props;
    console.log('films : ',films);

    return (
      <div>
        {
          films ?
          films.map((film, index) =>
            <EntityCard name={film.title} key={index} />
          )
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
