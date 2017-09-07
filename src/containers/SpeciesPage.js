import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findAllSpecies } from '../actions/apiActions';

class SpeciesPage extends Component {

 componentDidMount() {
    this.props.dispatch(findAllspecies());
  }
  componentDidUpdate() {
     const { species } = this.props;
   }
  render() {
    const { species } = this.props;

    return (
      <div>
      {
        species ?
        species.map((species, index) => {
          return (
            <p key={index}>
            {species.title}
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

const mapStateToProps = ({ species }) => ({
  species : species.species
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(SpeciesPage);
