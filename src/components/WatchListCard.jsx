import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromWatchlist } from '../store/slices/watchlistSlice';
import { Heart, Star } from 'lucide-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import config from '../configs';

function WatchListCard({ movie }) {
  const dispatch = useDispatch();

  const handleRemoveFromWatchlist = () => {
    dispatch(removeFromWatchlist(movie.id));
  };
  const placeholderImage = 'https://placehold.co/600x400?text=Not Found';
  return (
    <Card key={movie.id} className="m-3 rounded-3 shadow" style={{ maxWidth: '540px' }}>
      <div className="d-flex flex-row align-items-center gap-4">
        <div>
          <Card.Img
            src={
              movie.poster_path ? config.TMDB_IMAGE_BASE_URL + movie.poster_path : placeholderImage
            }
            style={{ width: '200px', height: '250px' }}
            className="img-fluid m-3"
          />
        </div>
        <div>
          <Card.Body>
            <Card.Title className="fw-bolder" style={{ fontSize: '24px' }}>
              {movie.title}
              <Button
                onClick={handleRemoveFromWatchlist}
                className="float-end border-0"
                style={{ backgroundColor: 'white' }}
              >
                <Heart fill="#FFE353" size={35} />
              </Button>
            </Card.Title>
            <Card.Text className="text-muted small">
              {movie.release_date
                ? new Date(movie.release_date).toDateString()
                : 'Unknown Release Date'}
            </Card.Text>
            <Card.Text className="text-muted small">
              <div className="d-flex flex-row align-items-center gap-1">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    fill={index < Math.round((movie.vote_average || 0) / 2) ? 'black' : 'none'}
                    size={20}
                  />
                ))}
                {movie.vote_count || 0}
              </div>
            </Card.Text>

            <div className="d-flex flex-row align-items-center gap-1">
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  fill={index < Math.round((movie.vote_average || 0) / 2) ? 'black' : 'none'}
                  size={20}
                />
              ))}
              {movie.vote_count || 0}
            </div>

            <Card.Text>
              {movie.overview ? `${movie.overview.slice(0, 100)}...` : 'No description available.'}
            </Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default WatchListCard;
