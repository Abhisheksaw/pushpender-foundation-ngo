import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="headline">Connect With Us</h1>
        <p className="subtext">We're Here to Help and Collaborate</p>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Have questions, suggestions, or want to learn more about Pushpedra
              Foundation? We'd love to hear from you.
            </p>

            <div className="info-item">
              <i className="icon">📍</i>
              <span>Pushpendra Villa, Narpatpur, Varanasi</span>
            </div>
            <div className="info-item">
              <i className="icon">📞</i>
              <span>+91 9118723203</span>
            </div>
            <div className="info-item">
              <i className="icon">📧</i>
              <span>pushpendrafoundation@gmail.com</span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
