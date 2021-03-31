import React, { Component } from 'react'
import axios from 'axios'
import qs from 'qs'

export default class TrackList extends Component {
  state = {auth_token: null}

  getAuth = async () => {
  const CLIENT = '1b6e57ce73a04adba0cb72a6173d6604'
  const SCRT = 'f8f36d78b3e74452ae07f9d24256269f'
  
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: CLIENT,
      password: SCRT,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );
    // console.log(response.data.access_token);
    this.setState({auth_token: response.data.access_token});
  } catch (error) {
    console.log(error);
  }
};

  fetchSong = () => {
    if (this.state.auth_token) {
      axios({
        method: 'get',
        url: "https://api.spotify.com/v1/search/",
        params: {
          q: 'love',
          type: 'artist'
        },
        headers: {
          'Authorization': `Bearer ${this.state.auth_token}`
        }
      }).then(res => console.log(res))
    } else {
      console.log(this.state.auth_token)
    }
  }

  componentDidMount() {
    this.getAuth()
  }
  
  
  
  render() {
    return (
      <div>
        <button onClick={() => this.fetchSong()}>CLICK ME</button>
      </div>
    )
  }
}
