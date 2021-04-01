import React, { Component } from 'react'
import { db } from '../firebase'
import './Homepage.css'

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitting')
    db.collection("messages").add({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    })
    .then(() => {
      alert('Message sent!')
    })
    .catch(err => {
      alert(err.message)
    }).then(() => {
      this.setState({
        name: '',
        email: '',
        message: ''
      })
    })
  }

  render() {
    return (
      <div className="metro-form-ctn">
        <form onSubmit={this.handleSubmit}>
          <label>Contact form</label>
          <input 
            placeholder="Name" 
            onChange={(e) => this.setState({name: e.target.value})}
            value={this.state.name}
            />
          <input 
            placeholder="Email address" 
            onChange={(e) => this.setState({email: e.target.value})}
            value={this.state.email}
            />
          <textarea 
            placeholder="Message" 
            onChange={(e) => this.setState({message: e.target.value})}
            value={this.state.message}
            />
          <button >Submit</button>
        </form>
      </div>
    )
  }
}

export default ContactForm