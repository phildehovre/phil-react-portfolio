import { youtube } from '../apis'
import { FETCH_VIDEOS } from './types'


export const fetchVideos = () => async dispatch => {

  const res = await youtube.get('/search', {
    params: {
      q: 'phil de hovre',
    },
  });
  console.log(res.data.items)
  dispatch({
    type: FETCH_VIDEOS,
    payload: res.data.items
  })
}