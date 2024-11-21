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
      console.log("Fetching events..."); // Log fetching action
      const res = await fetch(
        "https://nsbe-react-website-backend.onrender.com/api/events"
      );
      if (!res.ok) {
        throw new Error(`Failed to fetch events: ${res.statusText}`);
      }
      const data = await res.json();
      console.log("Fetched events:", data); // Log fetched events
      setEvents(data); // Update the state with fetched events
    } catch (err) {
      console.error("Error fetching events:", err); // Log error details
      setError("Failed to load events. Please try again.");
    }
  };

  // Fetch events on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  const validateFormData = () => {
    console.log("Validating form data:", formData); // Log form data before validation
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
    formDataToSend.append("details", formData.details.split(",").map((item) => item.trim())); // Split details into an array
    formDataToSend.append("location", formData.location);
    formDataToSend.append("attendees", parseInt(formData.attendees, 10)); // Convert attendees to a number
    formDataToSend.append("theme", formData.theme);
    formDataToSend.append("organizer", formData.organizer);

    if (imageFile) {
      formDataToSend.append("img_name", imageFile);
    }

    console.log("Submitting data:", formDataToSend); // Log FormData object

    try {
      const res = await fetch(
        "https://nsbe-react-website-backend.onrender.com/api/events",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!res.ok) {
        console.error("Response status:", res.status); // Log response status
        throw new Error("Failed to add event");
      }

      const data = await res.json();

      if (!data.success) {
        console.error("Response data:", data); // Log response data if submission fails
        throw new Error(data.message || "Failed to add event.");
      }

      console.log("Event added successfully:", data); // Log success response
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
      console.error("Error submitting data:", err); // Log submission error
      setError("Failed to add event. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log("Deleting event with ID:", id); // Log event ID being deleted
      const res = await fetch(
        `https://nsbe-react-website-backend.onrender.com/api/events/${id}`,
        { method: "DELETE" }
      );
      const data = await res.json();

      if (!res.ok || !data.success) {
        console.error("Error deleting event:", data); // Log error response
        throw new Error(data.message || "Failed to delete event.");
      }

      console.log("Event deleted successfully:", data); // Log success response
      alert("Event deleted successfully!");
      fetchEvents(); // Refresh the events list
    } catch (err) {
      console.error("Error deleting event:", err); // Log error details
      setError("Failed to delete event. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating form field: ${name} = ${value}`); // Log field changes
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    console.log("Selected image file:", e.target.files[0]); // Log selected image
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
