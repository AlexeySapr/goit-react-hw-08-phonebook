import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});
