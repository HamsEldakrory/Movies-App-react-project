import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Search = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${search}`);
  };

  return (
    <form method="get" className="d-flex align-items-center gap-4" onSubmit={handleSearchSubmit}>
      <label htmlFor="search" className="visually-hidden">
        Search
      </label>

      <input
        type="text"
        placeholder="Search And Explore"
        id="search"
        className="form-control flex-grow-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button variant="warning" type="submit" className="custom-button">
        Search
      </Button>
    </form>
  );
};

export default Search;
