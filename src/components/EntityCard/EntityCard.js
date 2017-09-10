import React, { Component } from 'react';
import { Link } from 'react-router'

const EntityCard = ({name,link, text})=>(
  <div className="entity-card card">
    <div className="entity-card__body card-body">
      <h4 className="card-title">{name}</h4>
      {
        text ?
        <p className="card-text">{text}</p>
        :
        null
      }
      <Link to={link} className="btn btn-primary">View Details</Link>
    </div>
  </div>
)

export default EntityCard;
