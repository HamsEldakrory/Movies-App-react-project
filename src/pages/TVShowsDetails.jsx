import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Badge, Button, Card, Spinner, Form } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import useTvShowDetails from '../hooks/useTvShowDetails';
import config from '../configs';
import WatchListButton from '../components/WatchListButton';
import MainPageCard from '../components/MainPageCard';

const placeholderImage = 'https://placehold.co/600x400?text=Not Found';

const TvShowDetailsPage = () => {
  const { showId } = useParams();
  const {
    show = {},
    recommendations = [],
    reviews = [],
    isShowLoading = false,
    isRecLoading = false,
    isReviewsLoading = false,
    showError = null,
    recError = null,
    reviewsError = null,
    reviewMutation = { mutate: () => {}, isLoading: false },
  } = useTvShowDetails({ showId }) || {};

  const [newReview, setNewReview] = useState('');

  if (!showId) {
    return <p className="text-center mt-5 text-secondary">Invalid show ID</p>;
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.trim()) return;
    reviewMutation.mutate(newReview);
    setNewReview('');
  };

  if (isShowLoading) return <p className="text-accent text-center">Loading TV show details...</p>;
  if (showError) return <p className="text-danger text-center">Error loading TV show details: {showError.message}</p>;

  return (
    <Container className="mt-5 p-4">
      <Row className="align-items-center text-white">
        <Col md={4}>
          <img
            src={show?.poster_path ? config.TMDB_IMAGE_BASE_URL + show.poster_path : placeholderImage}
            alt={show?.name || 'Show Poster'}
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={8}>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="fw-bold text-accent" style={{ fontSize: '3rem' }}>
              {show?.name || 'Unknown Title'}
            </h1>
            <WatchListButton show={show} />
          </div>
          <p className="text-secondary">
            {show?.first_air_date ? new Date(show.first_air_date).toDateString() : 'Unknown Date'}
          </p>

          <div className="d-flex align-items-center">
            {Array.from({ length: 5 }, (_, index) => {
              const rating = (show?.vote_average || 0) / 2;
              if (index + 1 <= rating) return <FaStar key={index} className="text-star" size={24} />;
              if (index + 0.5 <= rating) return <FaStarHalfAlt key={index} className="text-star" size={24} />;
              return <FaRegStar key={index} className="text-star" size={24} />;
            })}
            <span className="ms-2 text-secondary">{show?.vote_count || 0} votes</span>
          </div>

          <p className="mt-3" style={{ fontSize: '1.2rem' }}>
            {show?.overview || 'No description available.'}
          </p>

          {show?.genres?.map((genre) => (
            <Badge key={genre.id} className="genre-badge">
              {genre.name}
            </Badge>
          ))}

          <div className="mt-3 d-flex gap-4">
            <strong className="text-white">Seasons:</strong> {show?.number_of_seasons || 'N/A'}
            <strong className="text-white">Episodes:</strong> {show?.number_of_episodes || 'N/A'}
          </div>

          {show?.homepage && (
            <Button href={show.homepage} target="_blank" className="custom-button">
              Official Website
            </Button>
          )}
        </Col>
      </Row>

      {/* Recommended Shows */}
      <h3 className="fw-bold mt-5 text-white">Recommended Shows</h3>
      {isRecLoading ? (
        <h4 className="text-light text-center mt-4">
          <Spinner animation="border" />
        </h4>
      ) : recError ? (
        <h4 className="text-danger text-center mt-4">Error loading recommendations.</h4>
      ) : (
        <Carousel
          responsive={{
            superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 4 },
            desktop: { breakpoint: { max: 1200, min: 992 }, items: 3 },
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
          {recommendations.map((recShow) => (
            <MainPageCard key={recShow.id} showItem={recShow} />
          ))}
        </Carousel>
      )}

      {/* Reviews Section */}
      <h3 className="fw-bold mt-5 text-white">Reviews</h3>
      {isReviewsLoading ? (
        <h4 className="text-light text-center mt-4">
          <Spinner animation="border" />
        </h4>
      ) : reviewsError ? (
        <h4 className="text-danger text-center mt-4">Error loading reviews.</h4>
      ) : (
        <div className="mt-3">
          {Array.isArray(reviews) && reviews.length > 0 ? (
            reviews.map((review) => (
              <Card key={review.id} className="mb-3 custom-card">
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

      {/* Review Submission Form */}
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

export default TvShowDetailsPage;
