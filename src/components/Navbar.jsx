import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Search, Bookmark, User } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import LanguageDropdown from './LanguageDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const IMDbNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-2">
      <Container fluid>
        {/* IMDb Logo */}
        <Navbar.Brand as={Link} to="/" className="me-4">
          <div
            style={{
              backgroundColor: '#F5C518',
              color: 'black',
              fontWeight: 'bold',
              padding: '2px 5px',
              borderRadius: '3px',
            }}
          >
            IMDb
          </div>
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Navigation */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="me-2">
              Movies
            </Nav.Link>

            <Nav.Link as={NavLink} to="/tv-shows" className="me-2">
              Tv Shows
            </Nav.Link>
          </Nav>

          {/* Icons */}
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/watch-list"
              className="me-3 p-0 d-flex align-items-center"
              style={{ color: 'white' }}
            >
              <Bookmark size={25} />
            </Nav.Link>
            <Nav.Link as={NavLink} className="me-3 p-0 d-flex align-items-center">
                <LanguageDropdown />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default IMDbNavbar;
