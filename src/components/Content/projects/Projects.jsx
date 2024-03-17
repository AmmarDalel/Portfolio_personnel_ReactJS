import React from 'react'
import './Projects.css'
import login from '../../../asserts/images/login.png'
import doneontime from '../../../asserts/images/done_on_time.png'
import tasks from '../../../asserts/images/tasks.png'
import projects from '../../../asserts/images/projects.png'
import ATM from '../../../asserts/images/ATM machine.png'
import gestioncuisine from "../../../asserts/images/gestion d'une cuisine.png";
import gestionecole from "../../../asserts/images/gestion d'une école.png";
import gestionrestaurant from "../../../asserts/images/gestion restaurant.png";

function Projects() {
  return (
<section className="projects skills-container" id="projects">
        <h1>Projects</h1>
        <div className="content">

            <div className="card">
                <div className="container-img">
                    <img alt="login"  src={login} id="slide-1"/>
                    <img alt="done on time"  src={doneontime}id="slide-2"/>
                    <img alt="tasks"  src={tasks} id="slide-3"/>
                    <img alt="projects"  src={projects} id="slide-4"/>
                </div>
               
                <div className="info">
                    <p>web application with React js and Springboot</p>
                    <strong className="project-title">
                        <span >Statistic web app</span>
                         <a href="#" className="more-details">more details</a>   
                    </strong>
                </div>
            </div>
            <div className="card">
                <div className="container-img">
                    <img alt="ATM machine"  src={ATM} id="slide-1"/>
                </div>
              
                <div className="info">
                    <p>ATM Machine : JavaCard</p>
                    <strong className="project-title">
                        <span >ATM Machine</span>
                        <a href="https://drive.google.com/drive/folders/1I2RADf0McsRNM7q2RfJ5b8g8fRrvnyjz?usp=sharing" className="more-details">more details</a>
                    </strong>
                </div>
            </div>

            <div className="card">
                <div className="container-img">
                    <img alt="Kitchen Management"  src={gestioncuisine} id="slide-1"/>
                </div>
              
                <div className="info">
                    <p>Kitchen Management : Java and SQL</p>
                    <strong className="project-title">
                        <span >Kitchen Management</span>
                        <a href="https://drive.google.com/drive/folders/13Qd_BGJpnQSz5g0CCc-N7-yodwvubYD7?usp=drive_link" className="more-details">more details</a>
                    </strong>
                </div>
            </div>
            <div className="card">
                <div className="container-img">
                    <img alt="School Management"  src={gestionecole} id="slide-1"/>
                </div>
              
                <div className="info">
                    <p>School Management : Java</p>
                    <strong className="project-title">
                        <span >School Management</span>
                        <a href="https://drive.google.com/drive/folders/1H3aCeV1KV97aCSFnh3CGbjyM6viKxz6l?usp=drive_link" className="more-details">more details</a>
                    </strong>
                </div>
            </div>
            <div className="card">
                <div className="container-img">
                    <img alt="Restaurant Management"  src={gestionrestaurant} id="slide-1"/>
                </div>
              
                <div className="info">
                    <p>Restaurant Management : C++</p>
                    <strong className="project-title" id="Restaurant-Management" >
                        <span >Restaurant Management</span>
                        <a href="#" className="more-details">more details</a>
                    </strong>
                </div>
            </div>

        

       

          
            
            
    
        </div>
    </section>  )
}

export default Projects