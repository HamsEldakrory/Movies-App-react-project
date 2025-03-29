import { useQuery } from '@tanstack/react-query';
import { getTVShows } from '../../api/tvService';

const useTvShowQuery = (page) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['showsList', page],
    queryFn: () => getTVShows(page),
  });

  return { data, isLoading, error };
};

export default useTvShowQuery;
