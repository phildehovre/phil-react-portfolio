import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProjectsList extends Component {
  render() {
    return (
      <>
      {/* <ProjectsNav /> */}
      <div className="projects-grid-ctn">
      <div className="projects-text-box">
      <h3>My metronome application<hr/></h3>
        <p>
        This simple metronome is my first completed project. It has all the functionality you would expect from a hand-held physical metronome, with a few notable additions.<br /><br />
        The BPM or "beats per minute" display shows the selected tempo and flashes with every beat as a visual  aid for situations where sounds cannot be emitted or heard.<br /><br />
        The most interesting part of working out the mechanics of this functionality was the "Tap Tempo" button that allows the user to automatically calculate the tempo of a piece of music by clicking in rhythm with the audio they are listening to.
        This is a very useful tool for musicians who need to quickly transcribe a piece a music and pinpoint the tempo of a particular piece. <br /><br />
        At the bottom, a dropdown menu allows for the user to choose different sound effects. I have extensive knowledge of Logic Pro X which allowed me to create these samples myself.
        </p>
        <br />
      <div className="metro-link-btn-ctn">
        <Link className="metro-link-btn" to="/projects/metronome">Go</Link>
      </div>
      </div>
      <div className="projects-text-box">
      <h3>My metronome application<hr/></h3>
        <p>
        [PLACEHOLDER] Tasteify here is some new development of a brand new concept called "Tastify". The idea behind this app is to promote the "good living" or "hygge". <br />
      Most people do not yet benefit from the knowledge that the capacity for the human brain to enjoy food increases by orders of magnitude if paired with the perfect music to go along with the consumption.
      Food is more than just taste and should be coupled with all other sensorial experiences to completely transform the experience of eating. <br/>
        [PLACEHOLDER] Tasteify here is some new development of a brand new concept called "Tastify". The idea behind this app is to promote the "good living" or "hygge". <br />
      Most people do not yet benefit from the knowledge that the capacity for the human brain to enjoy food increases by orders of magnitude if paired with the perfect music to go along with the consumption.
      Food is more than just taste and should be coupled with all other sensorial experiences to completely transform the experience of eating.
        </p>
        <br />
      <div className="metro-link-btn-ctn">
        <Link className="metro-link-btn" to="/"> Back to the homepage</Link>
      </div>
      </div>
      </div>
      </>
    )
  }
}
