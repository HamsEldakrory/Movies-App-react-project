import { useQuery } from '@tanstack/react-query';
import { getMovieDetails, getMovieRecommendations } from '../api/movieService';
import { getMovieReviews } from '../api/reviewService';

const useMovies = (movieId) => {
  const {
    data: movie,
    isLoading: isMovieLoading,
    error: movieError,
  } = useQuery({
    queryKey: ['movieDetails', movieId],
    queryFn: () => getMovieDetails(movieId),
  });

  const {
    data: recommendations,
    isLoading: isRecLoading,
    error: recError,
  } = useQuery({
    queryKey: ['movieRecommendations', movieId],
    queryFn: () => getMovieRecommendations(movieId),
  });

  const {
    data: reviews,
    isLoading: isReviewsLoading,
    error: reviewsError,
  } = useQuery({
    queryKey: ['movieReviews', movieId],
    queryFn: () => getMovieReviews(movieId),
  });

  return {
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
