import React, { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // YOUR GOOGLE FORM POST URL
  const FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSdMMRgbqBTopt05mVIucuJ_lqTHgVRc8sNZwYKV4QSvu3ljwQ/formResponse";

  // YOUR ENTRY IDs
  const ENTRY_NAME = "entry.512585888";
  const ENTRY_EMAIL = "entry.226593470";
  const ENTRY_MESSAGE = "entry.1546219395";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append(ENTRY_NAME, e.target.name.value);
    formData.append(ENTRY_EMAIL, e.target.email.value);
    formData.append(ENTRY_MESSAGE, e.target.message.value);

    fetch(FORM_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }).then(() => {
      setLoading(false);
      setSuccess(true);

      setTimeout(() => setSuccess(false), 3000);
      e.target.reset();
    });
  };

  return (
    <div>
      <h1 className="section-title">Contact</h1>

      <div className="contact-card">
        {success && <div className="success-toast">Message Sent ✔</div>}

        <h2 className="contact-form-title">Contact Form</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            name="name"
            placeholder="Full Name"
            className="contact-input"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="contact-input"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="contact-textarea"
            required
          ></textarea>

          <button className="contact-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <iframe
          class="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60843.82516034308!2d78.360000!3d17.250000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbcb2c7c3d0e59%3A0xd53ef35cdbd22d7!2sShamshabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000888"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
