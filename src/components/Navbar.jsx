import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Search } from 'lucide-react';
import { FaRegHeart } from 'react-icons/fa';
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
            <div className="d-flex gap-3 align-items-center justify-content-center">
              <Nav.Link as={NavLink} to="/" className="nav-item">
                Movies
              </Nav.Link>
              <Nav.Link as={NavLink} to="/tv-shows" className="nav-item">
                TV Shows
              </Nav.Link>
            </div>
          </Nav>

          <Nav className="ms-auto nav-actions">
            <div className="d-flex gap-3 align-items-center justify-content-center">
              <Nav.Link as={Link} to="/search" className="nav-icon position-relative">
                <Search size={30} />
              </Nav.Link>
              <Nav.Link as={Link} to="/watch-list" className="nav-icon position-relative">
                <FaRegHeart size={30} />
                {watchlistCount > 0 && <span className="badge">{watchlistCount}</span>}
              </Nav.Link>
              <Nav.Link as={NavLink} className="nav-icon language-drop">
                <LanguageDropdown />
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default IMDbNavbar;
