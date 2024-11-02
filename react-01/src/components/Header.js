import React from 'react';
import './Header.css';
import logo from '../images/nsbe-logo.png';

function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <a href="/">
          <img src={logo} alt="NSBE Logo" className="nsbe-logo" />
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
            {/* Social media links go here */}
          </div>
        </div>
      </div>
      {/* Mobile-only elements */}
      <div className="mobile-social-icons">
        {/* Add mobile social icons here */}
      </div>
      <div className="hamburger" onClick={() => {/* Add toggle logic */}}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;
