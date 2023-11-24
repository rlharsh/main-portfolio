import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import '../../assets/css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserGraduate, faCircleInfo, faLightbulb, faBars, faBlog } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const location = useLocation();

  return (
    <nav className='nav' id='nav'>
        <Link to='/' className={location.pathname === '/blog' ? 'nav-link-active' : ''}>
            <FontAwesomeIcon icon={faBlog} />
            <p className={location.pathname === '/blog' ? 'p-link-active' : ''}>Information</p>
        </Link>
        <Link to='/' className={location.pathname === '/education' ? 'nav-link-active' : ''}>
            <FontAwesomeIcon icon={faUserGraduate} />
            <p className={location.pathname === '/education' ? 'p-link-active' : ''}>Education</p>
        </Link>
        <Link to='/' className={location.pathname === '/' ? 'nav-link-active' : ''}>
            <FontAwesomeIcon icon={faHouse} />
            <p className={location.pathname === '/' ? 'p-link-active' : ''}>Home</p>
        </Link>
        <Link to='/' className={location.pathname === '/projects' ? 'nav-link-active' : ''}>
            <FontAwesomeIcon icon={faLightbulb} />
            <p className={location.pathname === '/projects' ? 'p-link-active' : ''}>Projects</p>
        </Link>
        <Link to='/cats' className={location.pathname === '/menu' ? 'nav-link-active' : ''}>
            <FontAwesomeIcon icon={faBars} />
            <p className={location.pathname === '/menu' ? 'p-link-active' : ''}>Menu</p>
        </Link>
    </nav>
  );
}

export default Navbar;
