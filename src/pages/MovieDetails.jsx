import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Badge, Button, Card, Spinner, Form } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import useMovies from '../hooks/useMoviesDetailes';
import config from '../configs';
import WatchListButton from '../components/WatchListButton';
import MainPageCard from '../components/MainPageCard';

const placeholderImage = 'https://placehold.co/600x400?text=Not Found';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  if (!movieId) {
    return <p className="text-light text-center mt-5">Invalid movie ID</p>;
  }
  const {
    movie = {},
    recommendations = [],
    reviews = { reviews: [] },
    isMovieLoading = false,
    isRecLoading = false,
    isReviewsLoading = false,
    movieError = null,
    recError = null,
    reviewsError = null,
    reviewMutation = { mutate: () => {}, isLoading: false },
  } = useMovies({ movieId }) || {};

  const [newReview, setNewReview] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.trim()) return;
    reviewMutation.mutate(newReview);
    setNewReview('');
  };

  if (isMovieLoading) return <p>Loading movie details...</p>;
  if (movieError) return <p>Error loading movie details: {movieError.message}</p>;

  return (
    <Container className="mt-5 p-4">
      <Row className="align-items-center text-white">
        <Col md={4}>
          <img
            src={
              movie?.poster_path ? config.TMDB_IMAGE_BASE_URL + movie.poster_path : placeholderImage
            }
            alt={movie?.title || 'Movie Poster'}
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={8}>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="fw-bold text-accent" style={{ fontSize: '3rem' }}>
              {movie?.title || 'Unknown Title'}
            </h1>
            <WatchListButton movie={movie} />
          </div>
          <p className="text-secondary">
            {movie?.release_date ? new Date(movie.release_date).toDateString() : 'Unknown Date'}
          </p>

          <div className="d-flex align-items-center">
            {Array.from({ length: 5 }, (_, index) => {
              const rating = (movie?.vote_average || 0) / 2;
              if (index + 1 <= rating)
                return <FaStar key={index} color="var(--star-color)" size={24} />;
              if (index + 0.5 <= rating)
                return <FaStarHalfAlt key={index} color="var(--star-color)" size={24} />;
              return <FaRegStar key={index} color="var(--star-color)" size={24} />;
            })}
            <span className="ms-2 text-secondary">{movie?.vote_count || 0} votes</span>
          </div>

          <p className="mt-3" style={{ fontSize: '1.2rem' }}>
            {movie?.overview || 'No description available.'}
          </p>

          {movie?.genres?.map((genre) => (
            <Badge key={genre.id} className="genre-badge">
              {genre.name}
            </Badge>
          ))}

          <div className="mt-3 d-flex gap-4">
            <strong className="text-white">Duration:</strong>{' '}
            {movie?.runtime ? `${movie.runtime} Min.` : 'N/A'}
            <strong className="text-white">Languages:</strong>
            {movie?.spoken_languages?.map((lang) => lang.english_name).join(', ') || 'N/A'}
          </div>
          {movie.production_companies.length > 0 && (
            <div className="production-container">
              {movie.production_companies.map((company) =>
                company.logo_path ? (
                  <img
                    key={company.id}
                    src={config.TMDB_IMAGE_BASE_URL + company.logo_path}
                    alt={company.name}
                    className="production-logo"
                  />
                ) : (
                  <span key={company.id} className="production-text">
                    {company.name}
                  </span>
                )
              )}
            </div>
          )}
          {movie?.homepage && (
            <Button href={movie.homepage} target="_blank" className="custom-button">
              Official Website
            </Button>
          )}
        </Col>
      </Row>

      <h3 className="fw-bold mt-5 text-white">Recommended Movies</h3>
      {isRecLoading ? (
        <h4 className="text-light text-center mt-4">
          <Spinner animation="border" />
        </h4>
      ) : recError ? (
        <h4 className="text-danger text-center mt-4">Error loading recommendations.</h4>
      ) : (
        <Carousel
          responsive={{
            superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 4},
            desktop: { breakpoint: { max: 1200, min: 992 }, items: 3},
            tablet: { breakpoint: { max: 992, min: 768 }, items: 2 },
            mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
          }}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          keyBoardControl
          transitionDuration={400}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          className="mt-3"
        >
          {recommendations.map((recMovie) => (
            <MainPageCard key={recMovie.id} showItem={recMovie} />
          ))}
        </Carousel>
      )}

      <h3 className="fw-bold mt-5 text-white">Reviews</h3>
      {isReviewsLoading ? (
        <h4 className="text-light text-center mt-4">
          <Spinner animation="border" />
        </h4>
      ) : reviewsError ? (
        <h4 className="text-danger text-center mt-4">Error loading reviews.</h4>
      ) : (
        <div className="mt-3">
          {reviews?.reviews?.length > 0 ? (
            reviews.reviews.map((review) => (
              <Card key={review.id} className="mb-3 bg-dark text-white">
                <Card.Body>
                  <strong>{review?.author || 'Unknown'}</strong>
                  <p>{review?.content || 'No content available.'}</p>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p className="text-secondary">No reviews yet.</p>
          )}
        </div>
      )}

      <Form onSubmit={handleReviewSubmit} className="mt-3">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Write your review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          required
        />
        <Button type="submit" className="mt-2 custom-button" disabled={reviewMutation?.isLoading}>
          {reviewMutation?.isLoading ? 'Submitting...' : 'Submit Review'}
        </Button>
      </Form>
    </Container>
  );
};

export default MovieDetailsPage;
