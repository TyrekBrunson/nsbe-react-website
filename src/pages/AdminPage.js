import React, { useState, useEffect } from "react";

function AdminPage() {
  const [events, setEvents] = useState([]); // Store events
  const [formData, setFormData] = useState({
    event: "",
    img: null, // Added for image upload
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
  const fetchEvents = async () => {
    try {
      const res = await fetch(
        "https://nsbe-react-website-backend.onrender.com/api/events"
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch events: ${res.statusText}`);
      }
      const data = await res.json();
      setEvents(data); // Update the state with fetched events
    } catch (err) {
      console.error("Error fetching events:", err);
      setError("Failed to load events. Please try again.");
    }
  };

  // Fetch events on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  const validateFormData = () => {
    if (!formData.event) {
      setError("Event name is required.");
      return false;
    }
    if (!formData.date) {
      setError("Date is required.");
      return false;
    }
    if (!formData.description) {
      setError("Description is required.");
      return false;
    }
    if (!formData.details || formData.details.trim() === "") {
      setError("Details are required.");
      return false;
    }
    if (isNaN(parseInt(formData.attendees, 10))) {
      setError("Attendees must be a number.");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, img: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateFormData()) return;
  
    const formattedData = new FormData();
    formattedData.append("event", formData.event);
    formattedData.append("date", formData.date);
    formattedData.append("description", formData.description);
    formattedData.append("details", formData.details.split(",").map((item) => item.trim())); // Convert to array
    formattedData.append("location", formData.location);
    formattedData.append("attendees", parseInt(formData.attendees, 10)); // Ensure number
    formattedData.append("theme", formData.theme);
    formattedData.append("organizer", formData.organizer);
    if (formData.img) {
      formattedData.append("img", formData.img); // Attach the image
    }
  
    try {
      const res = await fetch("http://localhost:3000/api/events", {
        method: "POST",
        body: formattedData,
      });
  
      const data = await res.json();
  
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to add event.");
      }
  
      setSuccess("Event added successfully!");
      setFormData({
        event: "",
        img: null,
        date: "",
        description: "",
        details: "",
        location: "",
        attendees: "",
        theme: "",
        organizer: "",
      });
      fetchEvents(); // Refresh the events list
    } catch (err) {
      console.error("Error submitting data:", err);
      setError("Failed to add event. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `https://nsbe-react-website-backend.onrender.com/api/events/${id}`,
        { method: "DELETE" }
      );
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to delete event.");
      }

      alert("Event deleted successfully!");
      fetchEvents(); // Refresh the events list
    } catch (err) {
      console.error("Error deleting event:", err);
      setError("Failed to delete event. Please try again.");
    }
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="event"
          value={formData.event}
          onChange={handleChange}
          placeholder="Event Name"
          required
        />
        <input
          type="file"
          name="img"
          accept="image/*"
          onChange={handleImageChange}
        />
        {formData.img && (
          <img
            src={URL.createObjectURL(formData.img)}
            alt="Preview"
            style={{ maxWidth: "200px", marginTop: "10px" }}
          />
        )}
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
