import { useQuery } from '@tanstack/react-query';
import { searchMovies } from '../../api/movieService';

const useSearchQuery = (query) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['searchMovies', query],
    queryFn: () => searchMovies(query),
  });

  return { data, isLoading, isError, error };
};

export default useSearchQuery;
