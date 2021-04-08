import { combineReducers } from 'redux'
import { videoReducer } from './videoReducer'
import { songsReducer } from './songsReducer'

export default combineReducers({
  videos: videoReducer,
  songs: songsReducer
})