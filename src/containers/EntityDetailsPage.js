import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findEntityByUrl } from '../actions/apiActions';
import apiService from '../services/apiService';

import DumbList from '../components/DumbList/DumbList';

class EntityDetailsPage extends Component {

 componentDidMount() {
   const { entityType } = this.props.route;
   const { entityId } = this.props.params;
   if(entityId && entityType) this.props.dispatch(findEntityByUrl(apiService.getUrl(entityType,entityId)));
  }
  componentDidUpdate() {
    const { entityType } = this.props.params;
    const { entityId } = this.props.route;
    const { baseEntity } = this.props;
    if(entityType && entityId){
      const uniqueId = apiService.getUniqueIdFromUrl(apiService.getUrl(entityType,entityId));
      if(!baseEntity[uniqueId] || baseEntity[uniqueId].length === 0){
        this.props.dispatch(findEntityByUrl(apiService.getUrl(entityType,entityId)));
      }
      else{
        console.log('already exist : ',baseEntity[uniqueId]);
      }
    }
  }

  render() {
    const { baseEntity } = this.props;
    const { entityType } = this.props.route;
    const { entityId } = this.props.params;
    const uniqueId = apiService.getUniqueIdFromUrl(apiService.getUrl(entityType,entityId));
    const entity = baseEntity[uniqueId];
    let properties = [];

    for(let item in entity){
      if (entity.hasOwnProperty(item)) {
        const node = `${item} : ${entity[item]}`;
        properties.push(node);
      }
    }

    const list = properties.map((item,index)=> <p key={index}>{item}</p>);

    return (
      entity ?
          <div>
          {list}
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
