// /app/contact/page.tsx
"use client";
import React, { useState, FormEvent } from "react";
import "./contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thanks ${name}, we received your message!`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact-section">
      <h1 className="bg-text">SALESFLOW</h1>

      <div className="contact-header">
        <h2>CONNECT WITH OUR TEAM</h2>
        <p>Let’s grow your business together</p>
      </div>

      <div className="contact-container">
        {/* الفورم */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input type="text" placeholder="Company" />
          <textarea
            rows={4}
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        {/* صندوق المعلومات */}
        <div className="contact-info">
          <div className="info-row">
            <span>📧</span>
            <div>
              <h4>Sales</h4>
              <p>sales@salesflow.com</p>
            </div>
          </div>
          <div className="info-row">
            <span>🛠</span>
            <div>
              <h4>Support</h4>
              <p>support@salesflow.com</p>
            </div>
          </div>
          <div className="info-row">
            <span>📍</span>
            <div>
              <h4>Location</h4>
              <p>Amman, Jordan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
