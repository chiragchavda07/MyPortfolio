import React from 'react'
import ProjectItem from '../Components/ProjectItem'
import Img from '../assets/MyImage.jpg';
import "../styles/Projects.css"
function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
        <ProjectItem name="abc" image={Img}/>
        <ProjectItem name="xyz" image={Img}/>
        <ProjectItem name="pqr" image={Img}/>
      </div>
    </div>
  )
}

export default Projects