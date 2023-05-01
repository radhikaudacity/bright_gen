import React from 'react';
import './Footer.css';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.jpg';

const Footer = () => {
  return (
    <div>
      <div className='footer-wrapper'>
        <div className='footer'>
          <div className='logo-col'>
            <div className='logo-item'>
              <h2 className='logo'>Bright Gen</h2>
              {/* <img src={logo} className='logo-rotate' alt='logo' /> */}
            </div>
            <div className='tagline'>
              <br></br>
              <h3>
                Providing <span style={{ fontSize: '2rem' }}>Quality</span>{' '}
                Products
              </h3>
            </div>
          </div>
          <div className='company-col'>
            <ul>
              <h2>Company</h2>
              <NavLink to='/home' activeClassName='active'>
                <li>Home</li>
              </NavLink>

              <NavLink
                to={{
                  pathname: '/projectinfo/1',
                }}
                activeClassName='active'
              >
                <li>Projects</li>
              </NavLink>

              <NavLink to='/contact' activeClassName='active'>
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>

          <div className='follow-us-col'>
            <h2>Follow us</h2>
            <div className='social-links'>
              <a>
                <FaFacebookF color='#32425b' />
              </a>
              <a>
                <FaTwitter color='#32425b' />
              </a>
              <a>
                <FaInstagram color='#32425b' />
              </a>
            </div>
          </div>
        </div>
        <div className='copyright'>© Bright Gen. All rights reserved.</div>
      </div>
    </div>
  );
};
export default Footer;
