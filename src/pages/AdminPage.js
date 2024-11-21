import React, { useState, useEffect } from "react";

function AdminPage() {
  const [events, setEvents] = useState([]);
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  // Fetch events from the backend
  const fetchEvents = async () => {
    try {
      const res = await fetch("https://nsbe-react-website-backend.onrender.com/api/events");
      if (!res.ok) {
        throw new Error(`Failed to fetch events: ${res.statusText}`);
      }
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error("Error fetching events:", err);
      setResult("Failed to load events. Please try again.");
    }
  };

  // Fetch events on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle text input changes
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const name = e.target.name;
    const file = e.target.files[0];
    setInputs((prevInputs) => ({ ...prevInputs, [name]: file }));
  };

  // Add event to server
  const addEventToServer = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData();
    for (const key in inputs) {
      formData.append(key, inputs[key]);
    }

    try {
      const res = await fetch("https://nsbe-react-website-backend.onrender.com/api/events", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to add event");
      }

      const data = await res.json();
      setResult("Event successfully added!");
      setInputs({});
      fetchEvents(); // Refresh the events list
    } catch (err) {
      console.error("Error adding event:", err);
      setResult("Failed to add event. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://nsbe-react-website-backend.onrender.com/api/events/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete event");
      }

      alert("Event deleted successfully!");
      fetchEvents(); // Refresh the events list
    } catch (err) {
      console.error("Error deleting event:", err);
      setResult("Failed to delete event. Please try again.");
    }
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      {result && <p>{result}</p>}

      <form onSubmit={addEventToServer}>
        <input
          type="text"
          name="event"
          value={inputs.event || ""}
          placeholder="Event Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="date"
          value={inputs.date || ""}
          placeholder="Year (YYYY)"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          value={inputs.description || ""}
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="details"
          value={inputs.details || ""}
          placeholder="Details (comma-separated)"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          value={inputs.location || ""}
          placeholder="Location"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="attendees"
          value={inputs.attendees || ""}
          placeholder="Number of Attendees"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="theme"
          value={inputs.theme || ""}
          placeholder="Theme"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="organizer"
          value={inputs.organizer || ""}
          placeholder="Organizer"
          onChange={handleChange}
          required
        />
        <div>
          <label>Upload Image:</label>
          <input
            type="file"
            name="img_name"
            accept="image/*"
            onChange={handleImageChange}
          />
          {inputs.img_name && (
            <img
              src={URL.createObjectURL(inputs.img_name)}
              alt="Preview"
              style={{ width: "150px", marginTop: "10px" }}
            />
          )}
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            {event.event} - {event.location} ({event.date}){" "}
            <button onClick={() => handleDelete(event._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPage;
