import React from 'react';
import '../assets/style/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import facebookLogo from '../assets/img/facebook.png';
import twitterLogo from '../assets/img/twitter.png';
import instagramLogo from '../assets/img/instagram.png';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="social-contact">
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
              <img src={twitterLogo} alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <img src={instagramLogo} alt="Instagram" />
            </a>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <a href="mailto:info@omnicomcr.com" className="contact-link">info@omnicomcr.com</a>
              <i className="fas fa-envelope" aria-hidden="true"></i>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
              <a href="tel:3016758465" className="contact-link">3016758465</a>
            </div>
          </div>
        </div>
        <p>&copy; OMNICOM CR ENTERPRISES, LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};
