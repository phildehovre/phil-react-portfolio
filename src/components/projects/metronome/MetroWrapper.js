import React from 'react'
import useSound from 'use-sound';

import Refactor from './Refactor'
import Sidestick from './ressources/Click.wav';
import Cowbell from './ressources/Cowbell.mp3';
import Woodblock from './ressources/Woodblock.mp3';

const MetroWrapper = () => {

const [cowbell] = useSound(Cowbell)
const [woodblock] = useSound(Woodblock)
const [sidestick] = useSound(Sidestick)

const playSound = (sound) => {
    if (sound === 'cowbell') {
      cowbell()
    } else if (sound === 'woodblock') {
      woodblock()
    } else {
      sidestick()
    }
}

  return (
    <div>
      <Refactor 
        playSound={playSound}
      />
    </div>
  )
}

export default MetroWrapper