import { useQuery } from '@tanstack/react-query';
import { getTVShowDetails, getTVShowRecommendations } from '../api/tvService';
import { getTVShowReviews } from '../api/reviewService';

const useTvShowDetails = ({ tvShowId }) => {
  if (!tvShowId) {
    return {
      tvShow: null,
      recommendations: [],
      reviews: [],
      isTvShowLoading: false,
      isRecLoading: false,
      isReviewsLoading: false,
      tvShowError: null,
      recError: null,
      reviewsError: null,
    };
  }
  const {
    data: tvShow = null,
    isLoading: isTvShowLoading,
    error: tvShowError,
  } = useQuery({
    queryKey: ['tvShowDetails', tvShowId],
    queryFn: () => getTVShowDetails(tvShowId),
    enabled: Boolean(tvShowId),
  });

  const {
    data: recommendations = [],
    isLoading: isRecLoading,
    error: recError,
  } = useQuery({
    queryKey: ['tvShowRecommendations', tvShowId],
    queryFn: () => getTVShowRecommendations(tvShowId),
    enabled: Boolean(tvShowId),
  });

  const {
    data: reviews = [],
    isLoading: isReviewsLoading,
    error: reviewsError,
  } = useQuery({
    queryKey: ['tvShowReviews', tvShowId],
    queryFn: () => getTVShowReviews(tvShowId),
    enabled: Boolean(tvShowId),
  });

  return {
    tvShow,
    recommendations,
    reviews,
    isTvShowLoading,
    isRecLoading,
    isReviewsLoading,
    tvShowError,
    recError,
    reviewsError,
  };
};

export default useTvShowDetails;
