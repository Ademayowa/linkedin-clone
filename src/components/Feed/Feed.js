import React from 'react';
import EducationList from '../EducationList/EducationList';
import ExperienceList from '../ExperienceList/ExperienceList';
import Profile from '../Profile/Profile';
import Dashboard from '../Dashboard/Dashboard';
import './Feed.css';

const Feed = () => {
  return (
    <div className='feed'>
      <Profile />
      <Dashboard />
      <ExperienceList />
      <EducationList />
    </div>
  );
};

export default Feed;
