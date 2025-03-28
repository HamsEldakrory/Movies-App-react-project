import React from 'react';
import { Container, Row, Col, Image, Card, Badge, ListGroup, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Star, Calendar, Clock, Globe, Link } from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Heart } from 'lucide-react';
import { removeFromWatchlist } from '../store/slices/watchlistSlice';
import '../styles/custom.css';

const showData = {
  adult: false,
  backdrop_path: '/heotfhl53QuJw3YGfNFLhsfZs27.jpg',
  created_by: [
    {
      id: 23757,
      credit_id: '5a98f5a50e0a2606580048a7',
      name: 'Joshua Brand',
      original_name: 'Joshua Brand',
      gender: 2,
      profile_path: '/w1Y4d7SE9fzNcV4y1lyk7P2CdnH.jpg',
    },
    {
      id: 168464,
      credit_id: '5a98f5c492514127ea00492d',
      name: 'John Masius',
      original_name: 'John Masius',
      gender: 2,
      profile_path: null,
    },
    {
      id: 1211984,
      credit_id: '5a98f5b50e0a2605f2004562',
      name: 'John Falsey',
      original_name: 'John Falsey',
      gender: 2,
      profile_path: '/mwgwFERqIG5PWuWIDOHtl9pK9aJ.jpg',
    },
    {
      id: 1211988,
      credit_id: '5a98f5dfc3a3680b96004748',
      name: 'Mark Tinker',
      original_name: 'Mark Tinker',
      gender: 2,
      profile_path: '/uzM6K6QfJYJVwcbAwAluS6Ihuce.jpg',
    },
  ],
  episode_run_time: [60],
  first_air_date: '1982-10-26',
  genres: [
    {
      id: 18,
      name: 'Drama',
    },
  ],
  homepage: '',
  id: 30,
  in_production: false,
  languages: ['en'],
  last_air_date: '1988-05-25',
  last_episode_to_air: {
    id: 509,
    name: 'The Last One',
    overview:
      "The Craigs' reconciliation faces its first test; Drs. Auschlander and Gideon struggle together to save St. Eligius when Weigert decides to get out; Novino pushes Morrison to decide between her and Joanne; Griffin places his future in God's hands; Ehrlich returns from his odyssey; and Fiscus' last E.R. patient is a lady from the opera...\n\nBut is it really over? The jaw-dropping climax culminates in a blue-collared dad placing his young autistic son Tommy Westphall's miniature St. Eligius snow globe on the living room TV set, having summoned him to dinner. \"\"St. Elsewhere's\"\" entire six-year saga had all been a figment of little Tommy's imagination!",
    vote_average: 2.5,
    vote_count: 4,
    air_date: '1988-05-25',
    episode_number: 22,
    episode_type: 'finale',
    production_code: '7322',
    runtime: 60,
    season_number: 6,
    show_id: 30,
    still_path: '/wVCVbidTHnNAlkfkKSR8Z6TklmK.jpg',
  },
  name: 'St. Elsewhere',
  next_episode_to_air: null,
  networks: [
    {
      id: 6,
      logo_path: '/cm111bsDVlYaC1foL0itvEI4yLG.png',
      name: 'NBC',
      origin_country: 'US',
    },
  ],
  number_of_episodes: 137,
  number_of_seasons: 6,
  origin_country: ['US'],
  original_language: 'en',
  original_name: 'St. Elsewhere',
  overview:
    'St. Elsewhere is an American medical drama television series that originally ran on NBC from October 26, 1982 to May 25, 1988. The series starred Ed Flanders, Norman Lloyd and William Daniels as teaching doctors at a lightly-regarded Boston hospital who gave interns a promising future in making critical medical and life decisions.',
  popularity: 114.9321,
  poster_path: '/mEfcA56iisaOfnK8FsY1sSE2wLu.jpg',
  production_companies: [
    {
      id: 1556,
      logo_path: '/31h94rG9hzjprXoYNy3L1ErUya2.png',
      name: '20th Century Fox Television',
      origin_country: 'US',
    },
    {
      id: 65900,
      logo_path: null,
      name: 'MTM Productions',
      origin_country: '',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  seasons: [
    {
      air_date: '1982-10-26',
      episode_count: 22,
      id: 8,
      name: 'Season 1',
      overview:
        'In the final season, the Lambe family confronts significant changes and memorable moments that define their time in Edendale.',
      poster_path: '/nUZxyt2mAE6hLiJPsYTOZRd4Trg.jpg',
      season_number: 1,
      vote_average: 6.8,
    },
    {
      air_date: '1983-10-26',
      episode_count: 22,
      id: 11,
      name: 'Season 2',
      overview:
        'In the final season, the Lambe family confronts significant changes and memorable moments that define their time in Edendale.',
      poster_path: '/9KRez3qCL2c7KzJWHTEh9GVmQtT.jpg',
      season_number: 2,
      vote_average: 6.9,
    },
    {
      air_date: '1984-09-19',
      episode_count: 24,
      id: 10,
      name: 'Season 3',
      overview:
        'In the final season, the Lambe family confronts significant changes and memorable moments that define their time in Edendale.',
      poster_path: '/xLYgloqC3WZYASurawYOdfTbAg1.jpg',
      season_number: 3,
      vote_average: 7,
    },
    {
      air_date: '1985-09-18',
      episode_count: 24,
      id: 9,
      name: 'Season 4',
      overview:
        'In the final season, the Lambe family confronts significant changes and memorable moments that define their time in Edendale.',
      poster_path: '/5nWdfhWuDIHXMaNwiI6F8fTejBI.jpg',
      season_number: 4,
      vote_average: 7,
    },
    {
      air_date: '1986-09-24',
      episode_count: 23,
      id: 13,
      name: 'Season 5',
      overview:
        'In the final season, the Lambe family confronts significant changes and memorable moments that define their time in Edendale.',
      poster_path: '/2RoGaNsdqknGzJdBJHY0eEYfKqj.jpg',
      season_number: 5,
      vote_average: 6.8,
    },
    {
      air_date: '1987-09-16',
      episode_count: 22,
      id: 12,
      name: 'Season 6',
      overview:
        'In the final season, the Lambe family confronts significant changes and memorable moments that define their time in Edendale.',
      poster_path: '/h1tMQYRbM8Z4s4xGIvvUne1d8qZ.jpg',
      season_number: 6,
      vote_average: 2.5,
    },
  ],
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
  ],
  status: 'Ended',
  tagline: "It couldn't happen anywhere else.",
  type: 'Scripted',
  vote_average: 5.5,
  vote_count: 86,
};

const TVShowsDetails = () => {
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  const dispatch = useDispatch();

  const [selectedSeason, setSelectedSeason] = useState(null);

  const handleSeasonClick = (season) => {
    setSelectedSeason(season);
  };

  const handleCloseModal = () => {
    setSelectedSeason(null);
  };

  const handleRemoveFromWatchlist = () => {
    dispatch(removeFromWatchlist(30));
  };
  return (
    <Container className="my-4">
      <Row className="mb-4">
        <Col md={4}>
          <Image
            src={`https://image.tmdb.org/t/p/w500${showData.poster_path}`}
            alt={showData.name}
            fluid
            rounded
            className="shadow-lg"
          />
        </Col>
        <Col md={8}>
          <div className="d-flex flex-column mb-4">
            <h1 className="display-4 text-dark fw-bolder  ">
              {showData.name}{' '}
              <Button
                onClick={handleRemoveFromWatchlist}
                className="float-end border-0"
                style={{
                  background: 'none',
                  width: '40px',
                  height: '40px',
                }}
              >
                <Heart fill="#FFE353" size={40} />
              </Button>{' '}
            </h1>
            <span className="text-muted small">
              {formatDate(showData.first_air_date)} - {formatDate(showData.last_air_date)}
            </span>
          </div>
          <Row className="mb-3 ">
            <Col>
              <div className="d-flex align-items-center gap-2">
                <div className="d-flex flex-row align-items-center gap-1 star ">
                  <Star className="text-dark " fill="dark" size={20} />
                  <Star className="text-dark " fill="dark" size={20} />
                  <Star className="text-dark " fill="dark" size={20} />
                  <Star className="text-dark " fill="dark" size={20} />
                  <Star className="text-dark" size={20} />
                </div>{' '}
                <span>
                  {showData.vote_average.toFixed(1)} / 10
                  <small className="text-muted ms-2">({showData.vote_count} votes)</small>
                </span>
              </div>
            </Col>
          </Row>

          <Row className="mb-3">
            <p className="mt-3 " style={{ fontSize: '20px' }}>
              {' '}
              {showData.overview}
            </p>
            <div className="my-3">
              {showData.genres.map((genre) => (
                <Badge key={genre.id} bg="warning" className="me-2 p-3 rounded-pill">
                  {genre.name}
                </Badge>
              ))}
            </div>
            <Col>
              <div className="d-flex flex-wrap gap-md-4 gap-3">
                <div className="d-flex align-items-center gap-2">
                  <Clock className="me-2" />
                  <strong>Duration:</strong>
                  <span>{showData.episode_run_time[0]} min per episode</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Globe className="me-2" />
                  <strong>Languages:</strong>
                  <span>{showData.spoken_languages[0].english_name}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Calendar className="me-2" />
                  <strong>Total Seasons:</strong>
                  <span>{showData.number_of_seasons}</span>
                </div>{' '}
                <div className="d-flex align-items-center gap-2">
                  <Calendar className="me-2" />
                  <strong>Total Episodes:</strong>
                  <span>{showData.number_of_episodes}</span>
                </div>
              </div>
            </Col>

            <div className="d-flex align-items-center mt-3">
              {showData.networks.map((network) => (
                <div key={network.id} className="me-3 text-center">
                  <Image
                    src={`https://image.tmdb.org/t/p/original${network.logo_path}`}
                    alt={network.name}
                    width={150}
                    height={50}
                    className="mb-1"
                  />
                </div>
              ))}
            </div>
          </Row>
        </Col>
      </Row>

      {showData.seasons && showData.seasons.length > 0 && (
        <Card>
          <Card.Body>
            <Card.Title className="mb-4">Seasons</Card.Title>
            <Row>
              {showData.seasons.map((season) => (
                <Col key={season.id} md={4} className="mb-3">
                  <Card role="button" onClick={() => handleSeasonClick(season)} className="h-100">
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w300${season.poster_path}`}
                      alt={season.name}
                      style={{ height: '400px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title>{season.name}</Card.Title>

                      <div className="d-flex align-items-center gap-2">
                        <Star className="text-warning" size={20} />
                        <span>{season.vote_average.toFixed(1)} / 10</span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      )}

      {selectedSeason && (
        <Modal show={!!selectedSeason} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedSeason.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center mb-3">
              {selectedSeason.poster_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w300${selectedSeason.poster_path}`}
                  alt={selectedSeason.name}
                  fluid
                  rounded
                  className="mb-3"
                  style={{ maxHeight: '300px', objectFit: 'cover' }}
                />
              )}
            </div>
            <div>
              <p>
                <strong>Air Date:</strong> {formatDate(selectedSeason.air_date)}
              </p>
              <p>
                <strong>Number of Episodes:</strong> {selectedSeason.episode_count}
              </p>
              <h5>Season Overview</h5>
              <p>{selectedSeason.overview || 'No description available.'}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default TVShowsDetails;
