import React ,  { useState }  from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars , faTimes  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.css';
import logo from '../../asserts/images/logo_portfolio.png'
import icohome  from '../../asserts/images/home (1).png'
import icoskills from '../../asserts/images/skills.png'
import icoprojects from '../../asserts/images/start-up.png'
import icocontact from '../../asserts/images/contact-us.png'

library.add(faBars , faTimes );

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div>
      <div  className='container-navbar1'>
      <FontAwesomeIcon icon="bars" size="3x" className='navbar-icon'  onClick={toggleNav} />
      <FontAwesomeIcon icon="fa-brands fa-linkedin" style={{color: "#0d3c63",}} />
      </div>
      <div className='container-navbar2' >
      <div className={`nav-bar ${showNav ? 'show' : ''}`}>
            <div className='container-logo-navbar'>
              <img className='logo' src={logo} />
              <FontAwesomeIcon icon="times" size="3x" className='navbar-icon icoclose' onClick={toggleNav}  />
            </div>
            <ul>
              <a href="#"><li> <img className='icon' src={icohome}/>Home</li></a>
              <a href="#skills"><li><img className='icon' src={icoskills}/>Skills</li></a> {/* Assurez-vous de respecter la casse pour la cohérence */}
              <a href="#projects"><li><img className='icon' src={icoprojects}/>Projects</li></a>
              <a href="#contact"><li><img className='icon' src={icocontact}/>Contact</li></a>
            </ul>

              <input type='checkbox' id='check'/>
              <label htmlFor='check' className='button'></label>

      </div>
      </div>
      
    </div>
    
  );
}

export default Header;
