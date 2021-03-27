import React, { Component } from 'react'
import { connect } from 'react-redux'

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

  selectVideo = (clickedId) => {
    const selected = this.props.videos.find(video => video.id.videoId === clickedId)
    this.setState({selectedVideo: selected})
  }
  
  render() {
    return (
      <>
        <header className="hp-title-container">
          <h1 className="hp-title">PHIL DE HOVRE:MUSICIAN</h1>
        </header>
        <div>
          <VideoItem selectedVideo={this.state.selectedVideo}/>
          <div className="video-list-global-ctn">
            <VideoList videos={this.props.videos} selectVideo={this.selectVideo}/>

          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  return {
    videos: state.videos,
  }
}

export default connect(mapStateToProps, { fetchVideos })(Media)