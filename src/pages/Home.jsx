import React from 'react'
import githubicon from '../icons/githubicon.png'
import twittericon from '../icons/twittericon.png'
import linkedinicon from '../icons/linkedinicon.png'
import instagramicon from '../icons/instagramicon.png'

const Home = () => {
  return (
    <div className='home'>
      <div className='profile-title'>
        <h1>Mousam Vishwakarma</h1>
        <h2>Designer/Developer/Engineer</h2>
        <h3>Looking for new opportunities</h3>

       
        <div className='social-links'>
          <img src={githubicon} alt="github" />
          <img src={instagramicon} alt="instagram" />
          <img src={linkedinicon} alt="linkedin" />   
          <img src={twittericon} alt="twitter" />
        </div>
        <button className='contact-btn'>Contact Me</button>
        <button className='copy-btn'>Copy Email</button>
      </div>

      <div className='about-section'>
        <h1>About</h1>
        <p>
          I am Mousam Vishwakarma, a designer / developer / engineer.
        </p>
        <h3>
          with a deep passion in building things, i’m passionate frontend 
          developer / designer with a relentless curiosity.   

          I live for clean code, seamless user experiences, and uncovering 
          the ‘WHY’ behind every challenge. With a boundless energy and 
          a knack for learning technologies i wasn’t required to master. 
        </h3>
      </div>

      <div className='projects-detail'>
        <h1>Projects</h1>
      </div>
    
    </div>
  )
}

export default Home