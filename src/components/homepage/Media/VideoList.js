import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchVideos } from '../../../actions'

class VideoList extends Component {

  componentDidMount() {
    this.props.fetchVideos()
    console.log(this.props.videos)
  }
  
  renderVideoList() {
    if (this.props.videos > 1) {
      // console.log(this.props.videos)
      return this.props.videos[0].map(video => {
        return (
          <div>
            {video.snippet.title}
          </div>
        )
      })
    } else {
      return 'Loading...'

    }
  }
  
  render() {
    return (
      <div className="ui container">
        <div className="ui relaxed divided list">
          {this.renderVideoList()}
        </div>
          <Link className="hp-link-btn" to="/">Back to the homepage</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  }
}


export default connect(mapStateToProps, {fetchVideos: fetchVideos} )(VideoList)