import { useSearchParams } from 'react-router-dom';
import useTvShowQuery from './query/useTvShowQuery';

const useTvShows = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;

  const { data, isLoading, error } = useTvShowQuery(page);

  return { data, isLoading, error };
};

export default useTvShows;
