import { useSearchParams } from 'react-router-dom';
import useSearchQuery from './query/useSearchQuery';

const useSearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const page = searchParams.get('page') || 1;

  const { data, isLoading, isError, error } = useSearchQuery(query, page);

  return { data, isLoading, isError, error, query };
};

export default useSearchResults;
