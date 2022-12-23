import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from '../assets/IntroImg.jpeg'
import {Link} from 'react-router-dom'
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImage"/>
        </div>
        <div className="content">
            <p>
                HI, I am Supriya Muppu
            </p>
            <h1>Full stack Developer</h1>
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
    </div>
    )
}

export default HeroImg