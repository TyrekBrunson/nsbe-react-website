import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style.css";

function TimelinePage() {
  const [events, setEvents] = useState([]);

  // Fetch events from the backend
  const fetchEvents = () => {
    fetch("http://localhost:3000/api/events")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => setEvents(data)) // Update state with fetched events
      .catch((error) => console.error("Error fetching events:", error));
  };

  // Use effect to load events when the component loads
  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle event deletion
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/api/events/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Event deleted successfully!");
          fetchEvents(); // Refresh the event list
        } else {
          alert("Error deleting event: " + data.message);
        }
      })
      .catch((error) => console.error("Error deleting event:", error));
  };

  return (
    <div>
      <section className="timeline-section">
        <h1>50 Years of NSBE</h1>
        <div id="timeline-container">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event._id} className="timeline-item">
                <div className="timeline-date">{event.date}</div>
                <div className="timeline-content">
                  <img
                    src={`images/${event.img_name}`}
                    alt={event.event}
                    className="event-image"
                  />
                  <h3>{event.event}</h3>
                  <p>{event.description}</p>
                  <ul>
                    {event.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  {/* Delete Button */}
                  <button onClick={() => handleDelete(event._id)}>
                    Delete Event
                  </button>
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
