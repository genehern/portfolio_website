import React from 'react'
import { Link } from "react-router-dom"
import "../styles/navbar.scss"
import { motion } from "framer-motion"


function Navbar() {
  return (

    <div className='navbar'>
        <div className='gene'>Gene Hern</div>
        <div className='links'>
            <Link to= "/" className='link'> Home </Link>
            <Link to= "/project" className='link'> Projects </Link>
            <Link to= "/contact" className='link'> Contact me </Link>
        </div>
    </div>

    
  )
}

export default Navbar