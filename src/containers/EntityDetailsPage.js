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

  render() {
    const { baseEntity } = this.props;
    const { entityType } = this.props.route;
    const { entityId } = this.props.params;
    const uniqueId = apiService.getUniqueIdFromUrl(apiService.getUrl(entityType,entityId));
    const entity = baseEntity[uniqueId];
    return (

        entity ?
        <div className="details-page entity-details">
          <h2 className="details-page__title"><i className="gb-icon info-popup"></i>{entity.title}</h2>
          <p className="details-page__description">{entity.description}</p>
          <p className="details-page__comment"><i className="gb-icon comment"></i>Directed by : {entity.director}</p>
          <p className="details-page__comment flex-reverse"><i className="gb-icon reverse comment"></i>Produced by : {entity.producer}</p>
          <p className="details-page__date">Released : {entity.release_date}</p>
          <p className="details-page__score icons__rotten-tomato">Rotten Tomato score : {entity.rt_score}</p>
          <div className="details-page__related">
            <div>
              <h4> People : </h4>
              <DumbList entities={entity.people} />
            </div>
            <div>
              <h4> Species : </h4>
              <DumbList entities={entity.species} />
            </div>
            <div>
              <h4> Locations : </h4>
              <DumbList entities={entity.locations} />
            </div>
            <div>
              <h4> Vehicles : </h4>
              <DumbList entities={entity.vehicles} />
            </div>
          </div>

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
