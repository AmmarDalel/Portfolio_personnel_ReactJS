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
<section class="projects skills-container" id="projects">
        <h1>Projects</h1>
        <div class="content">

            <div class="card">
                <div class="container-img">
                    <img alt="login"  src={login} id="slide-1"/>
                    <img alt="done on time"  src={doneontime}id="slide-2"/>
                    <img alt="tasks"  src={tasks} id="slide-3"/>
                    <img alt="projects"  src={projects} id="slide-4"/>
                </div>
               
                <div class="info">
                    <p>web application with React js and Springboot</p>
                    <strong class="project-title">
                        <span >Statistic web app</span>
                         <a href="#" class="more-details">more details</a>   
                    </strong>
                </div>
            </div>
            <div class="card">
                <div class="container-img">
                    <img alt="ATM machine"  src={ATM} id="slide-1"/>
                </div>
              
                <div class="info">
                    <p>ATM Machine : JavaCard</p>
                    <strong class="project-title">
                        <span >ATM Machine</span>
                        <a href="https://drive.google.com/drive/folders/1I2RADf0McsRNM7q2RfJ5b8g8fRrvnyjz?usp=sharing" class="more-details">more details</a>
                    </strong>
                </div>
            </div>

            <div class="card">
                <div class="container-img">
                    <img alt="Kitchen Management"  src={gestioncuisine} id="slide-1"/>
                </div>
              
                <div class="info">
                    <p>Kitchen Management : Java and SQL</p>
                    <strong class="project-title">
                        <span >Kitchen Management</span>
                        <a href="https://drive.google.com/drive/folders/13Qd_BGJpnQSz5g0CCc-N7-yodwvubYD7?usp=drive_link" class="more-details">more details</a>
                    </strong>
                </div>
            </div>
            <div class="card">
                <div class="container-img">
                    <img alt="School Management"  src={gestionecole} id="slide-1"/>
                </div>
              
                <div class="info">
                    <p>School Management : Java</p>
                    <strong class="project-title">
                        <span >School Management</span>
                        <a href="https://drive.google.com/drive/folders/1H3aCeV1KV97aCSFnh3CGbjyM6viKxz6l?usp=drive_link" class="more-details">more details</a>
                    </strong>
                </div>
            </div>
            <div class="card">
                <div class="container-img">
                    <img alt="Restaurant Management"  src={gestionrestaurant} id="slide-1"/>
                </div>
              
                <div class="info">
                    <p>Restaurant Management : C++</p>
                    <strong class="project-title" id="Restaurant-Management" >
                        <span >Restaurant Management</span>
                        <a href="#" class="more-details">more details</a>
                    </strong>
                </div>
            </div>

        

       

          
            
            
    
        </div>
    </section>  )
}

export default Projects