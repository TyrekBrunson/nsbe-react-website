import React from 'react';
import './HomePage.css'; // Make sure to create this CSS file with your styling
import nsbeLogo from '../images/nsbe-logo.png';
import banner1 from '../images/banner1-placeholder.png';
import banner2 from '../images/banner2-placeholder.png';
import banner3 from '../images/banner3-placeholder.png';
import profile1 from '../images/profile1-placeholder.png';
import profile2 from '../images/profile2-placeholder.png';
import profile3 from '../images/profile3-placeholder.png';
import profile4 from '../images/profile4-placeholder.png';
import cityBanner from '../images/banner-city.png';

function HomePage() {
  return (
    <div>
      {/* Banner Section */}
      <section className="main-banner">
        <div className="banner-images">
          <img src={banner1} alt="Banner Image 1" className="banner-img" />
          <img src={banner2} alt="Banner Image 2" className="banner-img" />
          <img src={banner3} alt="Banner Image 3" className="banner-img" />
        </div>
      </section>

      {/* Upcoming Event Section */}
      <section className="upcoming-event">
        <div className="event-container">
          <h2>Elevate 2024: Engineering Success and Beyond</h2>
          <p>The National Society of Black Engineers (NSBE) is dedicated to increasing the number of culturally responsible Black engineers...</p>
          <div className="event-buttons">
            <button className="join-event-btn">Join Event</button>
            <button className="sign-up-btn">Sign Up</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <div className="about-text">
            <h2>About NSBE</h2>
            <p>The National Society of Black Engineers (NSBE) is a student-governed organization...</p>
          </div>
          <div className="profile-gallery">
            <img src={profile1} alt="Profile 1" />
            <img src={profile2} alt="Profile 2" />
            <img src={profile3} alt="Profile 3" />
            <img src={profile4} alt="Profile 4" />
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="subscribe-section">
        <div className="subscribe-banner">
          <img src={cityBanner} alt="City Banner" />
          <div className="subscribe-content">
            <h2>Get emails about opportunities from NSBE</h2>
            <form>
              <input type="email" placeholder="Enter Your Email ..." required />
              <button type="submit">Enter</button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
