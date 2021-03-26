import React, { Component } from 'react'
import { connect } from 'react-redux'

import VideoList from './VideoList'
import VideoItem from './VideoItem'
import { fetchVideos } from '../../../actions'
import './Media.css'


class Media extends Component {

  state = {
    selectedVideo: null
  }

  componentDidMount() {
    this.props.fetchVideos()
    // this.props.fetchVideo()

    this.setState({selectedVideo: this.props.videos.find(video => video.id.videoId === 'D-MHHZoO3W0')})
    this.selectVideo('D-MHHZoO3W0')
  }

  selectVideo = async (id) => {
    if (!this.props.videos) return 'loading ...'
    const selected = await this.props.videos.find(video => video.id.videoId === id)
    this.setState({selectedVideo: selected})
  }
  
  render() {
    return (
      <>
        <header className="hp-title-container">
          <h1 className="hp-title">PHIL DE HOVRE:MUSICIAN</h1>
        </header>
        <div>
          <VideoItem selectedVideo={this.props.selectedVideo}/>
          <VideoList videos={this.props.videos} selectVideo={this.selectVideo}/>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    videos: state.videos,
  }
}

export default connect(mapStateToProps, { fetchVideos })(Media)