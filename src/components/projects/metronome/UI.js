import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


import SongListRefactor from './SongListRefactor'
import { fetchSongs, clearSongs } from '../../../actions'
import './slider.css'

const Tempo = ({ 
  bpm, 
  setBpm, 
  startClick, 
  tapTempo, 
  light, 
  isPlaying, 
  soundEffect, 
  setSoundEffect,
  songs,
  fetchSongs,
  clearSongs,
  debouncedBpm
}) => {

  const [showDropdown, setShowDropdown] = useState(false)
  const [isDropdownClosing, setIsDropdownClosing] = useState(false)
  const [showSongList, setShowSongList] = useState(false)
  const [listSize, setListSize] = useState(25)


  const onDropdownDismiss = () => {
    setIsDropdownClosing(true)
    setTimeout(() => {
      setShowDropdown(false)
      setIsDropdownClosing(false)
    }, 500);
  }

const renderInput = () => {
  return (
    <input 
      type="number" 
      className={`bpm-display ${!light && isPlaying ? `flash`: ``}`}
      value={bpm} 
      min="40" max="220" 
      onChange={(e) => setBpm(Number(e.target.value))}
  />
  )
}

const renderRangeSelector = () => {
  return (
    <input 
      className="bpm-range" 
      type="range" 
      min="40" 
      max="220" 
      value={bpm} 
      onChange={(e)=> {setBpm(Number(e.target.value))}}/>
  )
}
  
const renderedSoundEffects = () => {
  const soundEffects = ['sidestick', 'cowbell', 'woodblock']
  if (showDropdown) {
    return soundEffects.map(effect => {
        return (
            <option 
              key={effect} 
              className="sound-option" 
              value={effect}
              onClick={(e) => setSoundEffect(e.target.value)}
            >
            {`${effect[0].toUpperCase()}${effect.slice(1)}`}
            </option>
        )
      })
    };
  return null
};

const handleDropdownRetract = () => {
  if (showDropdown) {
    setIsDropdownClosing(true)
    setTimeout(() => {
      setShowDropdown(!showDropdown)
      setIsDropdownClosing(false)
    }, 500);
  } else {
    setShowDropdown(!showDropdown)
  }
};



const renderDropdown = () => {
  return (
    <div 
      className={`dd-container ${showDropdown? `active`: ``}`} 
      onClick={() => handleDropdownRetract()}
      >
      <div className="dd-header">{`${soundEffect[0].toUpperCase()}${soundEffect.slice(1)}`}
        <span className="custom-arrow"></span>
      </div>
      <div className={`dd-list ${showDropdown? ``: `hidden`} ${isDropdownClosing? `closing`: ``}`}>
        {renderedSoundEffects()}
      </div>
    </div>
  )
};

const handleFetchSongs = (bpm) => {
  setShowSongList(false)
  clearSongs()
  fetchSongs(bpm)
  setShowSongList(true)
}

const handleSetListSize = (e) => {
  const size = e.target.value
  const min = 1
  const max = 150
  if (size < min) {
    setListSize(min)
  } else if (size > max) {
    setListSize(max)
  } else {
    setListSize(size)
  }
}

return (
  <div className="global-ctn" onClick={() => onDropdownDismiss()}>
    <div className="metro-box-container">
      <div className="metro-box">
        <div className="metro-title" onClick={startClick}>
          <h1>
            <i className="play icon"></i>
              METRONOME
          </h1>
        </div>
            {renderInput()}
            <div className={`bpm-display-bg ${!light && isPlaying ? `pulse`: ``}`}></div>
            <label value="tempo selection slider"></label>
            {renderRangeSelector()}
              <button className="metro-btn down" onClick={() => setBpm(bpm - 1)} >
                <i className="angle double left icon"></i>
              </button>
              <button className="metro-btn play" onClick={startClick}>
                <i className={`${isPlaying ? `pause`: `play`} icon`}></i>
              </button>
              <button className="metro-btn up" onClick={() => setBpm(bpm + 1)} >
                <i className="angle double right icon"></i>
              </button>
            <button className="metro-btn tap"  onClick={tapTempo}>
              Tap
            </button>
              <label value="sound selection"></label>
              <div className="metro-custom-dd" onClick={e => e.stopPropagation()}>
                {renderDropdown()}
              </div>
              <div className="metro-generate-ctn">
                <button className="metro-btn generate" onClick={() => handleFetchSongs(debouncedBpm)}>Generate songs</button>
                <input className="listsize-input" type="number" min="1" max="150" value={listSize} onChange={e => handleSetListSize(e)}/>
              </div>
      </div><br />
  </div>
      <div className="metro-text-box">
      <h3>My metronome application<hr/></h3>
        <p>
        This simple metronome is my first completed project. It has all the functionality you would expect from a hand-held physical metronome, with a few notable additions.<br /><br />
        The BPM or "beats per minute" display shows the selected tempo and flashes with every beat as a visual  aid for situations where sounds cannot be emitted or heard.<br /><br />
        The most interesting part of working out the mechanics of this functionality was the "Tap Tempo" button that allows the user to automatically calculate the tempo of a piece of music by clicking in rhythm with the audio they are listening to.
        This is a very useful tool for musicians who need to quickly transcribe a piece a music and pinpoint the tempo of a particular piece. <br /><br />
        At the bottom, a dropdown menu allows for the user to choose different sound effects. I have extensive knowledge of Logic Pro X which allowed me to create these samples myself.
        </p>
        {/* <br /> */}
      {/* <div className="metro-link-btn-ctn">
        <Link className="metro-link-btn" to="/"> Back to the homepage</Link>
      </div> */}
      </div>
      <SongListRefactor 
        bpm={bpm} 
        showSongList={showSongList}
        listSize={listSize}
        />
  </div>
 )
}


const mapStateToProps = state => {
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps, { fetchSongs, clearSongs })(Tempo)
