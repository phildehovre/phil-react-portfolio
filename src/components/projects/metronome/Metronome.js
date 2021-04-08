import React, { useState, useEffect, useCallback } from 'react';
import useSound from 'use-sound';

import UserInterface from './UI';
import './UI.css'
import Sidestick from './ressources/Click.wav';
import Cowbell from './ressources/Cowbell.mp3';
import Woodblock from './ressources/Woodblock.mp3';



const Metronome = () => {

    const [play, setPlay] = useState(false)
    const [bpm, setBpm] = useState(120)
    const [tempoInterval, setTempoInterval] = useState(null)
    const [tapped, setTapped] = useState()
    const [light, setLight] = useState(undefined)
    const [soundEffect, setSoundEffect] = useState('sidestick')
    const [debouncedBpm, setDebouncedBpm] = useState(bpm)

    const [cowbell] = useSound(Cowbell)
    const [woodblock] = useSound(Woodblock)
    const [sidestick] = useSound(Sidestick)

    // Tap Tempo Logic:

    const tapTempo = () => {
      if (tapped) {
        let elapsed = (new Date().getTime()) - tapped
        if (elapsed < 3000) {
          const tappedBpm = Math.round((6000/elapsed)*10)
          setBpm(tappedBpm)
        } else {
          setTapped(new Date().getTime())
        } 
      } 
      setTapped(new Date().getTime())
    } 

    // Tempo selection range limiter:

    // const checkBpm = () => {
    //   if (bpm <= 40) {
    //     setBpm(40)
    //   } else if (bpm >= 220) {
    //     setBpm(220)
    //   }
    // }  

    const playSound = useCallback(() => {
      if (soundEffect === 'cowbell') {
        cowbell()
      } else if (soundEffect === 'woodblock') {
        woodblock()
      } else {
        sidestick()
      }
    }, [soundEffect, cowbell, woodblock, sidestick] )
        
    
    // Sound and Visual:

    const trigger = useCallback( (duration) => {
        if (play) {
          playSound()
          setLight(!true)
          setTimeout(() => {setLight(!false)}, duration/2)
        } else {
          return;
        }
    }, [play, playSound])




    // const trigger = (duration) => {
    //   if (play) {
    //     playSound()
    //     setLight(!true)
    //     setTimeout(() => {setLight(!false)}, duration/2)
    //   } else {
    //     return;
    //   }
    // }
    
    const startClick = () => {
      setPlay(!play)      
    }
    
    // Tempo setter:

    useEffect(() => {
      const intervalId = setInterval(() => {
        trigger(tempoInterval);
      }, tempoInterval)
        return (() => {clearInterval(intervalId)})
    }, [play, tempoInterval, soundEffect, trigger])
    

    useEffect(() => {
        setTempoInterval((60/bpm)*1000);
        if (bpm <= 40) {
          setBpm(40)
        } else if (bpm >= 220) {
          setBpm(220)
        }
        const intervalId = setTimeout(() => {
            setDebouncedBpm(bpm)
            }, 1000);
        return (() => {
            (clearTimeout(intervalId))
        })
    }, [bpm])
        

    return (
        <>
        <div className="interface">
            <UserInterface 
                bpm={bpm}
                debouncedBpm={debouncedBpm} 
                setBpm={setBpm} 
                startClick={startClick} 
                tapTempo={tapTempo}
                light={light}
                isPlaying={play}
                setSoundEffect={setSoundEffect}
                soundEffect={soundEffect}
                />
        </div> 
        </>
    )
}

export default Metronome