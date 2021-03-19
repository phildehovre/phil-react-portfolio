import axios from 'axios'

const KEY = 'AIzaSyCwHtIlXhB3Pmy1oDuRXq0fhOjPqn6q7pk'


export const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
