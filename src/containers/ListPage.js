import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findAll } from '../actions/apiActions';

import EntityCard from '../components/EntityCard/EntityCard';

/**
* Component-Page to display the list of an entity's element
*/
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
            const text = entity.release_date ? entity.release_date : null;
            return(<EntityCard name={entity.name ? entity.name : entity.title} link={`${entityType}/${entity.id}`} text={text} key={index} />)
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
