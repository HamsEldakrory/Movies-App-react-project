import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWatchlist, removeFromWatchlist } from '../store/slices/watchlistSlice';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { getTVShows } from '../api/tvService';
import MainPageCard from '../components/MainPageCard';
import CustomPagination from '../components/Pagination';
import Search from '../components/Search';
import { Container, Row, Col } from'react-bootstrap';

const TVList = () => {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.watchlist);
  const [ tvShows, setTvShows ] = useState([]);
  const [ totalResults, setTotalResults ] = useState(0);
  const [ totalPages, setTotalPages ] = useState(0);

  useEffect(() => {
    getTVShows(1).then((response) => {
      setTvShows(response.shows);
      setTotalResults(response.totalResults);
      setTotalPages(response.totalPages);
      console.log(response);
    }).catch((error) => console.error(error));
  }, []);


  return (
    <div style={{ padding: '20px' }}>
      <Search></Search>
      <h1 className='p-4'>Now Playing</h1>
        <Container>
          <Row className=''>
            {tvShows.map((tvShow) => (
              <Col className='d-flex mb-3' key={tvShow.id} md={4} lg={2} sm={12}>
                <MainPageCard
                  showItem={tvShow}
                  showType={'tv'}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <CustomPagination totalPages={totalPages} />
    </div>
  );
};

export default TVList;
