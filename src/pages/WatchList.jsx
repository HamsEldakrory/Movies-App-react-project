import React from 'react';
import WatchListCard from '../components/WatchListCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const WatchList = () => {
  const watchlist = useSelector((state) => state.watchlist.watchlist);

  return (
    <>
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
            <div className="d-flex flex-wrap">
              {watchlist.map((item) => (
                <WatchListCard key={item.id} showItem={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default WatchList;
