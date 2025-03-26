import api from './axiosInstance';

export const getMovies = async (page = 1) => {
  const response = await api.get('/movie/now_playing', {
    params: { page },
  });
  return {
    movies: response.data.results,
    totalResults: response.data.total_results,
    totalPages: response.data.total_pages,
  };
};

export const getMovieDetails = async (movieId) => {
  const response = await api.get(`/movie/${movieId}`);
  return response.data;
};

export const searchMovies = async (query, page = 1) => {
  const response = await api.get('/search/movie', {
    params: { query, page },
  });
  return {
    movies: response.data.results,
    totalResults: response.data.total_results,
    totalPages: response.data.total_pages,
  };
};

export const getMovieRecommendations = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/recommendations`);
  return response.data.results;
};
