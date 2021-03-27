import React from 'react'

class VideoItem extends React.Component {


  
  renderVideoItem = () => {
    if (!this.props.selectedVideo || this.props.selectedVideo === null) return;
    const videoSrc = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`
    const { description, title } = this.props.selectedVideo.snippet
    return (
      <div className="selected-video">
      <iframe width="560" height="315" src={videoSrc} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="selected-video-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    )
  }
  
  render() {
    console.log(this.props)
    return (
      <div className="selected-video-ctn">
        {this.renderVideoItem()}
      </div>
    )
  }
}

export default VideoItem