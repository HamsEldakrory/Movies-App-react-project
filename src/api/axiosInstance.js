import axios from 'axios';
import config from '../configs';
import store from '../store';

const api = axios.create({
  baseURL: config.TMDB_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (conf) => {
    const state = store.getState();
    const selectedLanguage = state.language.language;

    conf.params = conf.params || {};
    conf.params['api_key'] = config.TMDB_API_KEY;
    conf.params['language'] = selectedLanguage;

    return conf;
  },
  (error) => Promise.reject(error)
);

export default api;
