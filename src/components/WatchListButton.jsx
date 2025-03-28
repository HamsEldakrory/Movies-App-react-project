import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../store/slices/watchlistSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function WatchListButton(props) {
  const { movie } = props;
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.watchlist);

  const isInWatchlist = (movieId) => {
    return watchlist.some((item) => item.id === movieId);
  };

  const handleToggleWatchlist = (movie) => {
    if (isInWatchlist(movie.id)) {
      dispatch(removeFromWatchlist(movie.id));
    } else {
      dispatch(addToWatchlist(movie));
    }
  };
  return (
    <button
      onClick={() => handleToggleWatchlist(movie)}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '5px',
      }}
      aria-label={isInWatchlist(movie.id) ? 'Remove from watchlist' : 'Add to watchlist'}
    >
      {isInWatchlist(movie.id) ? (
        <FaHeart style={{ color: 'red', fontSize: '20px' }} />
      ) : (
        <FaRegHeart style={{ color: 'red', fontSize: '20px' }} />
      )}
    </button>
  );
}

export default WatchListButton;
