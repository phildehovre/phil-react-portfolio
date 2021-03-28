import React, { Component } from 'react'


class VideoList extends Component {
  state = {
    onHoverId: null
  }

  
  selectVideo = (video) => {
    this.props.selectVideo(video)
    }

    handleOnVideoClick = (video) => {
      this.selectVideo(video)
      // history.push(`/video/${video.id.videoId}`)
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
          <div key={video.id.videoId} className="video-list-item-ctn" style={{backgroundImage: `url(${video.snippet.thumbnails.medium.url})`}} 
            onClick={() => this.handleOnVideoClick(video)}
            onMouseEnter={() => {this.setState({onHoverId: video.id.videoId})}}
            onMouseLeave={() => {this.setState({onHoverId: null})}}
            >
            <div style={{display: 'flex'}}>
              {this.renderVideoDecription(video)}
            </div>
          </div>
        )
      })
    }


  renderVideoDecription = (video) => {
    console.log(window)
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
      </div>
    )
  }
}

export default VideoList