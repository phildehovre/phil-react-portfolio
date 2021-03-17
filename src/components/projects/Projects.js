import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Metronome from './metronome/Metronome'
import ProjectsHeader from './ProjectsHeader'

const Projects = () => {
  return (
    <div>
      <div className="ui grid">
      <Router>
        <div className="four wide column">
          <ProjectsHeader />
        </div>
        <div className="twelve wide stretched column">
          <div className="ui segment">
            <Route path="/projects/metronome" component={Metronome}/>
          </div>
        </div>
      </Router>
      </div>
    </div>
  )
}

export default Projects