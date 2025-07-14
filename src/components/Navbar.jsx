import React from 'react'
import { Link } from 'react-router-dom'
import homeicon from '../icons/homeicon.png'
import abouticon from '../icons/abouticon.png'
import contacticon from '../icons/contacticon.png'
import projecticon from '../icons/projecticon.png'
import skillsicon from '../icons/skillsicon.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-container'>
            <ul className='nav-menu'>
                <li className='nav-item'><Link to='/skills' className='nav-link'><img src={skillsicon} alt="skills" className='nav-icon'/></Link></li>
                <li className='nav-item'><Link to='/about' className='nav-link'><img src={abouticon} alt="about"  className='nav-icon' /></Link></li>
                <li className='nav-item'><Link to='/' className='nav-link'><img src={homeicon} alt="home"  className='nav-icon'/></Link></li>
                <li className='nav-item'><Link to='/project' className='nav-link'><img src={projecticon} alt="project"  className='nav-icon'/></Link></li>
                <li className='nav-item'><Link to='/contact' className='nav-link'><img src={contacticon} alt="contact"  className='nav-icon'/></Link></li>
               
            </ul>
            
        </div>
       
    </nav>
  )
}

export default Navbar