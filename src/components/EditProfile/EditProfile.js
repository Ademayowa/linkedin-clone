import React from 'react';
import HelpIcon from '@material-ui/icons/Help';
import './EditProfile.css';

const EditProfile = () => {
  return (
    <div className='editProfile'>
      <div className='editProfile__container'>
        <div className='editProfile__text'>
          <p>Edit public profile & URL</p>
          <div className='editProfile__icon'>
            <HelpIcon />
          </div>
        </div>
        <hr />

        <div className='editProfile__text'>
          <p>Add profile in another language</p>
          <div className='editProfile__icon'>
            <HelpIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
