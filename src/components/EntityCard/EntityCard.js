import React, { Component } from 'react';
import { Link } from 'react-router'

require('./entityCard.scss');

const EntityCard = ({name,link})=>(
  <div className="entity-card card">
    <img className="card-img-top" src="..." alt="Card image cap" />
    <div className="card-body">
      <h4 className="card-title">{name}</h4>
      <p className="card-text"></p>
      <Link to={link} className="btn btn-primary">View Details</Link>
    </div>
  </div>
)

export default EntityCard;
