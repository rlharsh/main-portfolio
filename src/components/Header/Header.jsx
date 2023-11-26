import React from 'react';
import AvatarImage from '../../assets/images/avatar_normal.svg';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import '../../assets/css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <header className='app-header'>
        <div className="header-container">
            <div className="header-details">
              <img src={AvatarImage} alt="" />
              <div className='code-block'>
                <h1>Hello, I'm <span className='accent'>Ronald</span>, Front-End Developer</h1>
              </div>
              <div className="code-block">
                <p>I build things that change, for a changing world.</p>
              </div>
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
