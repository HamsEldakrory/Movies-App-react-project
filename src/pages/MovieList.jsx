import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../storeManagement/watchlistSlice';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MovieList = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.watchlist); 
  const movies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    { id: 3, title: 'Movie 3' },
  ];


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
    <div style={{ padding: '20px' }}>
      <h1>Movie List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {movies.map((movie) => (
          <li
            key={movie.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              borderBottom: '1px solid #ccc',
            }}
          >
            <Link style={{ color: 'black', textDecoration: 'none' }}>{movie.title}</Link>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
