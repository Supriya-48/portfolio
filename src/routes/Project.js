import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CenterImg from '../components/CenterImg'
const Project = () => {
  return (
    <div>
      <Navbar/>
      <CenterImg heading="PROJECTS" text="Some of my most recent works"/>
      <Footer/>
    </div>
  )
}

export default Project