import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findAllVehicles } from '../actions/apiActions';
// import { ghibliApi } from '../Api/GhibliApi';

class VehiclesPage extends Component {

 componentDidMount() {
    // ghibliApi.getAll('vehicles').then(data => console.log('data : ',data));
    this.props.dispatch(findAllVehicles());
  }
  componentDidUpdate() {
     const { vehicles } = this.props;
   }
  render() {
    const { vehicles } = this.props;

    return (
      <div>
      {
        vehicles ?
        vehicles.map((vehicle, index) => {
          return (
            <p key={index}>
            {vehicle.title}
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

const mapStateToProps = ({ vehicles }) => ({
  vehicles : vehicles.vehicles
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(VehiclesPage);
