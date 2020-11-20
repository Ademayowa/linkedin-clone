import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import { Avatar, Button, IconButton } from '@material-ui/core';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile__info'>
        <div className='profile__top'>
          <img
            src='https://media-exp1.licdn.com/dms/image/C5616AQH8Wi_jh8DDrA/profile-displaybackgroundimage-shrink_200_800/0?e=1607558400&v=beta&t=CkCeOR7B3qphXAwsbLaE6fiz6rt6QIOKkRFzuGgSo78'
            alt=''
          />
          <div className='profile__avatar'>
            <Avatar className='profile__photo' />
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
