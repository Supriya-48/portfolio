import "./FooterStyles.css";
import React from "react";
import {FaGithub, FaHackerrank, FaHome, FaLinkedin, FaMailBulk, FaPhone,} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Girmajipet</p>
              <p>Warangal, Telangana, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              (+91) 9121645029
            </h4>
          </div>
          <div className="mail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              muppusupriya@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
            <h4>
                About Me
            </h4>
            <p>
                I am Supriya Muppu.  
                I enjoy discussing new peojects and design challenges
            </p>
            <div className="social">
              <a href="https://github.com/Supriya-48"><FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              /></a>
              <a href="https://www.linkedin.com/in/supriya-muppu/"><FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              /></a>
              <a href="https://leetcode.com/Supriya_muppu/">
              <SiLeetcode
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>
              <a href="https://www.hackerrank.com/muppusupriya"><FaHackerrank
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              /></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;