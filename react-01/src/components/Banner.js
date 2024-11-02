import React from 'react';
import './Banner.css';
import banner1 from '../images/banner1-placeholder.png';
import banner2 from '../images/banner2-placeholder.png';
import banner3 from '../images/banner3-placeholder.png';

function Banner() {
  return (
    <section className="main-banner">
      <div className="banner-images">
        <img src={banner1} alt="Banner Image 1" className="banner-img" />
        <img src={banner2} alt="Banner Image 2" className="banner-img" />
        <img src={banner3} alt="Banner Image 3" className="banner-img" />
      </div>
    </section>
  );
}

export default Banner;
