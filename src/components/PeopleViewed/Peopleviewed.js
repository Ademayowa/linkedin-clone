import { Avatar } from '@material-ui/core';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import React from 'react';
import './Peopleviewed.css';

const Peopleviewed = ({ name, position, role, src }) => {
  return (
    <div className='viewed'>
      {/* Title */}
      <div className='viewed__container'>
        <div className='viewed__avatar'>
          <Avatar src={src} className='viewed__photo' />
        </div>

        <div className='viewed__info'>
          <h4>{name}</h4>
          <span>. {position}</span>
          <p>{role}</p>
        </div>

        <div className='viewed__connect'>
          <ControlPointIcon />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Peopleviewed;
