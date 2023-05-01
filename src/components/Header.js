import { Link } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';
import logo from '../images/logo.jpg';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className='header-wrapper'>
      <div className='header'>
        <Link
          to='/home'
          activeClassName='active'
          onClick={() => setShowLinks(false)}
        >
          <div className='logo-item'>
            <img src={logo} className='logo-rotate  ' alt='logo' />
            <h3 className='logo'>Bright Gen</h3>
          </div>
        </Link>
        <nav className='nav'>
          <ul
            className={showLinks ? 'show' : ''}
            onClick={() => setShowLinks(!showLinks)}
          >
            <Link to='/home' activeClassName='active'>
              <li>Home</li>
            </Link>

            <Link
              to={{
                pathname: '/projectinfo/1',
              }}
              activeClassName='active'
            >
              <li>Projects</li>
            </Link>

            <Link to='/contact' activeClassName='active'>
              <li>Contact</li>
            </Link>
          </ul>
          <div onClick={() => setShowLinks(!showLinks)}>
            <FaBars className='bars' />
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;
