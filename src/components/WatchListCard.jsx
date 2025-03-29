import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromWatchlist } from '../store/slices/watchlistSlice';
import { Heart, Star } from 'lucide-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import config from '../configs';

function WatchListCard({ showItem }) {
  const showType = showItem.title ? 'movie' : 'tv';
  const dispatch = useDispatch();

  const handleRemoveFromWatchlist = () => {
    dispatch(removeFromWatchlist(showItem.id));
  };
  const placeholderImage = 'https://placehold.co/600x400?text=Not Found';
  return (
    <Card key={showItem.id} className="m-3 rounded-3 shadow" style={{ maxWidth: '540px' }}>
      <div className="d-flex flex-row align-items-center gap-4">
        <div>
          <Card.Img
            src={
              showItem.poster_path ? config.TMDB_IMAGE_BASE_URL + showItem.poster_path : placeholderImage
            }
            style={{ width: '250px', height: '250px' }}
            className="img-fluid m-3"
          />
        </div>
        <div>
          <Card.Body>
            <Card.Title className="fw-bolder" style={{ fontSize: '24px' }}>
              {showType == 'movie' ? showItem.title : showItem.name }
              <Button
                onClick={handleRemoveFromWatchlist}
                className="float-end border-0"
                style={{ backgroundColor: 'white' }}
              >
                <Heart fill="#FFE353" size={35} />
              </Button>
            </Card.Title>
            <Card.Text className="text-muted small">
              {showItem.release_date
                ? new Date(showItem.release_date).toDateString()
                : showItem.first_air_date? new Date(showItem.first_air_date).toDateString() :'Unknown Release Date'}
            </Card.Text>
            <Card.Text className="text-muted small">
              <div className="d-flex flex-row align-items-center gap-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    fill={index < Math.round((showItem.vote_average || 0) / 2) ? 'black' : 'none'}
                    size={20}
                  />
                ))}
                {showItem.vote_count || 0}
              </div>
            </Card.Text>
            <Card.Text>
              {showItem.overview ? `${showItem.overview.slice(0, 100)}...` : 'No description available.'}
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default WatchListCard;
