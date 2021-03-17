import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Projects from './projects/Projects'
import Homepage from './homepage/Homepage'
import Header from './Header'
import Misc from './Misc'

export default function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Homepage}/>
      <Route path="/projects" exact component={Projects} />
      <Route path="/misc" exact component={Misc} />
    </Router>
  )
}

