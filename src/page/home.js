import React from 'react'
import Navbar from '../components/navbar'
import mypic from "../images/mypic.jpeg"
import "../styles/home.scss"
import commando from "../images/commando.jpeg"
import hwachong from "../images/hwachong.png"


function Home() {
  return (
    <div className='block'>
    <Navbar />
    <div className='main'>
      <div className='imgDiv'><img src={mypic}></img></div>
      <div className='line'></div>
      <div className='wordDiv'>
        <h2>Hi, I am Gene Hern.</h2>
        <p>
         I've created this website to share more about myself. Scroll down to find out more about me!
         </p>
         </div>
    </div>

    <div className='main'>
      <div className='imgDiv'><img src={commando} className='imgOne'></img></div>
      <div className='line'></div>
      <div className='wordDiv'>
        <h2>Home of the Commandos</h2>
        <h4>Jan 2021- Dec 2022</h4>
        <p>
          I served as a Commando Fighter during National Service, where the importance of accountability and self-owenrship was drilled into me. I was also lucky to have the opportunity to take part in multiple bilateral exercies with countries such as China and Thailand. 
         </p>
         </div>
    </div>
    
    <div className='main'>
        
        <div className='imgDiv'><img src={hwachong} className='imgOne'></img></div>
        <div className='line'></div>
      <div className='wordDiv'>
        <h2>Hwa Chong Institution</h2>
        <h4>Jan 2015- Nov 2021</h4>
        <p>
         I was part of HCI's 6 year IP programme where I graduated in 2021 with straight A's in the GCE A Level's Examination. During my time there, I took on many leadership opportunities such as being a part of the 47th Student's Council where I developed strong interpersonal skills.
         </p> </div>
         
      </div>

      
    
    </div>
  )
}

export default Home