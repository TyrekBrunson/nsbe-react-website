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
          Welcome to the National Society of Black Engineers (NSBE), an organization dedicated to empowering Black engineers by fostering academic excellence, professional success, and positive community impact. Whether you're a student, a professional, or simply interested in supporting diversity in STEM, NSBE offers valuable resources, mentorship, and opportunities for growth at every stage of your career. Join us as we work together to shape the future of engineering and technology.
          </p>
        </div>
      </section>

      {/* About NSBE Section */}
      <section className="about-section">
        <div className="container">
          <h2>About NSBE</h2>
          <p>
          The National Society of Black Engineers (NSBE) was founded in 1975 with a mission to increase the number of culturally responsible Black engineers who excel academically and succeed professionally. With a wide network of chapters spanning high schools, colleges, and professional organizations, NSBE is committed to offering programs that advance diversity and inclusion in the engineering field. Through leadership development, technical training, and community engagement, NSBE ensures that its members are prepared to make a lasting impact on society.
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
          As the Chairperson of the National Society of Black Engineers (NSBE), it is my honor to welcome you to our vibrant community of engineers, innovators, and leaders. Our mission is to not only support academic and professional excellence but also to cultivate a strong network where members uplift one another and strive toward shared goals. Through hard work, dedication, and a commitment to diversity in STEM, we are shaping the future of engineering. I invite you to explore the opportunities NSBE has to offer and join us on this journey of empowerment and growth.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
