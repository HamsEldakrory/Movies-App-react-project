import api from './axiosInstance';

export const getTVShows = async (page = 1) => {
  const response = await api.get('/tv/top_rated', {
    params: { page },
  });
  return {
    shows: response.data.results,
    totalResults: response.data.total_results,
    totalPages: response.data.total_pages,
  };
};

export const getTVShowDetails = async (showId) => {
  const response = await api.get(`/tv/${showId}`);
  return response.data;
};

export const searchTVShows = async (query, page = 1) => {
  const response = await api.get('/search/tv', {
    params: { query, page },
  });

  return {
    shows: response.data.results,
    totalResults: response.data.total_results,
    totalPages: response.data.total_pages,
  };
};

export const getTVShowRecommendations = async (showId) => {
  const response = await api.get(`/tv/${showId}/recommendations`);
  return response.data.results;
};
