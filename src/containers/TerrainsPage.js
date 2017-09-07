import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findAllTerrains } from '../actions/apiActions';
// import { ghibliApi } from '../Api/GhibliApi';

class TerrainsPage extends Component {

 componentDidMount() {
    // ghibliApi.getAll('terrains').then(data => console.log('data : ',data));
    this.props.dispatch(findAllTerrains());
  }
  componentDidUpdate() {
     const { terrains } = this.props;
   }
  render() {
    const { terrains } = this.props;

    return (
      <div>
      {
        terrains ?
        terrains.map((terrain, index) => {
          return (
            <p key={index}>
            {terrain.title}
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

const mapStateToProps = ({ terrains }) => ({
  terrains : terrains.terrains
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(TerrainsPage);
