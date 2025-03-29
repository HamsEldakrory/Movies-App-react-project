import { Button, Container } from 'react-bootstrap';
import CustomPagination from '../components/Pagination';
import useWatchlist from '../hooks/useWatchlist';
import WatchListCard from '../components/WatchListCard';
const WatchList = () => {
  const { watchlist, handleWatchlistClear, totalPages, page, LIMIT } = useWatchlist();

  const watchListCards = watchlist.map((item) => <WatchListCard key={item.id} showItem={item} />);

  const cardsToRender = watchListCards.slice(LIMIT * (page - 1), LIMIT * page);

  if (!watchlist.length) {
    return (
      <Container>
        <h1>My Watchlist</h1>
        <p>Your watchlist is empty.</p>
      </Container>
    );
  }

  return (
    <Container>
      <h1>My Watchlist</h1>
      <Button onClick={handleWatchlistClear} className="custom-button">
        Clear Watchlist
      </Button>
      <div className="d-flex flex-wrap">{cardsToRender}</div>
      <CustomPagination totalPages={totalPages} />
    </Container>
  );
};

export default WatchList;
