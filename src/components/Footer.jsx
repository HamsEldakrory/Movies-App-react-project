import React from 'react';
import { FaTiktok, FaInstagram, FaTwitter, FaYoutube, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialIcons = [
    { icon: <FaTiktok />, link: 'https://www.tiktok.com/@imdb' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com/imdb' },
    { icon: <FaTwitter />, link: 'https://twitter.com/imdb' },
    { icon: <FaYoutube />, link: 'https://www.youtube.com/imdb' },
    { icon: <FaFacebook />, link: 'https://www.facebook.com/imdb' },
  ];

  const footerLinks1 = [
    'Help',
    'Site Index',
    'IMDbPro',
    'Press Room',
    'Advertising',
    'Jobs',
    'Conditions of Use',
    'Privacy Policy',
    'Your Ads Privacy Choices',
  ];

  const footerLinks2 = ['Box Office Mojo', 'License IMDb Data'];

  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        {/* Social Media Icons */}
        <div className="d-flex justify-content-center mb-4">
          <div className="border border-secondary rounded p-3">
            <div className="d-flex align-items-center">
              <span className="me-3">Follow IMDb on Social</span>
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light me-3"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
