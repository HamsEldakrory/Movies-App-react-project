import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../store/slices/watchlistSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function WatchListButton({ movie }) {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.watchlist);

  const isInWatchlist = watchlist.some((item) => item.id === movie.id);

  const handleToggleWatchlist = () => {
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(movie.id));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };

  return (
    <button
      onClick={handleToggleWatchlist}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
      }}
      aria-label={isInWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
    >
      {isInWatchlist ? (
        <FaHeart color="#ffcc00" size={24} />
      ) : (
        <FaRegHeart color="#ffcc00" size={24} />
      )}
    </button>
  );
}

export default WatchListButton;
