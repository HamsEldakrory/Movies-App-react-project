const config = {
  TMDB_API_KEY: import.meta.env.VITE_TMDB_API_KEY,
  TMDB_BASE_URL: import.meta.env.VITE_TMDB_BASE_URL || 'https://api.themoviedb.org/3',
  TMDB_IMAGE_BASE_URL: import.meta.env.VITE_TMDB_IMAGE_BASE_URL || 'https://image.tmdb.org/t/p',
};

export default config;
