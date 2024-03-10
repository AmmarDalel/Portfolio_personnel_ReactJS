import React from 'react'
import vd1 from '../../asserts/images/vd2.mp4'
import './Main.css'
import Header from '../Header/Header'
import Skills from '../Content/skills/Skills'
import Projects from '../Content/projects/Projects'
import Contact from '../Content/Contact/Contact'
import Footer from '../Footer/Footer'
import dalel from '../../asserts/images/dalel.png'
function Main() {
  return (
    <>
         <Header/>

        <div className="video-background">
            <video autoPlay loop muted>
              <source src={process.env.PUBLIC_URL + vd1} type="video/mp4" />
            </video>

            <div className='presentation1'>
              <img src={dalel} alt=''/>
              <div className='hello'>
                <p>Hello , I'm <br/>Dalel Ammar</p>
                <h1  className='h1main' style={{color:'#0d3c63'}}>Software engineering student</h1>
                <button  >About me</button>
              </div>
            </div>

          
        </div>


        <div className=' containersskillsmain' id="skills">
              <Skills/>

        </div>

        <div className='containerprojects' id="projects">
        <Projects/>
        </div>

        <div className='containercontact' id="contact">
        <Contact/>
        </div>
        
        
        <div className='containerFooter' >

          <Footer/>
        </div>
    </>
    
  )
}

export default Main