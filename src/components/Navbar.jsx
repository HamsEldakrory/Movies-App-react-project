import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Search, Bookmark, User } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import LanguageDropdown from './LanguageDropdown';

import '../styles/navbar.css';
const IMDbNavbar = () => {
  return (
    <Navbar expand="lg" className="cinema-navbar shadow" fixed="top">
      <Container fluid className="navbar-container">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="cinema-logo">
          <span className="logo-text">CinemaScore</span>
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="cinema-navbar-nav" className="custom-toggle" />

        {/* Navigation Items */}
        <Navbar.Collapse id="cinema-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link as={NavLink} to="/" className="nav-item">
              Movies
            </Nav.Link>
            <Nav.Link as={NavLink} to="/tv-shows" className="nav-item">
              TV Shows
            </Nav.Link>
          </Nav>

          {/* Right Side Icons */}
          <Nav className="ms-auto nav-actions">
            <Nav.Link as={Link} to="/search" className="nav-icon">
              <Search size={22} />
            </Nav.Link>
            <Nav.Link as={Link} to="/watch-list" className="nav-icon">
              <Bookmark size={22} />
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
