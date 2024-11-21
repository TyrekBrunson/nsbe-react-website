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
  const [imageFile, setImageFile] = useState(null); // Store image file
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFormData()) return;

    const formDataToSend = new FormData();
    formDataToSend.append("event", formData.event);
    formDataToSend.append("date", formData.date);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("details", formData.details);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("attendees", formData.attendees);
    formDataToSend.append("theme", formData.theme);
    formDataToSend.append("organizer", formData.organizer);

    if (imageFile) {
      formDataToSend.append("img_name", imageFile);
    }

    try {
      const res = await fetch(
        "https://nsbe-react-website-backend.onrender.com/api/events",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!res.ok) {
        throw new Error("Failed to add event");
      }

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || "Failed to add event.");
      }

      setSuccess("Event added successfully!");
      setFormData({
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
      setImageFile(null);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]); // Set the selected image file
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
          name="img_name"
          accept="image/*"
          onChange={handleImageChange}
        />
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
