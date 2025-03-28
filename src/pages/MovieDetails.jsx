import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Badge, Button, Card, Spinner } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import useMovieDetails from '../hooks/useMovieDetails';
import config from '../configs';

const placeholderImage = 'https://placehold.co/600x400?text=Not Found';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movie, recommendations, isMovieLoading, isRecLoading, movieError, recError } = useMovieDetails(movieId);
  if (isMovieLoading) return <h2 className="text-light text-center mt-5"><Spinner animation="border" /></h2>;
  if (movieError) return <h2 className="text-danger text-center mt-5">Error loading movie details.</h2>;
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1200 }, items: 5 },
    desktop: { breakpoint: { max: 1200, min: 992 }, items: 4 },
    tablet: { breakpoint: { max: 992, min: 768 }, items: 3 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 2 },
  };

  return (
    <Container className="mt-5 p-4">
      <Row className="align-items-center text-white">
        {/* Movie Poster */}
        <Col md={4}>
          <img
            src={movie.poster_path ? config.TMDB_IMAGE_BASE_URL + movie.poster_path : placeholderImage}
            alt={movie.title}
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={8}>
          <h1 className="fw-bold text-accent" style={{ fontSize: '3rem' }}>{movie.title}</h1>
          <p className="text-secondary">{new Date(movie.release_date).toDateString()}</p>
          <div className="d-flex align-items-center">
            {Array.from({ length: 5 }, (_, index) => {
              const rating = movie.vote_average / 2;
              if (index + 1 <= rating) {
                return <FaStar key={index} color="var(--star-color)" size={24} />;
              } else if (index + 0.5 <= rating) {
                return <FaStarHalfAlt key={index} color="var(--star-color)" size={24} />;
              } else {
                return <FaRegStar key={index} color="var(--star-color)" size={24} />;
              }
            })}
            <span className="ms-2 text-secondary">{movie.vote_count} votes</span>
          </div>
          <p className="mt-3" style={{ fontSize: '1.2rem' }}>{movie.overview}</p>
          {movie.genres && movie.genres.map((genre) => (
            <Badge key={genre.id} className="genre-badge">
              {genre.name}
            </Badge>
          ))}
          <div className="mt-3 d-flex gap-4">
            <strong className="text-white">Duration:</strong> {movie.runtime} Min.
            <strong className="text-white">Languages:</strong> 
            {movie.spoken_languages.map((lang) => lang.english_name).join(', ')}
          </div>
          {movie.production_companies.length > 0 && (
            <div className="production-container">
              {movie.production_companies.map((company) =>
                company.logo_path ? (
                  <img key={company.id} src={config.TMDB_IMAGE_BASE_URL + company.logo_path} alt={company.name} className="production-logo"/>
                ) : (
                  <span key={company.id} className="production-text">{company.name}</span>
                )
              )}
            </div>
          )}
          {movie.homepage && (
            <Button href={movie.homepage} target="_blank" className="custom-button">
              Official Website
            </Button>
          )}
        </Col>
      </Row>
      <h3 className="fw-bold mt-5 text-white">Recommended Movies</h3>
      {isRecLoading ? (
        <h4 className="text-light text-center mt-4"><Spinner animation="border" /></h4>
      ) : recError ? (
        <h4 className="text-danger text-center mt-4">Error loading recommendations.</h4>
      ) : (
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={2000}
          keyBoardControl
          transitionDuration={400}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          className="mt-3"
        >
          {recommendations.map((recMovie) => (
            <div key={recMovie.id} className="p-2">
              <Card className="custom-card">
                <Card.Img
                  src={recMovie.poster_path ? config.TMDB_IMAGE_BASE_URL + recMovie.poster_path : placeholderImage}
                  alt={recMovie.title}
                  className="rounded-top"
                />
                <Card.Body className="text-center">
                  <Badge className="rating-badge">{Math.round(recMovie.vote_average * 10)}%</Badge>
                  <Card.Title className="fs-6 mt-2 text-white">{recMovie.title}</Card.Title>
                  <Card.Text className="text-secondary">
                    {new Date(recMovie.release_date).toDateString()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Carousel>
      )}
    </Container>
  );
};

export default MovieDetailsPage;
