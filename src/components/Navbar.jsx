import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Search, Bookmark } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectWatchlistCount } from '../store/slices/watchlistSlice';
import LanguageDropdown from './LanguageDropdown';
import '../styles/navbar.css';

const IMDbNavbar = () => {
  const watchlistCount = useSelector(selectWatchlistCount);

  return (
    <Navbar expand="lg" className="cinema-navbar shadow" fixed="top">
      <Container fluid className="navbar-container">
        <Navbar.Brand as={Link} to="/" className="cinema-logo">
          <span className="logo-text">CinemaScore</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="cinema-navbar-nav" className="custom-toggle" />

        <Navbar.Collapse id="cinema-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link as={NavLink} to="/" className="nav-item">
              Movies
            </Nav.Link>
            <Nav.Link as={NavLink} to="/tv-shows" className="nav-item">
              TV Shows
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto nav-actions d-flex align-items-center">
            <Nav.Link as={Link} to="/search" className="nav-icon position-relative">
              <Search size={30} />
            </Nav.Link>

            <Nav.Link as={Link} to="/watch-list" className="nav-icon position-relative">
              <Bookmark size={30} />
              {watchlistCount > 0 && <span className="badge">{watchlistCount}</span>}
            </Nav.Link>

            <Nav.Link as={NavLink} className="nav-icon language-drop">
              <LanguageDropdown />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default IMDbNavbar;
