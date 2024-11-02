import React from 'react';
import { Link } from 'react-router-dom';
import nsbeLogo from '../images/nsbe-logo.png';

function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <Link to="/">
          <img src={nsbeLogo} alt="NSBE Logo" className="nsbe-logo" />
        </Link>
      </div>
      <div className="header-right">
        <nav className="desktop-nav">
          <ul>
            <li><Link to="/">Welcome</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/timeline">Timeline</Link></li>
            <li className="dropdown">
              <a href="#" className="dropbtn">Programming</a>
              <div className="dropdown-content">
                <Link to="/awards">Awards</Link>
                <Link to="/competitions">Competitions</Link>
              </div>
            </li>
          </ul>
        </nav>
        {/* Add any additional elements like social icons, search bar, etc. */}
      </div>
    </header>
  );
}

export default Header;
