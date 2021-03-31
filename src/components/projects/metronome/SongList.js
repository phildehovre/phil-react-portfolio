import React from 'react'
// import _ from 'lodash'
import axios from 'axios'

// fetchSongs button must turn inactive if tempo has not changed

class SongList extends React.Component {
  state = {
    songs: null,
    listSize: 25,
    displayTableHeaders: false
  }
  
  componentDidMount() {
    const KEY = env.BPM_API_KEY
        axios.get(`https://api.getsongbpm.com/tempo/?api_key=${KEY}&bpm=${this.props.bpm}`, {
    })
    .then(res => {
      const sampledSongs = res.data.tempo.slice(0, this.state.listSize)
      this.setState({songs: sampledSongs})
    })
    .catch(err => console.log(err))
  }
  
  
  
  fetchSongs = () => { 
    this.setState({displayTableHeaders: !this.state.displayTableHeaders})
    // if (this.state.songs) {
    //   let sampledIndex = []
    // while (this.state.listSize--) {
    //   let i = Math.floor(Math.random()*250)
    //   sampledIndex.push(i)
    // }

    // let sampledSongs = []
    //   sampledIndex.forEach(i => {
    //     sampledSongs.push(this.state.songs[i])
    //   })
    // this.setState({sampledSongs: sampledSongs})
    // }
  }

  renderSongList = () => {
    if (this.state.songs) {
      return this.state.songs.map(song => {
        return (
          <tr key={song.song_id}>
            <td>{song.song_title}</td>
            <td>{song.artist.name}</td>
            <td>{song.album.title}</td>
            <td>{song.album.year}</td>
            <td>{song.artist.genres[0]+`, `+song.artist.genres[1]}</td>
          </tr>
        )
      })
    }
  }

  render() {
    console.log(this.state.sampledSongs)
    console.log(this.state.songs)
    return (
      <>
        <button onClick={() => this.fetchSongs()}>Generate songs</button>
        {this.state.displayTableHeaders && (
          <table>
            <tr>
              <th>Title</th>
              <th>Artist </th>
              <th>Album</th>
              <th>Year</th>
              <th>Genres</th>
            </tr>
            <tbody>
              {this.state.displayTableHeaders? this.renderSongList(): null}
            </tbody>
            </table>
        )
        }
      </>
    )

  }
}

export default SongList