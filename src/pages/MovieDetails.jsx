import { useParams } from 'react-router-dom';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';

import useMovies from '../hooks/useMoviesDetailes';
import config from '../configs';
import WatchListButton from '../components/WatchListButton';
import Production from '../components/Production';
import Rating from '../components/Rating';
import Recommendations from '../components/Recommendations';
import Reviews from '../components/Reviews';

const placeholderImage = 'https://placehold.co/600x400?text=Not Found';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const {
    movie,
    recommendations,
    reviews,
    isMovieLoading,
    isRecLoading,
    isReviewsLoading,
    movieError,
    recError,
    reviewsError,
  } = useMovies(movieId);

  if (!movieId) {
    return <p className="text-light text-center mt-5">Invalid movie ID</p>;
  }

  if (isMovieLoading) {
    return <p>Loading movie details...</p>;
  }

  if (movieError) {
    return <p>Error loading movie details: {movieError.message}</p>;
  }

  return (
    <Container className="mt-5 p-4">
      <Row className="align-items-center text-white">
        {/* Image */}
        <Col md={4}>
          <img
            src={
              movie?.poster_path ? config.TMDB_IMAGE_BASE_URL + movie.poster_path : placeholderImage
            }
            alt={movie?.title || 'Movie Poster'}
            className="img-fluid rounded shadow"
          />
        </Col>

        {/* Data */}
        <Col md={8}>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="fw-bold text-accent fs-0">{movie.title || 'Unknown Title'}</h1>
            <WatchListButton movie={movie} />
          </div>

          <p className="text-secondary">
            {movie.release_date ? new Date(movie.release_date).toDateString() : 'Unknown Date'}
          </p>

          <Rating voteAverage={movie.vote_average} voteCount={movie.vote_count} />

          <p className="mt-3" style={{ fontSize: '1.2rem' }}>
            {movie.overview || 'No description available.'}
          </p>

          {movie.genres.map((genre) => (
            <Badge key={genre.id} className="genre-badge">
              {genre.name}
            </Badge>
          ))}

          <div className="mt-3 d-flex gap-4">
            <strong>Duration:</strong> {movie?.runtime ? `${movie.runtime} Min.` : 'N/A'}
            <strong>Languages:</strong>
            {movie.spoken_languages?.map((lang) => lang.english_name).join(', ') || 'N/A'}
          </div>

          <Production productionCompanies={movie.production_companies} />

          {movie.homepage && (
            <Button href={movie.homepage} target="_blank" className="custom-button">
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

export default MovieDetailsPage;
