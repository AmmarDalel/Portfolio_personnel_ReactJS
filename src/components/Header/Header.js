import React ,  { useState , forwardRef, useImperativeHandle , useEffect }  from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars , faTimes  } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin  , faSquareFacebook , faSquareGithub , faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.css';
import logo from '../../asserts/images/logo_portfolio.png'
import icohome  from '../../asserts/images/home (1).png'
import icoskills from '../../asserts/images/skills.png'
import icoprojects from '../../asserts/images/start-up.png'
import icocontact from '../../asserts/images/contact-us.png'

library.add(faBars , faTimes  );

const Header =({changerDarkmode}) =>{
  const [showNav, setShowNav] = useState(false);


  const [darkmode, setDarkmode] = useState(true);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const toggledarkmode = () => {
    setDarkmode(!darkmode);
    changerDarkmode(darkmode) ;

  };


  return (
    <div>
      <div  className='container-navbar1'>
        <FontAwesomeIcon icon="bars" size="2x" className='navbar-icon'  onClick={toggleNav} />
        <div className='navbar-icon-contact-container'>
          <a href="https://www.linkedin.com/in/dalel-ammar-b0544a234/" ><FontAwesomeIcon icon={faLinkedin} color='#21289d' size="2x" className='navbar-icon-contact' /></a>  
          <a href="https://github.com/AmmarDalel"><FontAwesomeIcon icon={faSquareGithub} size="2x" className='navbar-icon-contact'  />  </a>
          <a href="https://www.facebook.com/dalel.ammar.961"><FontAwesomeIcon icon={faSquareFacebook}  size="2x" className='navbar-icon-contact' /></a>
          <a href="https://www.instagram.com/dalel.ammar/"><FontAwesomeIcon icon={faSquareInstagram} size="2x" className='navbar-icon-contact' /></a>
        </div>
        
      </div>
      <div className='container-navbar2' >
      <div className={`nav-bar ${showNav ? 'show' : ''}`}>
            <div className='container-logo-navbar'>
              <h2><span className='developer'>Developer</span> Dalel</h2>
              <FontAwesomeIcon icon="times" size="2x" className='navbar-icon icoclose' onClick={toggleNav}  />
            </div>
            <ul>
              <a href="#"><li> <img className='icon' src={icohome} alt='home'/>Home</li></a>
              <a href="#skills"><li><img className='icon' src={icoskills}  alt='skills'/>Skills</li></a> {/* Assurez-vous de respecter la casse pour la cohérence */}
              <a href="#projects"><li><img className='icon' src={icoprojects}  alt='projects' />Projects</li></a>
              <a href="#contact"><li><img className='icon' src={icocontact}  alt='contact' />Contact</li></a>
            </ul>


      </div>
      </div>
      
    </div>
    
  );
  }

export default Header;
