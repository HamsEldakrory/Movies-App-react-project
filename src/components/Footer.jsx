import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaTiktok, FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
const Footer = () => {
  const socialIcons = [
    { icon: <FaTiktok />, link: 'https://www.tiktok.com/' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com/' },
    { icon: <FaTwitter />, link: 'https://twitter.com/' },
    { icon: <FaYoutube />, link: 'https://www.youtube.com/' },
    { icon: <FaFacebook />, link: 'https://www.facebook.com/' },
  ];

  return (
    <Navbar bg="dark" variant="dark" className="footer-navbar py-5 mt-4">
      <Container fluid className="d-flex flex-column align-items-center">
        <div className="d-flex justify-content-center mb-3">
          {socialIcons.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon mx-2"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="text-secondary mt-2">
          &copy; {new Date().getFullYear()} CinemaScore. All rights reserved.
        </div>
      </Container>
    </Navbar>
  );
};

export default Footer;
