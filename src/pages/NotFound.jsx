import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">Oops! Page not found.</p>
      <Link to="/" className="notfound-button">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
