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
import { Container, Row, Col } from'react-bootstrap';

const MovieList = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.watchlist);
  const [ movies, setMovies ] = useState([]);
  const [ totalResults, setTotalResults ] = useState(0);
  const [ totalPages, setTotalPages ] = useState(0);

  useEffect(() => {
    getMovies(1).then((response) => {
      setMovies(response.movies);
      setTotalResults(response.totalResults);
      setTotalPages(response.totalPages);
      console.log(response);
    }).catch((error) => console.error(error));
  }, []);


  return (
    <div style={{ padding: '20px' }}>
      <Search></Search>
      <h1 className='p-4'>Movies List</h1>
        <Container>
          <Row className=''>
            {movies.map((movie) => (
              <Col className='d-flex mb-3' key={movie.id} md={4} lg={2} sm={12}>
                <MainPageCard
                  showItem={movie}
                  showType={'movie'}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <CustomPagination totalPages={totalPages} />
    </div>
  );
};

export default MovieList;
