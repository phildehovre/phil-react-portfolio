import React from 'react'
import { Link } from 'react-router-dom'

import { whatDoIWantToDo, whoAmI, whatDoIDo } from './content'
import Contacts from './Contacts'
import './Homepage.css'

const Homepage = () => {


  return (
    <div className="hp-global-container">
      <header className="hp-title-container">
        <h1 to="/" className="hp-title" >PHIL DE HOVRE</h1>
        <div className="hp-header-contact">
          <p>ph_dehovre@gmail.com</p>
          <p>+44 (0)7907318221</p>
        </div>
      </header>
    <div className="hp-text-container">
      <div className="hp-text-box one">
        <h2>Who am I?<hr /></h2> 
        {whoAmI()}
        <Link className="hp-link-btn" to='/media' >Previously</Link>
      </div>
      <div className="hp-text-box two">
        <h2>What do I do?<hr /></h2>
        {whatDoIDo()}
        <Link className="hp-link-btn" to='/projects/metronome' >Projects</Link>
      </div>
      <div className="hp-text-box three">
        <h2>What do I want to do?<hr /></h2>
        {whatDoIWantToDo()}
        <Link className="hp-link-btn" to='/contact' >Contact me</Link>
      </div>
    </div>
        <Contacts />
    </div>
  )
}

export default Homepage