import React from 'react';
import './EventSection.css';

function EventSection() {
  return (
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
  );
}

export default EventSection;
