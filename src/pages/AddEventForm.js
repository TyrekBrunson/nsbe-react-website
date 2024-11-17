import React, { useState } from "react";
import Joi from "joi";

function AddEventForm({ onNewEvent }) {
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
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const schema = Joi.object({
    event: Joi.string().required(),
    img_name: Joi.string().required(),
    date: Joi.string().required(),
    description: Joi.string().required(),
    details: Joi.string().required(),
    location: Joi.string().required(),
    attendees: Joi.number().integer().required(),
    theme: Joi.string().required(),
    organizer: Joi.string().required(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error: validationError } = schema.validate(formData);
    if (validationError) {
      setError(validationError.message);
      return;
    }

    setError("");

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        setSuccess("Event added successfully!");
        onNewEvent(data.newEvent); // Notify parent to update event list
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
      } else {
        setError("Failed to add event.");
      }
    } catch (err) {
      setError("An error occurred while submitting the form.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Event</h3>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <input
        type="text"
        name="event"
        placeholder="Event Name"
        value={formData.event}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="img_name"
        placeholder="Image Name"
        value={formData.img_name}
        onChange={handleChange}
        required
      />
      {/* Add other fields similarly */}
      <button type="submit">Add Event</button>
    </form>
  );
}

export default AddEventForm;
