import React from 'react';
import { Tags } from './Tags';

export const Card = ({name, description, img, tags }) => {
  return (
    <>
      <div className="cards">
        <img src={img} alt="" />
        <h2>{name}</h2>
        <p>{description}</p>
        <div className='badge-container'>
          {
            tags && tags.length && tags.map((tag, index) => (
              <Tags key={index} text={tag.text} color={tag.color} />
            ))
          }
        </div>
        
      </div>
    </>
  );
};