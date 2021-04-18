import React, { Component } from 'react'

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '531838176669-tpcq9fg22j2m3sgh0d95kcesffgaoo7j.apps.googleusercontent.com',
        // client_id: '1058805176091-t1mktd0pj9hr07a2olhq7k71qr1ifalj.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get()})
      })
    })
  }

  render() {
    return (
      <div>
        GoogleAuth
      </div>
    )
  }
}

export default GoogleAuth
