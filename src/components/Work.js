import './WorkCardStyles.css'
import React from 'react'
import imgPro1 from "../assets/imgPro1.jpg"
import { NavLink } from 'react-router-dom'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'
const Work= () => {
  return (
    <div className='work-container'>
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {WorkCardData.map((val,ind)=>{
            return(
                <WorkCard 
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
          })}
        </div>
    </div>
  )
}

export default Work