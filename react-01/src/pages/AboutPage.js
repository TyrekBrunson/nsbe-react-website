// src/pages/AboutPage.js

import React from 'react';
import '../style.css'; // Ensure styles are applied to this page

function AboutPage() {
  return (
    <div>
      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <h1>Welcome to NSBE</h1>
          <p>
            Welcome to the National Society of Black Engineers (NSBE), an organization dedicated to empowering Black engineers by fostering academic excellence, professional success, and positive community impact...
          </p>
        </div>
      </section>

      {/* About NSBE Section */}
      <section className="about-section">
        <div className="container">
          <h2>About NSBE</h2>
          <p>
            The National Society of Black Engineers (NSBE) was founded in 1975 with a mission to increase the number of culturally responsible Black engineers...
          </p>
          <img src="images/nesbemeeting1.jpg" alt="About NSBE Image" className="about-img" />
        </div>
      </section>

      {/* Chair Welcome Section */}
      <section className="chair-welcome">
        <div className="container">
          <h2>Chairperson's Welcome</h2>
          <img src="images/chairperson.jpg" alt="Chairperson" className="chair-img" />
          <p>
            As the Chairperson of the National Society of Black Engineers (NSBE), it is my honor to welcome you to our vibrant community...
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
