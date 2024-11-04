// src/components/Header.js

import React from 'react';
import '../style.css';

function Header() {
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.style.display === "flex") {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "flex";
    }
  };

  return (
    <header className="main-header">
      <div className="header-left">
        <a href="/">
          <img src="images/nsbe-logo.png" alt="NSBE Logo" className="nsbe-logo" />
        </a>
      </div>

      <div className="header-right">
        <nav className="desktop-nav">
          <ul>
            <li><a href="/">Welcome</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/timeline">Timeline</a></li>
            <li className="dropdown">
              <a href="#" className="dropbtn">Programming</a>
              <div className="dropdown-content">
                <a href="/awards">Awards</a>
                <a href="/competitions">Competitions</a>
              </div>
            </li>
          </ul>
        </nav>

        <div className="search-social">
          <form action="#" className="search-form">
            <input type="text" placeholder="Search" />
            <button type="submit">🔍</button>
          </form>
          <div className="social-icons">
            <a href="https://www.facebook.com/nsbeconvention">
              <img src="images/facebook-app-round-white-icon.webp" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/nsbeconvention">
              <img src="images/instagram-new.png" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/national-society-of-black-engineers/mycompany/">
              <img src="images/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://twitter.com/nsbeconvention">
              <img src="images/x-social-media-white-icon.png" alt="X" />
            </a>
            <a href="https://outlook.office.com/mail/deeplink/compose?mailtouri=mailto%3Anational_partnerships%40nsbe.org">
              <img src="images/email-5-xxl.png" alt="Email" />
            </a>
          </div>
        </div>
      </div>

      <div className="mobile-social-icons">
        <a href="https://www.facebook.com/nsbeconvention">
          <img src="images/facebook-app-round-white-icon.webp" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/nsbeconvention">
          <img src="images/instagram-new.png" alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/national-society-of-black-engineers/mycompany/">
          <img src="images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/nsbeconvention">
          <img src="images/x-social-media-white-icon.png" alt="X" />
        </a>
        <a href="https://outlook.office.com/mail/deeplink/compose?mailtouri=mailto%3Anational_partnerships%40nsbe.org">
          <img src="images/email-5-xxl.png" alt="Email" />
        </a>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;
