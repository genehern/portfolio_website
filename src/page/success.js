import React from 'react'
import Navbar from '../components/navbar'
import "../styles/success.scss"

function success() {
  return (
    <div>
      <Navbar />
      <div className='success'>
        <h1>Success!</h1>
        <p>Thank you for reaching out to me! I will get back to you as soon as possible.</p>
        </div>
      </div>
    

  )
}

export default success