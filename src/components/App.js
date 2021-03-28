import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from '../components/history'

import Homepage from './homepage/Homepage'
import Misc from './Misc'
import Metronome from './projects/metronome/Metronome'
import Media from './homepage/Media/Media'
import ContactForm  from './homepage/ContactForm'
import Playground from './Playground'

export default function App() {
  return (
    <Router history={history}>
      <Route path="/" exact component={Homepage}/>
      <Route path="/misc" exact component={Misc} />
      <Route path="/projects/metronome2" exact component={Metronome} />
      <Route path="/media" exact component={Media} />
      <Route path="/contact" exact component={ContactForm} />
      <Route path="/playground" exact component={Playground} />
    </Router>
  )
}



