import { useSearchParams } from 'react-router-dom';
import useSearchQuery from './query/useSearchQuery';

const useSearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { data, isLoading, isError, error } = useSearchQuery(query);

  return { data, isLoading, isError, error, query };
};

export default useSearchResults;
