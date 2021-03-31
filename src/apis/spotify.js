import axios from 'axios'
import qs from 'qs'



export const getAuth = async () => {
  // const CLIENT = '1b6e57ce73a04adba0cb72a6173d6604'
  const CLIENT = env.SPOT_API_CLIENT
  const SCRT = env.SPOT_API_SECRET
  // const SCRT = 'f8f36d78b3e74452ae07f9d24256269f'
  
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