import axios from 'axios'

const KEY = 'AIzaSyCwHtIlXhB3Pmy1oDuRXq0fhOjPqn6q7pk'


export const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 12,
        key: KEY
    }
});

export const placeholder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',

})