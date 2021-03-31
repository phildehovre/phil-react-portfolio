import React, { Component } from 'react'

export default class Contacts extends Component {
  render() {
    return (
      <div>
          <div className="hp-contact-container">
        <a target="_blank" rel="noreferrer" href="mailto:ph.dehovre@gmail.com" className="hp-contact-link">
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
      </div>
    )
  }
}
