import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import Metronome from './metronome/Metronome'
import ProjectsHeader from './ProjectsHeader'
import useSound from 'use-sound';


import Sidestick from './ressources/Click.wav';
import Cowbell from './ressources/Cowbell.mp3';
import Woodblock from './ressources/Woodblock.mp3';

const Projects = () => {

  [cowbell] = useSound(Cowbell)
[woodblock] = useSound(Woodblock)
[sidestick] = useSound(Sidestick)

  return (
    <div>
      <div className="ui grid">
      <Router>
        <div className="four wide column">
          <ProjectsHeader />
        </div>
        <div className="twelve wide stretched column">
          <div className="ui container">
            <Route path="/projects/metronome" component={Metronome}/>
          </div>
        </div>
      </Router>
      </div>
    </div>
  )
}

export default Projects