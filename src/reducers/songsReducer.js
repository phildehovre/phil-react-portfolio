import { FETCH_SONGS } from '../actions/types'

export const songsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SONGS:
     return action.payload
    default:
      return state;
  }
}