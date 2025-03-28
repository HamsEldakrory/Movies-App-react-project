import api from './axiosInstance';

export const getMovieReviews = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/reviews`);
  return {
    reviews: response.data.results,
    totalResults: response.data.total_results,
    totalPages: response.data.total_pages,
  };
};

export const getTVShowReviews = async (showId) => {
  const response = await api.get(`/tv/${showId}/reviews`);
  return {
    reviews: response.data.results,
    totalResults: response.data.total_results,
    totalPages: response.data.total_pages,
  };
};
