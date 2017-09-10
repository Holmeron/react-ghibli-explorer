import React from 'react';
import EntityLink from '../EntityLink/EntityLink';

/**
* list displaying link to entities
*/
const DumbList = ({entities})=>(
    entities ?
    (
      <ul className="dumb-list">
        {
          entities.map((link, index) =>
          (<li key={index}>
            <EntityLink entityLink={link} />
          </li>)
          )
        }
      </ul>
    )
    :
    null
)

export default DumbList;
