import { Container } from 'react-bootstrap';
import Search from '../components/Search';
import useSearchResults from '../hooks/useSearch';

const SearchResults = () => {
  const { data, isLoading, isError, error, query } = useSearchResults();

  if (!query) {
    return (
      <Container className="my-5">
        <Search />
        <h1>Search Results</h1>
        <p>No search query provided</p>
      </Container>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching search results: {error.message}</p>;
  }

  if (!data.movies.length) {
    return (
      <Container className="my-5">
        <Search />
        <h1>Search Results</h1>
        <p>No results found for "{query}"</p>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Search />
      <h1>Search Results</h1>
    </Container>
  );
};

export default SearchResults;
