import React from "react";
import "../css_file/Contact.css";
// import bg from "/assets/images/contact_backgroun_image.png"

export default function Contact() {
    const bgImage="/assets/images/contact_background_image.png";

  return (
    <div className="contact-age">
              <img src={bgImage} alt="background" className="bg-image" />

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
