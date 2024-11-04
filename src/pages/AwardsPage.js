// src/pages/AwardsPage.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css'; // Ensure styles are applied

function AwardsPage() {
  return (
    <div>

      {/* Awards Section */}
      <section className="awards-section">
        <div className="container">
          <h1>Golden Torch Awards Honorees</h1>

          <div className="award-item">
            <img src="images/award1.jpg" alt="Award Winner Image" />
            <h2>Marcus Davis – Community Award</h2>
            <p>
              Marcus Davis was recognized for his outstanding contributions to the community, where he has spearheaded numerous initiatives to promote STEM education among underrepresented groups. His dedication to mentoring young engineers and organizing outreach programs has made a lasting impact, inspiring the next generation of innovators.
            </p>
          </div>

          <div className="award-item">
            <img src="images/award2.jpg" alt="Award Winner Image" />
            <h2>Angela Rodriguez – Innovation Award</h2>
            <p>
              Angela Rodriguez received the Innovation Award for her groundbreaking work in renewable energy technologies. Her innovative solutions have helped push the boundaries of sustainable engineering, and her commitment to finding environmentally-friendly alternatives continues to shape the future of the industry.
            </p>
          </div>

          <div className="award-item">
            <img src="images/award3.jpg" alt="Award Winner Image" />
            <h2>Christopher Taylor – Leadership Award</h2>
            <p>
              Christopher Taylor was honored with the Leadership Award for his exceptional ability to lead teams toward success in engineering projects. Known for his strategic vision and passion for fostering diversity in the workplace, he has guided countless engineers to achieve their goals while promoting an inclusive and collaborative environment.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AwardsPage;
