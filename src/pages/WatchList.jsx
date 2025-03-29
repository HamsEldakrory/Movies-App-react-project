import React from 'react';
import WatchListCard from '../components/WatchListCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/custom.css'
const WatchList = () => {
  const watchlist = useSelector((state) => state.watchlist.watchlist);

  return (
    <div className="watchlist-container" style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ textAlign: 'left' }}>Watch list</h1>
      {watchlist.length === 0 ? (
        <div className="empty-watchlist">
          <img
            src="../../public/empty.png"
            alt="Empty Watchlist"
            p
            style={{ width: '400px', marginBottom: '20px' }}
          />
          <p style={{ fontSize: '20px' }}>No Movies in watch list</p>
          <Link to="/" className="back-home-btn btn mt-3"> 
            Back to home
          </Link>
        </div>
      ) : (
        <div className="d-flex flex-wrap">
          {watchlist.map((item) => (
            <WatchListCard key={item.id} movie={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchList;
