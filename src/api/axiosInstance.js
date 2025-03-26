import axios from 'axios';
import config from '../config';

const api = axios.create({
  baseURL: config.TMDB_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    config.params = config.params || {};
    config.params['api_key'] = config.TMDB_API_KEY;
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
