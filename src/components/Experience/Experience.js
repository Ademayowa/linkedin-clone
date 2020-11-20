import React from 'react';
import './Experience.css';

const Experience = ({ image, title, Icon, company, duration, location }) => {
  return (
    <div className='experience'>
      <div className='experience__image'>
        <img src={image} alt='logo' />
      </div>

      <div className='experience__info'>
        <div className='experience__infoIcon'>{Icon && <Icon />}</div>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{duration}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Experience;
