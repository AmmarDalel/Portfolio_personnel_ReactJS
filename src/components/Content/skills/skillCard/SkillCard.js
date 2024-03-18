import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './skillCard.css'
const SkillCard = ({title , iconUrl , isActive , onClick}) =>{
  console.log(iconUrl)

    return (
        <div  className={`skills-card ${ isActive ? "active" :""}`}
        onClick={()=> onClick()}
        >
          
           <div className="skill-icon">
              <FontAwesomeIcon  className='icon' icon={iconUrl}/>
            </div> 

            <span> {title} </span>

        </div>

      
    )
}

export default SkillCard