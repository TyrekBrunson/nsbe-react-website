// src/pages/TimelinePage.js

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../style.css';

function TimelinePage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const jsonUrl = 'https://raw.githubusercontent.com/TyrekBrunson/TyrekBrunson.github.io/main/projects/part7/timeline.json';

    fetch(jsonUrl)
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div>
      <section className="timeline-section">
        <h1>50 Years of NSBE</h1>
        <div id="timeline-container">
          {events.length > 0 ? (
            events.map(event => (
              <div key={event._id} className="timeline-item">
                <div className="timeline-date">{event.date}</div>
                <div className="timeline-content">
                  <img src={`images/${event.img_name}`} alt={event.event} />
                  <h3>{event.event}</h3>
                  <p>{event.description}</p>
                  <ul>
                    {event.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <p>Loading timeline events...</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default TimelinePage;
