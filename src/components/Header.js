import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="ui pointing menu">
      <Link to="/" className="item">Home</Link>
      <Link to="/projects" className="item">Projects</Link>
      <Link to="/misc" className="item">Misc</Link>
    </div>
  )
}
