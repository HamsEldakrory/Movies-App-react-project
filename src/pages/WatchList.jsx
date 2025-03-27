import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWatchlist, clearWatchlist } from '../store/slices/watchlistSlice';
import { FaHeart } from 'react-icons/fa';

const WatchList = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.watchlist);

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Watchlist</h1>
      {watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        <>
          <button
            onClick={() => dispatch(clearWatchlist())}
            style={{
              marginBottom: '20px',
              padding: '10px',
              backgroundColor: '#ff4d4d',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Clear Watchlist
          </button>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {watchlist.map((item) => (
              <li
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px',
                  borderBottom: '1px solid #ccc',
                }}
              >
                <span>{item.title}</span>
                <button
                  onClick={() => dispatch(removeFromWatchlist(item.id))}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '5px',
                  }}
                  aria-label="Remove from watchlist"
                >
                  <FaHeart style={{ color: 'red', fontSize: '20px' }} />
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default WatchList;
