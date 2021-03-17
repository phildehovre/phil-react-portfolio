import React from 'react'

import lorem from './ressources/lorem'
import './Homepage.css'

const Homepage = () => {


  return (
    <div>
      <header>
        <h1>Welcome</h1>
      </header>
      <section>
        <h2>Who am I?</h2>
        <p>{lorem}</p>
      </section>
      <section>
        <h2>What do I do?</h2>
        <p>{lorem}</p>
      </section>
      <section>
        <h2>What do I want to do?</h2>
        <p>{lorem}</p>
      </section>
    </div>
  )
}

export default Homepage