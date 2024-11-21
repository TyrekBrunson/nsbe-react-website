import React, { useState, useEffect } from "react";

function AdminPage() {
  const [events, setEvents] = useState([]);
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
  const [imageFile, setImageFile] = useState(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Fetch events from the backend
  const fetchEvents = async () => {
    try {
      console.log("Fetching events...");
      const res = await fetch("https://nsbe-react-website-backend.onrender.com/api/events");
      if (!res.ok) {
        throw new Error(`Failed to fetch events: ${res.statusText}`);
      }
      const data = await res.json();
      console.log("Fetched events:", data);
      setEvents(data);
    } catch (err) {
      console.error("Error fetching events:", err);
      setError("Failed to load events. Please try again.");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const validateFormData = () => {
    console.log("Validating form data:", formData);
    if (!formData.event.trim()) {
      setError("Event name is required.");
      return false;
    }
    if (!formData.date.trim()) {
      setError("Date is required.");
      return false;
    }
    if (!formData.description.trim()) {
      setError("Description is required.");
      return false;
    }
    if (!formData.details.trim()) {
      setError("Details are required.");
      return false;
    }
    if (!Number.isInteger(parseInt(formData.attendees, 10))) {
      setError("Attendees must be a valid number.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any existing errors
    setSuccess(""); // Clear any existing success messages

    if (!validateFormData()) return;

    const formDataToSend = new FormData();
    formDataToSend.append("event", formData.event.trim());
    formDataToSend.append("date", formData.date.trim());
    formDataToSend.append("description", formData.description.trim());
    formDataToSend.append("details", formData.details.trim());
    formDataToSend.append("location", formData.location.trim());
    formDataToSend.append("attendees", parseInt(formData.attendees, 10));
    formDataToSend.append("theme", formData.theme.trim());
    formDataToSend.append("organizer", formData.organizer.trim());

    if (imageFile) {
      formDataToSend.append("img_name", imageFile);
    } else {
      formDataToSend.append("img_name", "default.jpg"); // Provide a default image name if none is uploaded
    }

    console.log("Submitting data:", Object.fromEntries(formDataToSend));

    try {
      const res = await fetch("https://nsbe-react-website-backend.onrender.com/api/events", {
        method: "POST",
        body: formDataToSend,
      });

      console.log("Response status:", res.status);

      if (!res.ok) {
        const errorResponse = await res.json();
        console.error("Server response error:", errorResponse);
        throw new Error(errorResponse.message || "Failed to add event");
      }

      const data = await res.json();
      console.log("Event added successfully:", data);

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
      fetchEvents();
    } catch (err) {
      console.error("Error submitting data:", err.message);
      setError(err.message || "Failed to add event. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    console.log("Selected image file:", e.target.files[0]);
    setImageFile(e.target.files[0]);
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
          onChange={(e) => setFormData({ ...formData, event: e.target.value })}
          placeholder="Event Name"
          required
        />
        <input type="file" name="img_name" accept="image/*" onChange={handleImageChange} />
        <input
          name="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          placeholder="Year (YYYY)"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Description"
          required
        />
        <input
          name="details"
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          placeholder="Details (comma-separated)"
          required
        />
        <input
          name="location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          placeholder="Location"
          required
        />
        <input
          name="attendees"
          value={formData.attendees}
          onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
          placeholder="Number of Attendees"
          required
        />
        <input
          name="theme"
          value={formData.theme}
          onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
          placeholder="Theme"
          required
        />
        <input
          name="organizer"
          value={formData.organizer}
          onChange={(e) => setFormData({ ...formData, organizer: e.target.value })}
          placeholder="Organizer"
          required
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            {event.event} - {event.location} ({event.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPage;
