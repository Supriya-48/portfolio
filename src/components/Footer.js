import "./FooterStyles.css"
import React from 'react'

import { FaHome } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color :"#fff" , marginRight:"2rem"}}/>
                    <div>
                        <p> 10-5-95 Girmajipet</p>
                        <p>Warangal, Telangana</p>
                    </div>
                </div>
            </div>
            <div className="right">

            </div>
        </div>
    </div>
  )
}

export default Footer