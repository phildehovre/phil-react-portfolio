import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class wrappedLink extends Component {

  render() {
    return (
        <Link 
          to={this.props.destination} 
          id={this.props.id} 
          className={`${this.props.linkId === this.props.id? 'active': ''} item`}
          onClick={e => this.props.handleLinkSelect(e.target.id)}
          >
          {this.props.projectName}
        </Link>
    )
  }
}
