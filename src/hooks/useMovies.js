import { useSearchParams } from 'react-router-dom';
import useMovieQuery from './query/useMovieQuery';

const useMovies = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') || 1;

    const { data, isLoading, error } = useMovieQuery(page);

    return { data, isLoading, error };
};

export default useMovies;