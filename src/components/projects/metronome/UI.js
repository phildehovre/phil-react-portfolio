import React from 'react'

import CustomDropdown from './CustomDropdown'
import './slider.css'
import { LoremIpsum } from '../../../globalRessources'

export default function Tempo({ 
  bpm, 
  setBpm, 
  startClick, 
  tapTempo, 
  light, 
  isPlaying, 
  soundEffect, 
  setSoundEffect,
}) {

const injectSpan = {
    gridColumnStart: 'span 2'
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
  
return (

  <div className="global-container">
    <div className="text-box">
    <LoremIpsum />
    </div>
    <div className="metro-box">
      <div className="title" style={injectSpan}>
        <h1 className="small-title">
          <i className="play icon"></i>
            METRONOME
        </h1>
      </div>
          {renderInput()}
          <div className={`bpm-display-bg ${!light && isPlaying ? `pulse`: ``}`}></div>
          <label value="tempo selection slider"></label>
          {renderRangeSelector()}
          <label value="sound selection"></label>
          <div>
            <CustomDropdown className="custom-select"
              handleSoundSelect={setSoundEffect}
              soundEffect={soundEffect}
            />
            <button className="metro-btn" onClick={() => setBpm(bpm - 1)} >
              <i className="angle double left icon"></i>
            </button>
            <button className="metro-btn" onClick={startClick}>
              <i className={`${isPlaying ? `pause`: `play`} icon`}></i>
            </button>
            <button className="metro-btn" onClick={() => setBpm(bpm + 1)} >
              <i className="angle double right icon"></i>
            </button>
            </div>
            <br />
          <button className="metro-btn tap"  onClick={tapTempo}>
            Tappity McTapFace
          </button>
    </div>
  </div>
 )
}
