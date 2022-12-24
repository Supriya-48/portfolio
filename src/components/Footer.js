import "./FooterStyles.css";
import React from "react";
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitch, FaTwitter } from "react-icons/fa";

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
                This is me Supriya Muppu.  
                I enjoy discussing new peojects and design challenges
            </p>
            <div className="social">
            <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;