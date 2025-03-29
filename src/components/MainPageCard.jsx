import Card from 'react-bootstrap/Card';
import config from '../configs';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../store/slices/watchlistSlice';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const placeholderImage = 'https://placehold.co/307x400?text=Not Found';

const MainPageCard = (props) => {
  const { showItem, showType } = props;
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.watchlist);

  const isInWatchlist = (showId) => {
    return watchlist.some((item) => item.id === showId);
  };

  const handleToggleWatchlist = (showItem) => {
    if (isInWatchlist(showItem.id)) {
      dispatch(removeFromWatchlist(showItem.id));
    } else {
      dispatch(addToWatchlist(showItem));
    }
  };

  let circularProgress = {
    backgroundColor: '#081b23',
    textColor: '#fff',
    pathColor: 'red',
    trailColor: 'transparent',
  };
  if (showItem.vote_average * 10 >= 50) {
    circularProgress.pathColor = '#4a651e';
  }
  if (showItem.vote_average * 10 >= 70) {
    circularProgress.pathColor = '#3d8544';
  }

  return (
    <Card className="border-0 flex-fill" style={{ width: '18rem', height: '430px' }}>
      {showType == 'movie' ? (
        <Link to={`/movies/${showItem.id}`}>
          <div>
            <Card.Img
              variant="top"
              src={
                showItem.poster_path
                  ? config.TMDB_IMAGE_BASE_URL + showItem.poster_path
                  : placeholderImage
              }
              style={{}}
            />
          </div>
        </Link>
      ) : (
        <Link to={`/tv-shows/${showItem.id}`}>
          <div>
            <Card.Img
              variant="top"
              src={
                showItem.poster_path
                  ? config.TMDB_IMAGE_BASE_URL + showItem.poster_path
                  : placeholderImage
              }
              style={{}}
            />
          </div>
        </Link>
      )}

      <Card.Body className="mt-3 d-flex flex-column" style={{ position: 'relative' }}>
        <div
          style={{ width: 60, height: 60, top: '-50px', left: '18px' }}
          className="position-absolute"
        >
          <CircularProgressbar
            value={showItem.vote_average * 10}
            text={`${Math.floor(showItem.vote_average * 10)}%`}
            background
            backgroundPadding={6}
            styles={buildStyles(circularProgress)}
          />
        </div>
        {showType == 'movie' ? (
          <Link className="text-decoration-none text-black mb-auto" to={`/movie/${showItem.id}`}>
            <Card.Title style={{ fontSize: '18px', textDecoration: 'none' }}>
              {showItem.title}
            </Card.Title>
          </Link>
        ) : (
          <Link className="text-decoration-none text-black" to={`/tv-shows/${showItem.id}`}>
            <Card.Title style={{ fontSize: '18px', textDecoration: 'none' }}>
              {showItem.name}
            </Card.Title>
          </Link>
        )}
        <div className="d-flex mt-auto align-items-center justify-content-between">
          <Card.Text className="text-muted mb-0">
            {showType == 'movie'? <span>{showItem.release_date}</span> : <span>{showItem.first_air_date}</span> }
            
          </Card.Text>
          <button
            onClick={() => handleToggleWatchlist(showItem)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '5px',
              paddingBottom: '10px',
            }}
            aria-label={isInWatchlist(showItem.id) ? 'Remove from watchlist' : 'Add to watchlist'}
          >
            {isInWatchlist(showItem.id) ? (
              <FaHeart style={{ color: '#F5C518', fontSize: '20px' }} />
            ) : (
              <FaRegHeart style={{ color: 'black', fontSize: '20px' }} />
            )}
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};
export default MainPageCard;
