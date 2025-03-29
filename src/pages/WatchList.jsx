import WatchListCard from '../components/WatchListCard';
import { useDispatch, useSelector } from 'react-redux';
import { clearWatchlist } from '../store/slices/watchlistSlice';
import { Button, Container } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import CustomPagination from '../components/Pagination';
const WatchList = () => {
  const watchlist = useSelector((state) => state.watchlist.watchlist);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  const LIMIT = 4;
  const totalPages = Math.ceil(watchlist.length / LIMIT);

  if (!watchlist.length) {
    return (
      <Container>
        <h1>My Watchlist</h1>
        <p>Your watchlist is empty.</p>
      </Container>
    );
  }

  const watchListCards = watchlist.map((item) => <WatchListCard key={item.id} showItem={item} />);
  const cardsToRender = watchListCards.slice(LIMIT * (page - 1), LIMIT * page);

  return (
    <Container>
      <h1>My Watchlist</h1>
      <Button onClick={() => dispatch(clearWatchlist())} className="custom-button">
        Clear Watchlist
      </Button>
      <div className="d-flex flex-wrap">{cardsToRender}</div>
      <CustomPagination totalPages={totalPages} />
    </Container>
  );
};

export default WatchList;
