import React from 'react'

class VideoItem extends React.Component {
  // videoSrc = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`
  
  renderVideoItem = () => {
    console.log(this.props)
    // const { description, thumbnails, title } = this.props.selectedVideo.snippet
    return (
      <div>Item</div>
      // <div className="selected-video">
      // <iframe width="560" height="315" src={this.videoSrc} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      // {/* <iframes src={this.videoSrc}/> */}
      //   <img alt={title} src={thumbnails.medium.url} />
      //   <div className="selected-video-content">
      //     <h3>{title}</h3>
      //     <p>{description}</p>
      //   </div>
      // </div>
    )
  }
  
  render() {
    return (
      <div className="selected-video-ctn">
        {this.renderVideoItem()}
      </div>
    )
  }
}

export default VideoItem