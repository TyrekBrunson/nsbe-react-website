import React, { useState } from "react";
import Joi from "joi";

function AdminPage() {
  const [formData, setFormData] = useState({
    dataType: "event",
    title: "",
    description: "",
    image: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Joi validation schema
  const schema = Joi.object({
    dataType: Joi.string().valid("event", "partner", "programming").required(),
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().min(10).max(500).required(),
    image: Joi.string().uri().allow(""), // Optional image URL
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    const { error } = schema.validate(formData, { abortEarly: false });
    if (error) {
      setError(error.details.map((err) => err.message).join(", "));
      setSuccess("");
      return;
    }
    setError("");

    // Make a POST request to your backend
    fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setSuccess("Data successfully submitted!");
          setError("");
          setFormData({ dataType: "event", title: "", description: "", image: "" });
        } else {
          setError("Error submitting data.");
          setSuccess("");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("An unexpected error occurred.");
        setSuccess("");
      });
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="dataType">Select Data Type:</label>
          <select name="dataType" id="dataType" value={formData.dataType} onChange={handleChange}>
            <option value="event">Event</option>
            <option value="partner">Partner</option>
            <option value="programming">Programming</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter Title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Description"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter Image URL"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default AdminPage;
