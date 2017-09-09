import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findEntityByUrl } from '../../actions/apiActions';

import apiService from '../../services/apiService';

class EntityLink extends Component {

 componentDidMount() {
   const {entityLink} = this.props;
    this.props.dispatch(findEntityByUrl(entityLink));
  }

  getUniqueId(){
    const {entityLink} = this.props;
    return apiService.getUniqueIdFromUrl(entityLink);
  }

  render() {
    const { baseEntity } = this.props;
    const entity = baseEntity[this.getUniqueId()];

    return (
      <div>
      {
        entity ?
          entity.name
        :
          null
      }
      </div>
    )
  }
}

const mapStateToProps = ({ baseEntity }) => ({
  baseEntity : baseEntity
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(EntityLink);
