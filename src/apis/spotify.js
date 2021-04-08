import axios from 'axios'
import qs from 'qs'
import {SPOT_API_CLIENT} from '../secrets'
import {SPOT_API_SECRET} from '../secrets'



export const getAuth = async () => {
  // const CLIENT = '@spot_api_client'
  // const SCRT = '@spot_api_secret'
  const CLIENT = SPOT_API_CLIENT
  const SCRT = SPOT_API_SECRET
  
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: CLIENT,
      password: SCRT,
    },
  };
  const data = {
    grant_type: 'client_credentials',
  };

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers
    );
    console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
};