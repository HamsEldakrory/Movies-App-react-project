import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import config from '../configs/index';
import { FaStar } from 'react-icons/fa6';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../store/slices/watchlistSlice';
import { Link } from 'react-router-dom';

export const MainPageCard = (props) => {
  const { showItem } = props;
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

  return (
    <>
      <Card style={{ width: '18rem', border: 'none', position: 'relative' }}>
        <Link to={`/movie/${showItem.id}`}>
          <Card.Img
            variant="top"
            style={{ width: '100%', borderRadius: '10px' }}
            src={config.TMDB_IMAGE_BASE_URL + showItem.poster_path}
          />
        </Link>

        <Card.Body className="mt-3" style={{ position: 'relative' }}>
          <Badge
            className="position-absolute"
            bg="unknown"
            style={{
              backgroundColor: '#081d22',
              top: '-50px',
              left: '18px',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 'bold',
              textAlign: 'center',
              border: '0.5px solid #fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                border: '3px solid #1ca563',
                borderColor:
                  showItem.vote_average > 7
                    ? '#1ca563'
                    : showItem.vote_average > 4.9
                      ? '#b4b82d'
                      : '#db2c2c',
                borderRadius: '50%',
                width: '49px',
                height: '49px',
                backgroundColor: 'none',
                color: '#fff',
                fontSize: '12px',
                fontWeight: 'bold',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5px',
              }}
            >
              <span>
                {showItem.vote_average}&nbsp;
                <FaStar style={{ paddingBottom: '3px' }} />
              </span>
            </div>
          </Badge>
          <Link className='text-decoration-none text-black' to={`/movie/${showItem.id}`}>
          <Card.Title style={{ fontSize: '18px', textDecoration: 'none'}}>{showItem.title}</Card.Title>
          </Link>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Card.Text className="text-muted">
              <span>{showItem.release_date}</span>
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
    </>
  );
};
