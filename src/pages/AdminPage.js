import React, { useState, useEffect } from "react";

function AdminPage() {
  const [events, setEvents] = useState([]); // Store events
  const [formData, setFormData] = useState({
    event: "",
    img_name: "",
    date: "",
    description: "",
    details: "",
    location: "",
    attendees: "",
    theme: "",
    organizer: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Fetch events from the backend
  const fetchEvents = () => {
    fetch("http://localhost:3000/api/events")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json(); // Parse JSON only if response is valid
      })
      .then((data) => {
        console.log("Fetched events:", data); // Debug log
        setEvents(data); // Update the state with fetched events
      })
      .catch((err) => {
        console.error("Error fetching events:", err); // Log errors
      });
  };

  // Use effect to load events when the component loads
  useEffect(() => {
    fetchEvents();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    fetch("http://localhost:3000/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            img_name: data.imagePath, // Update formData with the image path
          }));
          alert("Image uploaded successfully!");
        } else {
          alert("Image upload failed: " + data.message);
        }
      })
      .catch((err) => console.error("Error uploading image:", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      details: formData.details.split(",").map((item) => item.trim()),
      attendees: parseInt(formData.attendees, 10),
    };

    fetch("http://localhost:3000/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formattedData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setSuccess("Event added successfully!");
          fetchEvents(); // Refresh the event list
        } else {
          setError(data.message);
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("An unexpected error occurred.");
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/api/events/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Event deleted successfully!");
          fetchEvents(); // Refresh the event list
        } else {
          alert("Error deleting event: " + data.message);
        }
      })
      .catch((err) => console.error("Error deleting event:", err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="event"
          value={formData.event}
          onChange={handleChange}
          placeholder="Event Name"
          required
        />
        <div className="form-group">
          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            onChange={handleImageUpload}
            accept="image/*"
          />
        </div>
        <input
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="Year (YYYY)"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          name="details"
          value={formData.details}
          onChange={handleChange}
          placeholder="Details (comma-separated)"
          required
        />
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          required
        />
        <input
          name="attendees"
          value={formData.attendees}
          onChange={handleChange}
          placeholder="Number of Attendees"
          required
        />
        <input
          name="theme"
          value={formData.theme}
          onChange={handleChange}
          placeholder="Theme"
          required
        />
        <input
          name="organizer"
          value={formData.organizer}
          onChange={handleChange}
          placeholder="Organizer"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

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
