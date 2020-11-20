import React from 'react';
import './Title.css';

const Title = ({ text, Icon }) => {
  return (
    <div className='title'>
      <h3>{text}</h3>
      <Icon className='title__icon' />
    </div>
  );
};

export default Title;
