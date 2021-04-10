import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from '../components/history'

import Homepage from './homepage/Homepage'
import Misc from './Misc'
import Metronome from './projects/metronome/Metronome'
import Projects from './projects/Projects'
import Tastify from './projects/tastify/Tastify'
import Media from './homepage/Media/Media'
import ContactForm  from './homepage/ContactForm'
import Playground from './Playground'
import TrackList from './TrackList'

export default function App() {
  return (
    <Router history={history}>
      <Route path="/" exact component={Homepage}/>
      <Route path="/misc" exact component={Misc} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/metronome" exact component={Metronome} />
      <Route path="/projects/tastify" exact component={Tastify} />
      <Route path="/media" exact component={Media} />
      <Route path="/contact" exact component={ContactForm} />
      <Route path="/playground" exact component={Playground} />
      <Route path="/tracklist" exact component={TrackList} />
    </Router>
  )
}



