import React from 'react';
import './HeaderOption.css';

const HeaderOption = ({ Icon, text }) => {
  return (
    <div className='headerOption'>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default HeaderOption;
