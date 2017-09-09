import React from 'react';
import EntityLink from '../EntityLink/EntityLink';

const DumbList = ({entities})=>(
    entities ?
    (
      <ul>
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
