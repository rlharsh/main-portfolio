import React from 'react';
import AvatarImage from '../../assets/images/avatar_normal.svg';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import '../../assets/css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className='app-header'>
        <div className="header-container">
            <img src={ AvatarImage } alt="My wonderful little avatar!" />
            <div className="header-details">
              <h1>Ronald Harsh</h1>
              <h2>Front-End Developer</h2>
              <p>I build things that change, for a changing world.</p>
            </div>
            <div className="social-container">
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
        </div>
    </header>
  )
}

export default Header
