import React from 'react'
import { Router, Link } from 'react-router-dom'


import lorem from './ressources/lorem'
import './Homepage.css'

const Homepage = () => {


  return (
    <>

      <header>
        <h1>Welcome</h1>
      </header>
    <div className="hp-text-container">
      <div className="hp-text-box one">
        <h2>Who am I?</h2>
        <p>{lorem}</p>
        <Link className="hp-link-btn" to='' >What I used to do</Link>
      </div>
      <div className="hp-text-box two">
        <h2>What do I do?</h2>
        <p>{lorem}</p>
        <Link className="hp-link-btn" to='/projects/metronome' >Projects</Link>
      </div>
      <div className="hp-text-box three">
        <h2>What do I want to do?</h2>
        <p>{lorem}</p>
      </div>
      <div className="hp-text-box four">
        <h2>What do I want to do?</h2>
        <p>{lorem}</p>
      </div>
    </div>
    </>
  )
}

export default Homepage