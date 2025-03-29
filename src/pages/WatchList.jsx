import React from 'react';
import WatchListCard from '../components/WatchListCard';
import { useDispatch, useSelector } from 'react-redux';
import { clearWatchlist } from '../store/slices/watchlistSlice';
import { Button, Container } from 'react-bootstrap';
const WatchList = () => {
  const watchlist = useSelector((state) => state.watchlist.watchlist);
  const dispatch = useDispatch();

  if (!watchlist.length) {
    return (
      <Container>
        <h1>My Watchlist</h1>
        <p>Your watchlist is empty.</p>
      </Container>
    );
  }

  const watchListCards = watchlist.map((item) => <WatchListCard key={item.id} showItem={item} />);

  return (
    <Container>
      <h1>My Watchlist</h1>
      <Button onClick={() => dispatch(clearWatchlist())} className="custom-button">
        Clear Watchlist
      </Button>
      <div className="d-flex flex-wrap">{watchListCards}</div>
    </Container>
  );
};

export default WatchList;
