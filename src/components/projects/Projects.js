import React from 'react'
import { Link } from 'react-router-dom'



const Projects = () => {



  return (
      <div className="projects-navbar-ctn">
        <h1>Projects: </h1>
        <div className="projects-navbar">
          <Link className="projects-navbar-link" to="/projects/metronome">Metronome</Link>
          <Link className="projects-navbar-link" to="/projects/tastify">Tastify</Link>
          <Link className="projects-navbar-link" to="/">Home</Link>
        </div>
      </div>
  )
}

export default Projects