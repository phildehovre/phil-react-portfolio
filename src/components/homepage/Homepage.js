import React from 'react'
import { Link } from 'react-router-dom'


import lorem from './ressources/lorem'
import { whoAmI } from './content'
import { whatDoIDo } from './content'
import './Homepage.css'

const Homepage = () => {


  return (
    <>
      <header className="hp-title-container">
        <h1 className="hp-title">Welcome, You!</h1>
      </header>
    <div className="hp-text-container">
      <div className="hp-text-box one">
        <h2>Who am I?<hr /></h2> 
        {whoAmI()}
        <Link className="hp-link-btn" to='/media' >What I have been doing</Link>
      </div>
      <div className="hp-text-box two">
        <h2>What do I do?<hr /></h2>
        {whatDoIDo()}
        <Link className="hp-link-btn" to='/projects/metronome2' >Projects</Link>
      </div>
      <div className="hp-text-box three">
        <h2>What do I want to do?<hr /></h2>
        <p>{lorem}</p>
        <Link className="hp-link-btn" to='/contact' >Contact me</Link>
      </div>
      <div className="hp-text-box four">
        <h2>What do I want to do?</h2>
        <p>{lorem}</p>
      </div>
    </div>
    <div className="hp-contact-container">
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/phildehovre/?hl=en" className="hp-contact-link">
          <i className="icon envelope square huge" ></i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/phil-de-hovre-7913991b3/" className="hp-contact-link">
          <i className="icon linkedin huge" ></i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/phildehovre" className="hp-contact-link">
          <i className="icon github huge" ></i>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/user/de0vr" className="hp-contact-link">
          <i className="icon youtube huge" ></i>
        </a>
        </div>
    </>
  )
}

export default Homepage