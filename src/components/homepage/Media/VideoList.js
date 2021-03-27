import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class VideoList extends Component {
  state = {
    onHoverId: null
  }

  
  selectVideo = (id) => {
    this.props.selectVideo(id)
      console.log(id)
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
        console.log(video.snippet.thumbnails.default.url)
        return (
          <div key={video.id.videoId} className="video-list-item-ctn" style={{backgroundImage: `url(${video.snippet.thumbnails.medium.url})`}} 
            onClick={() => this.selectVideo(video.id.videoId)}
            onMouseEnter={() => {this.setState({onHoverId: video.id.videoId})}}
            onMouseLeave={() => {this.setState({onHoverId: null})}}
            >
            {/* <div className="video-list-test"></div> */}
            <div style={{display: 'flex'}}>
              {/* <img alt={video.snippet.title} src={video.snippet.thumbnails.high.url} /> */}
              {this.renderVideoDecription(video)}
            </div>
          </div>
        )
      })
    }

  renderVideoDecription = (video) => {
    if (this.state.onHoverId === video.id.videoId) {
      return (
        <div className="video-list-item-content">
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
      </div>
      );
    };
  };
  
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