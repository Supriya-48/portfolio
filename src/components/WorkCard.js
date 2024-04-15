import './WorkCardStyles.css'
import React from 'react'
const WorkCard = (props) => {
  return (
    <div className="project-card">
            <img src={props.imgsrc} alt="image"/>
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
              <p>{props.text}</p>
              {
                  props.title == 'Us To You' ?
                      <div className="pro-btns">
                          <button className="btn">
                              <a href={props.view}>View</a>
                          </button>
                          <button className="btn">
                              <a href={props.source}>Source</a>
                          </button></div>
                          : null
                          }
                  </div>
                  </div>
  )
}

export default WorkCard