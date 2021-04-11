import { FETCH_SONGS, CLEAR_SONGS } from '../actions/types'

export const songsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SONGS:
     return action.payload;
    case CLEAR_SONGS:
      return action.payload;
    default:
      return state;
  }
}