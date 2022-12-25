import "./FormStyles.css"
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text" placeholder="Please type your name here"></input>
            <label>Email</label>
            <input type="text" placeholder="Enter Email"></input>
            <label>Subject</label>
            <input type="text" placeholder="Enter Subject"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Add Message"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form