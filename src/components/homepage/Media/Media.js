import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import VideoList from './VideoList'
import VideoItem from './VideoItem'
import { fetchVideos } from '../../../actions'
import './Media.css'


class Media extends Component {

  state = {
    selectedVideo: null,
  }

  componentDidMount() {
    this.props.fetchVideos()
  }

  selectVideo = (clickedVideo) => {
    const selected = this.props.videos.find(video => video.id.videoId === clickedVideo.id.videoId)
    this.setState({selectedVideo: selected})
  }
  
  render() {
    return (
      <>
        <header className="hp-title-container">
          <Link to="/">
            <h1 className="hp-title">PHIL DE HOVRE:MUSICIAN</h1>
          </Link>
        </header>
        <div className="selected-video-ctn">
          <VideoItem selectedVideo={this.state.selectedVideo}/>
        </div>
          <VideoList videos={this.props.videos} selectVideo={this.selectVideo}/>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  }
}

export default connect(mapStateToProps, { fetchVideos })(Media)