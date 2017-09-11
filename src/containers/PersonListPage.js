import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findAll } from '../actions/apiActions';
import appService from '../services/appService';

import EntityCard from '../components/EntityCard/EntityCard';

/**
* Component-Page to display the list of Ghibli people
*/
class PersonListPage extends Component {

 componentDidMount() {
   const { entityType } = this.props.route;
   const { baseEntity } = this.props;
   if(!baseEntity[entityType] || baseEntity[entityType].length === 0){
     // we need to fetch all films to get directors and producers in it, it will save films and persons in the state
     this.props.dispatch(findAll('films'));
    }
  }

  getPersonList(list){
    let persons = [];
    let i = 0;
    for(let key in list){
      if(list.hasOwnProperty(key)){
        const linkName = appService.toSnakeCase(list[key].name);
        persons.push(<EntityCard name={list[key].name} link={`/persons/${linkName}`} text={list[key].type} key={i} />)
        i++;
      }
    }
    return persons;
  }

  render() {
    const { baseEntity } = this.props;
    const { entityType } = this.props.route;
    const list = baseEntity[entityType];
    let personsList = null;
    if(typeof list !== 'undefined'){
      personsList = this.getPersonList(list);
    }

    return (
      <div className="helper__flex-list">
        {
          personsList ?
          personsList.map((person, index) => person)
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
  mapStateToProps)(PersonListPage);
