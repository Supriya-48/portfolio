import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import {FaHtml5, FaJava} from "react-icons/fa";
import {SiMysql, SiReact ,SiCss3, SiAngular} from "react-icons/si";

import introImg from "../assets/IntroImg.jpeg"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm Full-stack developer. I create responsive secure websites for my clients</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
         <div className="right">
            {/* <div className="img-container">
                <div className="img-stack top">
                    <img src={introImg} className="img" alt="img"></img>
                </div>
                <div className="img-stack bottom">
                    <img src={introImg} className="img" alt="img"></img>
                </div>
            </div>  */}
            <h2  style={{ color: "#fff", margin:"3rem"}}>Technolgies i know :</h2>
            <div>
            <FaJava size={40} style={{ color: "#fff", marginRight: "2rem" }} />
            <SiReact
                size={40}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <SiMysql
                size={40}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <FaHtml5 size={40} style={{ color: "#fff", marginRight: "2rem" }} />
              <SiCss3
                size={35}
                style={{ color: "#fff", marginRight: "2rem" ,marginTop:"1rem" }}
              />
              <SiAngular
                size={35}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              </div>
              
        </div>
    </div>
  )
}

export default AboutContent