import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class VideoList extends Component {

    selectVideo = (id) => {
      this.props.selectVideo(id)
    }

    renderVideoList() {
      if (this.props.videos.length < 1) {
        return (
          <div>
            <h1>Loading ...</h1>
          </div>
        )
      }
      return this.props.videos.map(video => {
        return (
          <div key={video.id.videoId} className="item" onClick={() => this.selectVideo(video.id.videoId)}>
            <img alt={video.snippet.title} src={video.snippet.thumbnails.default.url} />
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
          </div>
        )
      })
  }
  
  render() {
    return (
      <div className="video-list-global">
        <div className="video-list-ctn">
          {this.renderVideoList()}
        </div>
          <Link className="hp-link-btn" to="/">Back to the homepage</Link>
      </div>
    )
  }
}

export default VideoList