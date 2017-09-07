import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findAllLocations } from '../actions/apiActions';

class LocationsPage extends Component {

 componentDidMount() {
    this.props.dispatch(findAllLocations());
  }
  componentDidUpdate() {
     const { locations } = this.props;
   }
  render() {
    const { locations } = this.props;

    return (
      <div>
      {
        locations ?
        locations.map((location, index) => {
          return (
            <p key={index}>
            {location.title}
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

const mapStateToProps = ({ locations }) => ({
  locations : locations.locations
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(LocationsPage);
