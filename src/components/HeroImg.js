import "./HeroImgStyles.css";
import IntroImg from "../assets/IntroImg.jpeg";
import React from 'react'
import Typical from 'react-typical';
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero"> 
    <div className="mask">
<img src={IntroImg} alt="IntroImg" className="intro-img" />

    </div>
    <div className="content">
    <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm{" "}
              <span className="highlighted-text">Supriya Muppu</span>
            </span>
          </div>
    <div className="details">
            <span className="text">
              {" "}
              <h1>
                {" "}
                <Typical 
                className="typical"
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Coder 🔴 ",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "Java Dev 😎",
                    1000,
                    "React Developer ✅",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>

        <div>
            {/* <Link to ="/project"
            className="btn">Projects</Link> */}
            <a href="SupriyaResume.pdf" download="Supriya Muppu.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
               <Link to ="/contact"
            className="btn btn-light">
                Hire Me!</Link>
        </div>
    </div>
    </div>
  )
}

export default HeroImg