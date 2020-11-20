import React from 'react';
import './Education.css';

const Education = ({ image, title, Icon, company, duration, location }) => {
  return (
    <>
      <div className='education'>
        <div className='education__image'>
          <img src={image} alt='' />
        </div>

        <div className='education__info'>
          <div className='education__infoIcon'>{Icon && <Icon />}</div>
          <h3>{company}</h3>
          <h4>{title}</h4>
          <p>{duration}</p>
          <p>{location}</p>
        </div>
      </div>
    </>
  );
};

export default Education;
