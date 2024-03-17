import React, { useState } from 'react';
import vd1 from '../../asserts/images/vd2.mp4';
import vd2 from '../../asserts/images/vd3.mp4';

import './Main.css';
import Header from '../Header/Header';
import Skills from '../Content/skills/Skills';
import Projects from '../Content/projects/Projects';
import Contact from '../Content/Contact/Contact';
import Footer from '../Footer/Footer';
import dalel from '../../asserts/images/dalel.png';
import instagramicon from '../../asserts/images/Instagram logo.gif';
import linkedinicon from '../../asserts/images/LinkedIn.gif';
import facebookicon from '../../asserts/images/Facebook.gif';
import githubicon from '../../asserts/images/Github.gif';


function Main() {
  const [darkmode, setDarkmode] = useState(false);


  return (
    <>
      {/*--{console.log(darkmode)}--*/}

      <Header  />  {/*      <Header changerDarkmode={setDarkmode} />*/} 

     <div className="video-background">
            <video autoPlay loop muted>
              <source src={ process.env.PUBLIC_URL + vd2 } type="video/mp4" />
            </video>
           {/*--    {darkmode && (
            <video autoPlay loop muted>
              <source src={ process.env.PUBLIC_URL + vd2 } type="video/mp4" />
            </video>
          )
        
          }
           {!darkmode && (
            <video autoPlay loop muted>
              <source src={ process.env.PUBLIC_URL + vd1 } type="video/mp4" />
            </video>
          )
        
          }

        --*/}
        <div className='presentation1'>

          <div className='hello'>
            <h3 className='hellomate'>Hi , I am Dalel ! </h3>

            <p className='position dynamic-txt'>I am <span className='engenniringstudent'>Software Engineering Student</span></p> 

            <h4>I am a 1st year software engineering student , <br />I have a strong passion for the dynamic world of computer science.
              Having completed two years of integrated preparatory studies at the Higher Institute of Computer Science and Mathematic of Monastir (ISIMM),
              I eagerly embarked on my first year in software engineering. Currently immersed in this exciting field, I am dedicated to acquiring new skills
              and solving complex challenges. My academic journey forms the foundation upon which I am building my professional path, always striving for excellence
              and meaningful contributions to the rapidly evolving realm of computer science.</h4>
              <button class="button">Download cv</button>
              <div className='contacticonmaincontainer'>
              <a href="https://www.linkedin.com/in/dalel-ammar-b0544a234/" ><img className='iconcontactmain linkedin' src={linkedinicon} /></a>
              <a href="https://www.instagram.com/dalel.ammar/"> <img className='iconcontactmain insta' src={instagramicon} /> </a>
               <a href="https://www.facebook.com/dalel.ammar.961">  <img className='iconcontactmain fb' src={facebookicon} /> </a>
                <a href="https://github.com/AmmarDalel">   <img className='iconcontactmain github' src={githubicon} /> </a>

                </div>
         
          </div>

          <img  className='photoprofil' src={dalel} alt='' />

        </div>
      </div>

      <div className=' containersskillsmain' id="skills">
        <Skills />
      </div>

      <div className='containerprojects' id="projects">
        <Projects />
      </div>

      <div className='containercontact' id="contact">
        <Contact />
      </div>

      <div className='containerFooter' >
        <Footer />
      </div>
    </>
  );
}

export default Main;
