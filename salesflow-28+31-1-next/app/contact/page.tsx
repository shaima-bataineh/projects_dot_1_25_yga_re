"use client";
import React, { useState, FormEvent } from "react";
import "./contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thanks ${name}, we received your message!`);
    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* الجانب الأيسر للنص */}
        <div className="contact-text">
          <h1>CONNECT WITH OUR TEAM</h1>
          <p>
            Let’s grow your business together. Reach out to us, and we’ll help
            you take your business to the next level!
          </p>
        </div>

        {/* الجانب الأيمن للفورم */}
        <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            autoComplete="organization"
          />
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            autoComplete="off"
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
