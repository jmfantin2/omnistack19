import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.10:3333',
  // the last part of the expo IP may
  // change on each execution
});

export default api;