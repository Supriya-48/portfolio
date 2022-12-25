import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import introImg from "../assets/IntroImg.jpeg"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a react developer. I create responsive secure websites for my clients</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={introImg} className="img" alt="img"></img>
                </div>
                <div className="img-stack bottom">
                    <img src={introImg} className="img" alt="img"></img>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutContent