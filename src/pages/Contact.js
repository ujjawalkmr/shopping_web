import React from "react";
import "../css_file/Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-wrapper">
        
        {/* Left: Contact Info */}
        <div className="contact-card">
          <h2>Get in Touch</h2>
          <p>Feel free to contact us. We’ll get back to you soon.</p>

          <div className="info">
            <p><strong>Email:</strong> support@example.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> India</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="contact-card">
          <h2>Contact Form</h2>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
}
