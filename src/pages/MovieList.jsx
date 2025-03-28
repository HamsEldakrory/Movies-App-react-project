import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../store/slices/watchlistSlice';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import WatchListButton from '../components/WatchListButton';
const MovieList = () => {
  const movies = [
    { id: 1, title: 'Black Widow ' },
    { id: 2, title: 'The Good Doctor' },
    { id: 3, title: 'Dexter' },
    { id: 4, title: 'The BlackList' },
  ];

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
            <WatchListButton movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
