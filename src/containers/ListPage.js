import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findAll } from '../actions/apiActions';

import EntityCard from '../components/EntityCard/EntityCard';

class ListPage extends Component {

 componentDidMount() {
   const { entityType } = this.props.route;
    this.props.dispatch(findAll(entityType));
  }
  componentDidUpdate(){
    const { entityType } = this.props.route;
    const { baseEntity } = this.props;
    if(!baseEntity[entityType] || baseEntity[entityType].length === 0)
     this.props.dispatch(findAll(entityType));
     else{
       console.log('already exist : ',baseEntity[entityType]);
     }
   }

  render() {
    const { baseEntity } = this.props;
    const { entityType } = this.props.route;
    const entitiesList = baseEntity[entityType];
    return (
      <div className="helper__flex-list">
        {
          entitiesList ?
          entitiesList.map((entity, index) =>{
            return(<EntityCard name={entity.name ? entity.name : entity.title} link={`${entityType}/${entity.id}`} key={index} />)
          })
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
  mapStateToProps)(ListPage);
