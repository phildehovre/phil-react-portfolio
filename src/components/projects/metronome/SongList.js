import React from 'react'
import { connect } from 'react-redux'

// fetchSongs button must turn inactive if tempo has not changed

class SongList extends React.Component {
  state = {
    listSize: 25,
    displayTableHeaders: false
  }

   
  renderSongList = () => {
    if (this.props.songList.length < 1) {
      return (<div className="metro-songlist-loader"></div>)
    } 
    if (this.props.songList !== null) {
      const songs = this.props.songList.slice(0, this.state.listSize)
      console.log(songs.slice(0, 26))
      return songs.map(song => {
        return (
          <>
          <tr key={song.song_id}>
          <td>
            <div className="metro-songlist-btn"></div>
            <i className="play icon small" />
          </td>
            <td>{song.song_title}</td>
            <td>{song.artist.name}</td>
            <td>{song.album.title}</td>
            <td>{song.album.year}</td>
            <td>{song.artist.genres[0]+`, `+song.artist.genres[1]}</td>
          </tr>
          </>
        )
      })
    }
  }

  render() {
    return (
      <div className="metro-songlist-ctn">
        {this.props.showSongList && (
          <table>
            <thead>
              <tr>
                <th>Select</th>
                <th>Title</th>
                <th>Artist </th>
                <th>Album</th>
                <th>Year</th>
                <th>Genres</th>
              </tr>
            </thead>
            <tbody>
              {this.props.showSongList? this.renderSongList(): null}
            </tbody>
            </table>
        )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    songList: state.songs
  }
}

export default connect(mapStateToProps)( SongList )