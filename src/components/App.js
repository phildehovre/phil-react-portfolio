import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Homepage from './homepage/Homepage'
import Misc from './Misc'
import Metronome from './projects/metronome/Metronome'
import MetroWrapper from './projects/metronome/MetroWrapper'

import Media from './homepage/Media/Media'
import ContactForm  from './homepage/ContactForm'
// import Projects from './projects/Proj2ects'
// import Header from './Header'

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={Homepage}/>
      <Route path="/misc" exact component={Misc} />
      <Route path="/projects/metronome2" exact component={Metronome} />
      <Route path="/projects/metronome" exact component={MetroWrapper} />
      <Route path="/media" exact component={Media} />
      <Route path="/contact" exact component={ContactForm} />
      {/* <Header /> */}
      {/* <Route path="/projects" exact component={Projects} /> */}
    </Router>
  )
}

