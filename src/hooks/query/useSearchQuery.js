import { useQuery } from '@tanstack/react-query';
import { searchMovies } from '../../api/movieService';

const useSearchQuery = (query, page) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['searchMovies', query, page],
    queryFn: () => searchMovies(query, page),
  });

  return { data, isLoading, isError, error };
};

export default useSearchQuery;
