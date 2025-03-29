import { useQuery } from '@tanstack/react-query';
import { getMovies } from '../../api/movieService';

const useMovieQuery = (page) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['moviesList', page],
        queryFn: () => getMovies(page),
    });

    return { data, isLoading, error };
}

export default useMovieQuery;