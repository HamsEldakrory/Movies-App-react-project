import { useParams } from 'react-router-dom';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import useTvShowDetails from '../hooks/useTvShowDetails';
import config from '../configs';
import WatchListButton from '../components/WatchListButton';
import Rating from '../components/Rating';
import Recommendations from '../components/Recommendations';
import Reviews from '../components/Reviews';

const placeholderImage = 'https://placehold.co/600x400?text=Not Found';

const TvShowDetailsPage = () => {
  const { tvShowId } = useParams();

  const {
    show,
    recommendations,
    reviews,
    isTvShowLoading,
    isRecLoading,
    isReviewsLoading,
    showError,
    recError,
    reviewsError,
  } = useTvShowDetails(tvShowId);

  if (isTvShowLoading) {
    return <p className="text-accent text-center">Loading TV show details...</p>;
  }

  if (showError) {
    return (
      <p className="text-danger text-center">Error loading TV show details: {showError.message}</p>
    );
  }

  return (
    <Container className="mt-5 p-4">
      <Row className="align-items-center">
        {/* Image */}
        <Col md={4}>
          <img
            src={
              show?.poster_path ? config.TMDB_IMAGE_BASE_URL + show.poster_path : placeholderImage
            }
            alt={show?.name || 'Show Poster'}
            className="img-fluid rounded shadow"
          />
        </Col>

        {/* Details */}
        <Col md={8}>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="fw-bold text-accent fs-0">{show.name || 'Unknown Title'}</h1>
            <WatchListButton show={show} />
          </div>

          <p className="text-secondary">
            {show.first_air_date ? new Date(show.first_air_date).toDateString() : 'Unknown Date'}
          </p>

          <Rating voteAverage={show.vote_average} voteCount={show.vote_count} />

          <p className="mt-3" style={{ fontSize: '1.2rem' }}>
            {show.overview || 'No description available.'}
          </p>

          {show.genres.map((genre) => (
            <Badge key={genre.id} className="genre-badge">
              {genre.name}
            </Badge>
          ))}

          <div className="my-3 d-flex gap-4">
            <strong>Seasons:</strong> {show?.number_of_seasons || 'N/A'}
            <strong>Episodes:</strong> {show?.number_of_episodes || 'N/A'}
          </div>

          {show.homepage && (
            <Button href={show.homepage} target="_blank" className="custom-button">
              Official Website
            </Button>
          )}
        </Col>
      </Row>

      {/* Recommended Shows */}
      <Recommendations
        isLoading={isRecLoading}
        error={recError}
        recommendations={recommendations}
      />

      {/* Reviews Section */}
      <Reviews isLoading={isReviewsLoading} error={reviewsError} reviews={reviews} />
    </Container>
  );
};

export default TvShowDetailsPage;
