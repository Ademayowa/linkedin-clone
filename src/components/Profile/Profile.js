import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import { Avatar, Button, IconButton } from '@material-ui/core';
import './Profile.css';

const Profile = () => {
  const photoUrl =
    'https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

  const backgroundUrl =
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';

  return (
    <div className='profile'>
      <div className='profile__info'>
        <div className='profile__top'>
          <img className='profile__image' src={backgroundUrl} alt='' />
          <div className='profile__avatar'>
            <Avatar src={photoUrl} className='profile__photo' />
          </div>
        </div>

        <div className='profile__body'>
          <div className='profile__bodyRight'>
            <Button className='profile__btnAdd'>Add profile section</Button>
            <Button className='profile__btnMore'>More...</Button>
            <IconButton className='profile__btnEdit'>
              <CreateIcon />
            </IconButton>
          </div>

          <div className='profile__details'>
            <h2>Ademayowa Adeniyi</h2>
            <h3>Software Developer</h3>
            <ul>
              <li>Nigeria</li>
              <li>254 connections</li>
              <li>Contact info</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
