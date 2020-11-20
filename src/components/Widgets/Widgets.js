import React from 'react';
import DreamJob from '../DreamJob/DreamJob';
import Peopleviewed from '../PeopleViewed/Peopleviewed';
import PublicProfile from '../PublicProfile/PublicProfile';
import './Widgets.css';

const Widgets = () => {
  return (
    <div className='widgets'>
      <PublicProfile />
      <DreamJob />
      <Peopleviewed
        src='https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        name='John Doe'
        position='3rd'
        role='Front end Developer'
      />
      <Peopleviewed
        src='https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        name='Sarah Smith'
        position='1st'
        role='Network Engineer'
      />
      <Peopleviewed
        src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        name='Abraham Judith'
        position='2nd'
        role='Musician'
      />
    </div>
  );
};

export default Widgets;
