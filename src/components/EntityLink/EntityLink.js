import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import { findEntityByUrl } from '../../actions/apiActions';
import apiService from '../../services/apiService';

class EntityLink extends Component {

 componentDidMount() {
   const {entityLink} = this.props;
    this.props.dispatch(findEntityByUrl(entityLink));
  }

  render() {
    const { baseEntity, entityLink } = this.props;
    const uniqueId = apiService.getUniqueIdFromUrl(entityLink);
    const entity = baseEntity[uniqueId];
    const link = uniqueId != 0 && entity ? `/${uniqueId.split('-')[0]}/${entity.id}` : uniqueId;
    const name = entity ?
                  entity.name ? entity.name : entity.title
                  :
                  null;
    return (
      entity && name ?
        <div>
          <p className="entity-link"><Link to={link}>{name}</Link></p>
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
  mapStateToProps)(EntityLink);
