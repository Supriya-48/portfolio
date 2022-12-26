import './FormStyles.css';
import emailjs from '@emailjs/browser';
import React,{useState} from 'react'
const Form = () => {
    const [ack,setAck]=useState("");
    const handleSubmit = (e) =>{
      setAck("Email Sent!")
      e.preventDefault();
      emailjs.sendForm('service_y6hbv8f','template_9dc3zns',e.target,'PGhv1a4ag0u0GueAX');
    }
  return (

        <form onSubmit={handleSubmit} className='form'>
          
          <label htmlFor="name">Name</label>
            <input type="input" name ="name_from" id="name_from" placeholder="Enter Your Name"></input>

            <label htmlFor="email">Email</label>
            <input type="input" id="email_from" name="email_from" placeholder="Enter Your Email"></input>
    
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Enter Your Message"/>
            <button className="btn">Submit</button>
            <p>{ack}</p>
        </form>
  )
}

export default Form;