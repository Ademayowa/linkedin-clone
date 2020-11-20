import React from 'react';
import './Views.css';

const Views = () => {
  return (
    <div className='views'>
      <div className='views__wrapper'>
        <div className='views__heading'>
          <h2>Your Dashboard</h2>
        </div>

        <div className='views__searchApperances'>
          <div className='views__searchApperancesInfo1'>
            <h4>12</h4>
            <p>Who viewed your profile</p>
          </div>

          <div className='views__searchApperancesInfo2'>
            <h4>0</h4>
            <p>Articles views</p>
          </div>

          <div className='views__searchApperancesInfo3'>
            <h4>3</h4>
            <p>Search appearances</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Views;
