import React, { Component } from 'react'

class ContactForm extends Component {
  render() {
    return (
      <div>
        <form>
          <label>Contact form</label>
          <input type="text" />
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default ContactForm