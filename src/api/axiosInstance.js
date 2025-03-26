import axios from 'axios';
import config from '../configs';

const api = axios.create({
  baseURL: config.TMDB_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (conf) => {
    conf.params = conf.params || {};
    conf.params['api_key'] = config.TMDB_API_KEY;
    return conf;
  },
  (error) => Promise.reject(error)
);

export default api;
