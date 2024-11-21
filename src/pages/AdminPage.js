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
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

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
      setEvents(data);
    } catch (err) {
      console.error("Error fetching events:", err);
      setError("Failed to load events. Please try again.");
    }
  };

  // Fetch events on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0]; // Get the first file
    if (!file || !file.type.startsWith("image/")) {
      setError("Please drop a valid image file.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(
        "https://nsbe-react-website-backend.onrender.com/api/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to upload image.");
      }

      setFormData((prev) => ({
        ...prev,
        img_name: data.imagePath, // Update the image path
      }));
      setSuccess("Image uploaded successfully!");
    } catch (err) {
      console.error("Error uploading image:", err);
      setError("Failed to upload image. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateFormData();
    if (validationError) {
      setError(validationError);
      return;
    }

    const formattedData = {
      ...formData,
      details: formData.details.split(",").map((item) => item.trim()),
      attendees: parseInt(formData.attendees, 10),
    };

    try {
      const res = await fetch(
        "https://nsbe-react-website-backend.onrender.com/api/events",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formattedData),
        }
      );
      const data = await res.json();

      if (!res.ok || !data.success) {
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
      fetchEvents();
    } catch (err) {
      console.error("Error submitting data:", err);
      setError("Failed to add event. Please try again.");
    }
  };

  const validateFormData = () => {
    if (!formData.event.trim()) return "Event name is required.";
    if (!formData.date.trim()) return "Date is required.";
    if (!formData.description.trim()) return "Description is required.";
    if (!formData.details.trim()) return "Details are required.";
    if (isNaN(parseInt(formData.attendees, 10))) return "Attendees must be a number.";
    return null;
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <div
        className={`drop-area ${dragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        Drag and drop an image here to upload
      </div>

      <form onSubmit={handleSubmit}>
        <input
          name="event"
          value={formData.event}
          onChange={(e) => setFormData({ ...formData, event: e.target.value })}
          placeholder="Event Name"
          required
        />
        <input
          name="img_name"
          value={formData.img_name}
          onChange={(e) => setFormData({ ...formData, img_name: e.target.value })}
          placeholder="Image Name (will be auto-filled)"
          disabled
        />
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
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
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
          onChange={(e) =>
            setFormData({ ...formData, attendees: e.target.value })
          }
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
          onChange={(e) =>
            setFormData({ ...formData, organizer: e.target.value })
          }
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
