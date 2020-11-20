import React from 'react';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import './MyItems.css';

const MyItems = () => {
  return (
    <div className='items'>
      <div className='items__icon'>
        <TurnedInIcon />
      </div>

      <div className='items__text'>
        <h4>My items</h4>
        <p>Keep track of your jobs, courses and articles</p>
      </div>
    </div>
  );
};

export default MyItems;
