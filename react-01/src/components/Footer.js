import React from 'react';
import nsbeLogo from '../images/nsbe-logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={nsbeLogo} alt="NSBE Logo" className="nsbe-logo" />
        <address>
          <strong>National Engineering Society</strong><br />
          987 Engineering Way<br />
          Silicon Valley, CA 94043<br />
          (888) 987-6543
        </address>
        <p>&copy; Copyright Convention.nsbe.org 2024</p>
      </div>
      <div className="footer-right">
        <ul>
          <li><a href="https://nsbe.org/k-12">Elementary & K-12</a></li>
          <li><a href="https://nsbe.org/home/collegiate/">Programs</a></li>
          <li><a href="https://nsbe.org/home/professionals/">University Level</a></li>
          <li><a href="https://nsbe.org/home/partnerships/">Professional Development</a></li>
          <li><a href="https://nsbe.org/membership/">Corporate Partnerships</a></li>
          <li><a href="https://nsbe.org/membership/">Member Resources</a></li>
          <li><a href="https://convention.nsbe.org/">Conference Events</a></li>
        </ul>
        <div className="contact-button">
          <a href="/contact">
            <button>Contact US</button>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
