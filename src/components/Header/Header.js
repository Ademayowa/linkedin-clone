import React from 'react';
import { SearchOutlined } from '@material-ui/icons';
import HomeIcon from '@material-ui/icons/Home';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmsIcon from '@material-ui/icons/Sms';
import HeaderOption from '../HeaderOption/HeaderOption';
import Logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src={Logo} alt='logo' className='header__logo' />
        <div className='header__input'>
          <SearchOutlined />
          <input type='text' placeholder='Search' />
        </div>
      </div>

      <div className='header__center'>
        <HeaderOption Icon={HomeIcon} text='Home' />
        <HeaderOption Icon={BusinessCenterIcon} text='Jobs' />
        <HeaderOption Icon={SmsIcon} text='Messaging' />
      </div>
    </div>
  );
};

export default Header;
