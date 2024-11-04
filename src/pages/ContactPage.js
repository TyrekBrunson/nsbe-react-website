// src/pages/ContactPage.js

import React from 'react';
import '../style.css';

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can add functionality to submit the form.
    console.log("Form submitted");
    // Display success or error messages as required.
  };

  const toggleOtherInput = (event) => {
    const otherSourceInput = document.getElementById("otherSource");
    otherSourceInput.style.display = event.target.value === "Other" ? "block" : "none";
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or would like to get in touch, please fill out the form below:</p>
      
      {/* Contact Form */}
      <form id="contactForm" action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="b6c18ec8-be9d-42a5-8e6e-316045dabb4e" />

        <label htmlFor="name">Name <span>*</span></label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email <span>*</span></label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message <span>*</span></label>
        <textarea id="message" name="message" rows="4" required></textarea>

        {/* Radio Buttons for "Where did you hear about NSBE?" */}
        <fieldset>
          <legend>Where did you hear about NSBE?</legend>
          <label><input type="radio" name="source" value="Facebook" required /> Facebook</label>
          <label><input type="radio" name="source" value="Instagram" /> Instagram</label>
          <label><input type="radio" name="source" value="LinkedIn" /> LinkedIn</label>
          <label><input type="radio" name="source" value="X" /> X (Twitter)</label>
          <label><input type="radio" name="source" value="YouTube" /> YouTube</label>
          <label><input type="radio" name="source" value="Other" onClick={toggleOtherInput} /> Other</label>
          <input type="text" id="otherSource" name="otherSource" placeholder="Please specify" style={{ display: 'none' }} />
        </fieldset>

        <button type="submit">Submit</button>
        
        {/* Success and Error Messages */}
        <p id="successMessage" style={{ display: 'none', color: '#008000' }}>Thank you! Your message has been sent.</p>
        <p id="errorMessage" style={{ display: 'none', color: 'red' }}>There was an error submitting your form. Please try again.</p>
      </form>

      {/* Embedded Google Map */}
      <div className="iframe-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.8631174127646!2d-81.03251658475066!3d33.98934838062409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bc911a8195c7%3A0xe1a254ec9607209f!2sNational%20Society%20of%20Black%20Engineers!5e0!3m2!1sen!2sus!4v1698354112335!5m2!1sen!2sus" 
          title="NSBE Location" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage;
