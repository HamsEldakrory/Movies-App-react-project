import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Search = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const [category, setCategory] = useState('movies');
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!search || !search.trim()) return;
    navigate(`/search?query=${search}&category=${category}`);
  };

  return (
    <form method="get" className="d-flex align-items-center gap-4" onSubmit={handleSearchSubmit}>
      <label htmlFor="search" className="visually-hidden">
        Search
      </label>

      <div className="dropdown-container">
        <select
          className="language-dropdown"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="movies">movies</option>
          <option value="shows">tv shows</option>
        </select>
      </div>

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
