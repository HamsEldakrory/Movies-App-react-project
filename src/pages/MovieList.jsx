import MainPageCard from '../components/MainPageCard';
import Search from '../components/Search';
import CustomPagination from '../components/Pagination';
import { Container, Row, Col } from 'react-bootstrap';
import useMovies from '../hooks/useMovies';

const MovieList = () => {
  const { data, isLoading, error } = useMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data.movies.length) {
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
