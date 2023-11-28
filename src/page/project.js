import React from 'react'
import "../styles/project.scss"
import Navbar from '../components/navbar'
import sort from "../images/sort.png"
import github from "../images/github.png"


function Project() {
  return (
    <div className='block'>
   <Navbar />
    <div className='grid'>
    <div className='header'>
      <a href = "https://github.com/genehern/sort/blob/main/csv_analyser.py" target= "_blank" > <img className ='github' src={github}></img> </a>
      <h2>Python Script to automate admin job</h2>  </div>
    <div className='content'>
      <div className='grid-item-1'><img src={sort}></img></div>
      <div className='grid-item-2'>
      
          <p>I was hired to do an admin job which involved in me allocating students to their desired course based on a first-come-first-serve basis, as there were limited slots for each course. I then has to group these students based on their classes and their allocated course. </p>
          <p>I automated this job by converting the google sheet to a CSV file wrote a python script to allocate it for me. A problem that I faced was that some students submitted multiple times (they changed their minds after submitting the first time) which resulted in duplicated responses. I solved this by creating a dictionary with their emails to remove all duplicated responses.</p>
          <p className='footer'>Click on Github logo to see the code!</p>
          <p className='footer'>Names and email addresses were deleted for the privacy of participants</p>
          </div>
      </div>
      
  
    </div>
      
    
    </div>
  )
}

export default Project