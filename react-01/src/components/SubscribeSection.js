import React from 'react';
import './SubscribeSection.css';
import cityBanner from '../images/banner-city.png';

function SubscribeSection() {
  return (
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
  );
}

export default SubscribeSection;
