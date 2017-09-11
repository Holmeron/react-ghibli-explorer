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

  getPersonList(list, type){
    let persons = [];
    let i = 0;
    for(let key in list){
      if(list.hasOwnProperty(key)){
        const linkName = appService.toSnakeCase(list[key].name);
        if(list[key].type === type){
          list[key].link = 'https://fr.wikipedia.org/wiki/'+linkName;
          persons.push(list[key]);
        }
        i++;
      }
    }
    return persons;
  }

  render() {
    const { baseEntity } = this.props;
    const { entityType } = this.props.route;
    const list = baseEntity[entityType];
    let producersList = null;
    let directorsList = null;
    if(typeof list !== 'undefined'){
      producersList = this.getPersonList(list,'producer');
      directorsList = this.getPersonList(list,'director');
    }

    return (
      <div className="person-list">
        <div>
          <h4>Producers</h4>
          <ul>
            {
              producersList ?
              producersList.map((person, index) => <li key={index}><a href={person.link} target="_blank">{person.name}</a></li>)
              :
              null
            }
          </ul>
        </div>
        <div>
        <h4>Directors</h4>
          <ul>
            {
              directorsList ?
              directorsList.map((person, index) => <li key={index}><a href={person.link} target="_blank">{person.name}</a></li>)
              :
              null
            }
          </ul>
        </div>
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
