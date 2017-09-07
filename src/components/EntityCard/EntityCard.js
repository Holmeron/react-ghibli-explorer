import React, { Component } from 'react';

require('./entityCard.scss');

const EntityCard = ({name})=>(
  <div className="entity-card card">
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h4 className="card-title">{name}</h4>
      <p className="card-text"></p>
      <a href="#" className="btn btn-primary">View Details</a>
    </div>
  </div>
)

export default EntityCard;
