import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CenterImg from '../components/CenterImg'
import  Form  from '../components/Form'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <CenterImg heading="CONTACT" text="let's have a chat..."/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact