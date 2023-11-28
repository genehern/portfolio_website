import React from 'react'
import Navbar from '../components/navbar'
import "../styles/contact.scss"

function Contact() {
  return (
    <div>
      <Navbar />

      <div className='contactMe'>
        <div className='contactInfo'>
          <h2>Let's work together!</h2>
          <h3>Mail</h3>
          <p>genehernlee@gmail.com</p>
          <h3>Phone</h3>
          <p>9858 7652</p>

        </div>
        <div className='textBoxes'>
          <form target="_blank" action="https://formsubmit.co/2b851d23fdcecb68c01614e0d52ba42d" method="POST">
            <input type='text' name='_honey' style={{ display: "none" }} />
            <input type='hidden' name='_captcha' value='false' />
            <input type='hidden' name='_next' value='https://portfolio-website-henna-seven.vercel.app/contact/success.html' />
                <div className="form-group">
                      <input type="text" name="name" className="form-control" placeholder="Full Name" required/> 
                      <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
                      <textarea placeholder="Your Message" className="formbigbox" name="message" required></textarea>
                      <button type="submit" className="btn">Submit Form</button>
                </div>
            </form>
          </div>
          </div>
      </div>
  
  )
}

export default Contact
