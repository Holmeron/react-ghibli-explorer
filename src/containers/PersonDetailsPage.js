import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findEntityByUrl } from '../actions/apiActions';
import appService from '../services/appService';

class PersonDetailsPage extends Component {

 componentDidMount() {
   const { name } = this.props.params;
   if(name) this.props.dispatch(findWikipediaPageByName(name));
  }

  render() {
    const { entityType } = this.props.params;
    const { baseEntity, name } = this.props;
    let entity = (baseEntity[entityType] && baseEntity[entityType][name])
                  ?
                  baseEntity[entityType][name]
                  :
                  null;
    return (
      entity ?
          <div>{entity.name}</div>
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
  mapStateToProps)(PersonDetailsPage);
