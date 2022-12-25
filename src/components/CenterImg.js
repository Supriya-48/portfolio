import "./CenterImgStyles.css"
import React from 'react'

const CenterImg = (props) => {
  return (
    <div className="center-img">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}
export default CenterImg