import { Col, Container, Row } from 'react-bootstrap';
import Search from '../components/Search';
import useSearchResults from '../hooks/useSearch';
import MainPageCard from '../components/MainPageCard';
import CustomPagination from '../components/Pagination';

const SearchResults = () => {
  const { data, isLoading, isError, error, query, category } = useSearchResults();

  if (!query) {
    return (
      <Container className="my-5">
        <Search />
        <h1 className="fs-6 my-3">Search Results</h1>
        <p>No search query provided</p>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container className="my-5">
        <Search />
        <h1 className="fs-6 my-3">
          <span className="fw-bold">Search Results For:</span> {query}
        </h1>
        <p>Loading...</p>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container className="my-5">
        <Search />
        <p className="fs-6 my-3">Error fetching search results: {error.message}</p>
      </Container>
    );
  }

  const itemsData = category === 'movies' ? data.movies : data.shows;

  console.log(itemsData);

  if (!itemsData.length) {
    return (
      <Container className="my-5">
        <Search />
        <p className="fs-6 my-3">No results found for "{query}"</p>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Search />
      <h1 className="fs-6 my-3">
        <span className="fw-bold">Search Results For:</span> {query}
      </h1>
      <Row className="gy-3 mt-4">
        {itemsData.map((movie) => (
          <Col
            key={movie.id}
            xs={12}
            sm={6}
            lg={2}
            xl={2}
            className="d-flex justify-content-center"
          >
            <MainPageCard showItem={movie} />
          </Col>
        ))}
      </Row>
      <CustomPagination totalPages={data.totalPages} />
    </Container>
  );
};

export default SearchResults;
