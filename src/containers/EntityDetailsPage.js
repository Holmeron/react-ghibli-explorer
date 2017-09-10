import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findEntityByUrl } from '../actions/apiActions';
import appService from '../services/appService';

import EntityRow from '../components/EntityRow/EntityRow';

class EntityDetailsPage extends Component {

 componentDidMount() {
   const { entityType } = this.props.route;
   const { entityId } = this.props.params;
   if(entityId && entityType) this.props.dispatch(findEntityByUrl(appService.getUrl(entityType,entityId)));
  }
  componentDidUpdate() {
    const { entityType } = this.props.params;
    const { entityId } = this.props.route;
    const { baseEntity } = this.props;
    if(entityType && entityId){
      const uniqueId = appService.getUniqueIdFromUrl(appService.getUrl(entityType,entityId));
      if(!baseEntity[uniqueId] || baseEntity[uniqueId].length === 0){
        this.props.dispatch(findEntityByUrl(appService.getUrl(entityType,entityId)));
      }
      else{
        console.log(`already exist with uniqueID ${uniqueId} : ${baseEntity[uniqueId]}`);
      }
    }
  }

  render() {
    const { baseEntity } = this.props;
    const { entityType } = this.props.route;
    const { entityId } = this.props.params;
    const uniqueId = appService.getUniqueIdFromUrl(appService.getUrl(entityType,entityId));
    const entity = baseEntity[uniqueId];
    let properties = [];

    // get the name of a property and its value in an object
    for(let item in entity){
      if (entity.hasOwnProperty(item) && item !== 'id') {
        properties.push({
          name : item,
          value : entity[item]
        });
      }
    }

    return (
      entity ?
          <div className="details-page">
          {properties.map((property,index)=>
              <EntityRow key={index} item={property} />
          )}
          </div>
      :
      null

    )
  }
}

const mapStateToProps = ({ baseEntity }) => ({
  baseEntity : baseEntity
});

// connect method from react-router connects the component with redux store
export default connect(
  mapStateToProps)(EntityDetailsPage);
