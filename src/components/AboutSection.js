import React from 'react';
import './AboutSection.css';
import profile1 from '../images/profile1-placeholder.png';
import profile2 from '../images/profile2-placeholder.png';
import profile3 from '../images/profile3-placeholder.png';
import profile4 from '../images/profile4-placeholder.png';

function AboutSection() {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About NSBE</h2>
          <p>The National Society of Black Engineers (NSBE) is a student-governed organization dedicated to increasing the number of Black engineers who excel academically, succeed professionally, and positively impact the community...</p>
        </div>
        <div className="profile-gallery">
          <img src={profile1} alt="Profile 1" />
          <img src={profile2} alt="Profile 2" />
          <img src={profile3} alt="Profile 3" />
          <img src={profile4} alt="Profile 4" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
