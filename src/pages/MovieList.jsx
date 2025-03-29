import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../store/slices/watchlistSlice';
import { Link, useParams } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { getMovies } from '../api/movieService';
import MainPageCard from '../components/MainPageCard';
import Search from '../components/Search';
import CustomPagination from '../components/Pagination';
import { Container, Row, Col } from 'react-bootstrap';

const MovieList = () => {
  const { data, isLoading, error } = useMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data.shows.length) {
    return <div>No movies are found.</div>;
  }

  const movieCards = data.movies.map((movie) => (
    <Col className="d-flex mb-3" key={movie.id} md={4} lg={2} sm={12}>
      <MainPageCard showItem={movie} showType={'movie'} />
    </Col>
  ));

  return (
    <Container>
      <Search />
      <h1 className="p-4">Movies List</h1>
      <Row className="">{movieCards}</Row>
      <CustomPagination totalPages={data.totalPages} />
    </Container>
  );
};

export default MovieList;
