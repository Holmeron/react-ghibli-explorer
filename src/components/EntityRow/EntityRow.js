import React, { Component } from 'react';
import DumbList from '../DumbList/DumbList';

import apiService from '../../services/apiService';

/**
* get an object {name, value} and assign the correct component
*/
class EntityRow extends Component {

 componentDidMount() {
   const {item} = this.props;
  }

  getProperComponent(item){
    const name = this.beautifyNames(item.name);
    // is url type
    if(item.value.indexOf(apiService.getEndpoint()) > -1){
      return <p className="details-page__url">{name} : <a href={item.value}>{item.value}</a></p>;
    }
    if(Array.isArray(item.value)){
      const entities = Array.isArray(item.value) ? item.value : [item.value];
      return <div className="details-page__related"><div><h4>{name} : </h4> <DumbList entities={entities} /></div></div>;
    }
    if(name === 'name' || name === 'title'){
      return <p className="details-page__title">{name} : {item.value}</p>;
    }
    return <p className="">{name} : {item.value}</p>;
  }

  beautifyNames(name){
    return name.charAt(0).toUpperCase()+name.replace(/_/g,' ').slice(1);
  }

  render() {
    const {item} = this.props;
    return(
      item && item.value ?
        this.getProperComponent(item)
      :
      null
    )
  }
}

export default EntityRow;
