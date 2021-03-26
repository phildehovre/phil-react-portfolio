// import _ from 'lodash'

import { FETCH_VIDEOS} from '../actions/types'

export const videoReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_VIDEOS:
     return [action.payload]
    // case FETCH_VIDEO:
    //  return {...state, [action.payload]: action.payload};
    default:
      return state;
  }
}