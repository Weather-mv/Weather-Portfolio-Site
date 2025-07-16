import React from 'react'
import Projectbar from '../components/Projectbar'
const Projects = () => {
  return (
    <div className='project-container'>
      <div className='project-section'>
        <h1>Projects</h1>
        <Projectbar/>
      </div>

      <div className='project-detail'>
        <h1>Details</h1>
        <h2>Project Title</h2>
        <img src="" alt="" /> /* add image */
        
        <ul className='project-more-details'>
          <li className='project-role'>Role</li>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.</p>


          <li className='project-role'>Tools & Technologies</li>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.</p>
          
          <li className='project-role'>Goal</li>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.</p>

          <li className='project-role'>Features Implemented</li>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.</p>

          <li className='project-role'>Results/Impact</li>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.</p>

          <li className='project-role'>Live Link / Github / Case Study</li>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.</p>

          <li className='project-role'>Social Links</li>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.</p>
        </ul>
      </div>
    </div>
  )
}

export default Projects