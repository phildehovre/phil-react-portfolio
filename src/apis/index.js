import axios from 'axios'

const YT_KEY = 'AIzaSyCwHtIlXhB3Pmy1oDuRXq0fhOjPqn6q7pk'

export const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 12,
        key: YT_KEY
    }
});

export const placeholder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',

})

export const spotify = axios.create({
  baseURL: 'http://api.spotify.com',
  params: {
    
  }

})