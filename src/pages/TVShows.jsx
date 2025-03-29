import MainPageCard from '../components/MainPageCard';
import CustomPagination from '../components/Pagination';
import Search from '../components/Search';
import { Container, Row, Col } from 'react-bootstrap';
import useTvShows from '../hooks/useTvShows';

const TVList = () => {
  const { data, isLoading, error } = useTvShows();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data.shows.length) {
    return <div>No TV shows found.</div>;
  }

  const tvShowCards = data.shows.map((tvShow) => (
    <Col className="d-flex mb-3" key={tvShow.id} sm={12} md={6} lg={4} xl={3}>
      <MainPageCard showItem={tvShow} showType={'tv'} />
    </Col>
  ));

  return (
    <Container>
      <Search />
      <h1 className="p-4">Now Playing</h1>
      <Row>{tvShowCards}</Row>
      <CustomPagination totalPages={data.totalPages} />
    </Container>
  );
};

export default TVList;
