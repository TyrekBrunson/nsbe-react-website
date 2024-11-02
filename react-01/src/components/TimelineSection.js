// src/components/TimelineSection.js

import React from 'react';

function TimelineSection() {
  const timelineData = [
    { year: 1975, event: 'NSBE Founded' },
    { year: 1980, event: 'First National Convention' },
    { year: 2000, event: '25th Anniversary Celebration' },
    { year: 2025, event: '50th Anniversary' },
    // Add more timeline events as needed
  ];

  return (
    <section className="timeline-section">
      <h1>50 Years of NSBE</h1>
      <div id="timeline-container">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <h2>{item.year}</h2>
            <p>{item.event}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TimelineSection;
