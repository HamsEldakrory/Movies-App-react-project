import { useSearchParams } from 'react-router-dom';
import useSearchQuery from './query/useSearchQuery';

const useSearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const category = searchParams.get('category') || 'movies';
  const page = searchParams.get('page') || 1;

  const { data, isLoading, isError, error } = useSearchQuery(query, page, category);

  return { data, isLoading, isError, error, query, category };
};

export default useSearchResults;
