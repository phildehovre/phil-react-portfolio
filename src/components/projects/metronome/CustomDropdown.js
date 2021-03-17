import React, { Component } from 'react'

export default class CustomDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDropdown: false,
      soundEffects: ['sidestick', 'cowbell', 'woodblock'],
      selectedSoundEffect: this.props.soundEffect
    }
  }

  renderedSoundEffects = () => {
    if (this.state.showDropdown) {
      return this.state.soundEffects.map(effect => {
          return (
              <option 
                key={effect} 
                className="sound-option" 
                value={effect}
                onClick={(e) => this.props.handleSoundSelect(e.target.value)}
              >
              {`${effect[0].toUpperCase()}${effect.slice(1)}`}
              </option>
      )
    })
    }
    return null
  }

  renderDropdown = () => {
    return (
      <div className={`dd-container ${this.state.showDropdown? `active`: ``}`} onClick={() => this.setState({showDropdown: !this.state.showDropdown})}>
        <div className="dd-header">{`${this.props.soundEffect[0].toUpperCase()}${this.props.soundEffect.slice(1)}`}
          <span className="custom-arrow"></span>
        </div>
        <div className={`dd-list ${this.state.showDropdown? ``: `hidden`}`}>
          {this.renderedSoundEffects()}
        </div>
      </div>
    )
  }


  render() {
    return (
      this.renderDropdown()
    )
  }
  
  // render() {
  //   return (
  //     <div className="dd-container" onClick={() => this.setState({showDropdown: !this.state.showDropdown})}>
  //       <div className="dd-header">{`${this.props.soundEffect[0].toUpperCase()}${this.props.soundEffect.slice(1)}`}
  //         <span className="custom-arrow"></span>
  //       </div>
  //         {this.renderedSoundEffects()}
  //     </div>
  //   )
  // }
}
