import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import WatchListCard from '../components/WatchListCard';
import { clearWatchlist } from '../store/slices/watchlistSlice';

const useWatchlist = () => {
  const watchlist = useSelector((state) => state.watchlist.watchlist);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  const LIMIT = 4;
  const totalPages = Math.ceil(watchlist.length / LIMIT);

  const handleWatchlistClear = () => {
    dispatch(clearWatchlist());
  };

  return { watchlist, handleWatchlistClear, page, totalPages, LIMIT };
};

export default useWatchlist;
