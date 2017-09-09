import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findAllFilms } from '../actions/apiActions';

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

    return (
      <div className="helper__flex-list">
        {
          films ?
          films.map((film, index) =>{
            return(<EntityCard name={film.title} link={'film/'+film.id} key={index} />)
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
