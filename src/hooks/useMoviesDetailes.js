import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getMovieDetails, getMovieRecommendations } from '../api/movieService';
import { getMovieReviews } from '../api/reviewService';
const useMovies = ({ movieId }) => {
    const queryClient = useQueryClient();
    const {
      data: movie = null,
      isLoading: isMovieLoading = false,
      error: movieError = null,
    } = useQuery({
      queryKey: ['movieDetails', movieId],
      queryFn: () => getMovieDetails(movieId),
      enabled: !!movieId,
    }) || {};
  
    const {
      data: recommendations = [],
      isLoading: isRecLoading = false,
      error: recError = null,
    } = useQuery({
      queryKey: ['movieRecommendations', movieId],
      queryFn: () => getMovieRecommendations(movieId),
      enabled: !!movieId,
    }) || {};
    const {
      data: reviews = [],
      isLoading: isReviewsLoading = false,
      error: reviewsError = null,
    } = useQuery({
      queryKey: ['movieReviews', movieId],
      queryFn: () => getMovieReviews(movieId),
      enabled: !!movieId,
    }) || {};return {
      movie,
      recommendations,
      reviews,
      isMovieLoading,
      isRecLoading,
      isReviewsLoading,
      movieError,
      recError,
      reviewsError,
    };
  };
  
  export default useMovies;
  