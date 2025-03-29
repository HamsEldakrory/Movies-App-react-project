import { useQuery } from '@tanstack/react-query';
import { searchMovies } from '../../api/movieService';
import { searchTVShows } from '../../api/tvService';

const useSearchQuery = (query, page, category) => {
  const searchFunction = category === 'movies' ? searchMovies : searchTVShows;
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['search', query, page],
    queryFn: () => searchFunction(query, page),
  });

  return { data, isLoading, isError, error };
};

export default useSearchQuery;
