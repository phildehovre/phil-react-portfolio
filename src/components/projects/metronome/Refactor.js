import React from 'react';

import UserInterface from './UI';
import './UI.css'

class Metronome extends React.Component {

  state = {
    play: false,
    bpm: 120,
    tempoInterval: 500,
    tapped: undefined,
    soundEffect: 'sidestick',
  }

    
    componentDidUpdate() {
        const intervalId = setInterval(() => {
          if (this.state.play) {
            this.trigger(this.state.tempoInterval);
          }
        }, this.state.tempoInterval)
        return (() => {clearInterval(intervalId)})
    }

    setBpm = (value) => {
      this.setState({bpm: value})
      this.setState({tempoInterval: (60/this.state.bpm)*1000});
      this.checkBpm(value);
    }

    setSoundEffect = (value) => {
      this.setState({soundEffect: value})
    }
    
    // Tap Tempo Logic:
    
    tapTempo = () => {
      if (this.state.tapped) {
        let elapsed = (new Date().getTime()) - this.state.tapped
        if (elapsed < 3000) {
          const tappedBpm = Math.round((6000/elapsed)*10)
          this.setState({bpm: tappedBpm})
          this.checkBpm(tappedBpm)
        } else {
          this.setState({tapped: new Date().getTime()})
        } 
      } 
      this.setState({tapped: new Date().getTime()})
    } 

    // Tempo selection range limiter:

    checkBpm = (value) => {
      if (value <= 40) {
        this.setState({bpm: 40});
      } else if (value >= 220) {
        this.setState({bpm: 220});
      }
      return value;
    }  
    
    // Sound and Visual:

    trigger = () => {
        this.props.playSound(this.state.soundEffect)
    }
    
    startClick = () => {
      this.setState({play: !this.state.play})
      
    }
    
    
    render() {
    console.log(this.state.play)
      return (
          <>
          <div className="interface">
              <UserInterface 
                  bpm={this.state.bpm} 
                  setBpm={this.setBpm} 
                  startClick={this.startClick} 
                  tapTempo={this.tapTempo}
                  isPlaying={this.state.play}
                  setSoundEffect={this.setSoundEffect}
                  soundEffect={this.state.soundEffect}
                  />
          </div> 
          </>
      )
    }
}

export default Metronome