import React from 'react'
import { connect } from 'react-redux'

// fetchSongs button must turn inactive if tempo has not changed

class SongListRefactor extends React.Component {
  state = {
    listSize: 25,
    displayTableHeaders: false
  }

  
  renderTable = () => {
    const songs = this.props.songList.slice(0, this.state.listSize)
    return songs.map((song, i) => {
      i = i +1
      return (
        <tr key={song.song_id}>
        <td>{i}
          {/* <div className="metro-songlist-btn"></div>
          <i className="play icon small" /> */}
        </td>
          <td>{song.song_title}</td>
          <td>{song.artist.name}</td>
          <td>{song.album.title}</td>
          <td>{song.album.year}</td>
          <td>{song.artist.genres[0]+`, `+song.artist.genres[1]}</td>
        </tr>
      )
    })
  }

  renderSongList = () => {
      if (this.props.songList.length < 1 && this.props.showSongList) {
      return (
        <div className="metro-songlist-loader"></div>
      )}
      if (this.props.songList && this.props.showSongList) {
      return (      
      
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Artist </th>
              <th>Album</th>
              <th>Year</th>
              <th>Genres</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
          </table>
      )
    }
  }

  render() {
    console.log(this.props.songList)
    return (
      <div className="metro-songlist-ctn">
        {this.renderSongList()}
      </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    songList: state.songs
  }
}

export default connect(mapStateToProps)( SongListRefactor )