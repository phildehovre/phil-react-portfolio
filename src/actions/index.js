import axios from 'axios'

import { youtube } from '../apis'
import { CLEAR_SONGS, FETCH_VIDEOS } from './types'
import { FETCH_SONGS } from './types'
import { BPM_API_KEY } from '../secrets'


export const fetchVideos = () => async dispatch => {

  const res = await youtube.get('/search', {
    params: {
      q: 'phil de hovre',
    },
  });
  dispatch({
    type: FETCH_VIDEOS,
    payload: res.data.items
  })
}

export const fetchSongs = (bpm) => async dispatch => {
  // console.log('Triggered!')
  const KEY = BPM_API_KEY
  const res = await axios.get(`https://api.getsongbpm.com/tempo/?api_key=${KEY}&bpm=${bpm}`)
  
 dispatch({
   type: FETCH_SONGS,
   payload: res.data.tempo
 })
}

export const clearSongs = () => {
  console.log('called')
  return {
    type: CLEAR_SONGS,
    payload: []
  }
}