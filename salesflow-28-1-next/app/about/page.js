"use client";
import "./about.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero fade-up">
        <h1>Built to Simplify Sales</h1>
        <p>
          SalesFlow was created with one goal in mind —
          helping sales teams stay focused, clear, and in control.
        </p>

        <div className="about-media">
        <img
         src="/das11.png"
         alt="Sales dashboard"
        className="hero-image"
         />
          </div>
      </section>

      {/* PROBLEM */}
      <section className="about-section split fade-up">
      <div className="text">
       <h2>The Problem</h2>
       <p className="about-text">
       Sales teams today are overwhelmed by tools that are either
        too simple to scale or too complex to use.
      </p>
    </div>

     <img
      src="/team1.jpg"
      alt="Sales team"
      />
   </section>


      {/* APPROACH */}
      <section className="about-section split fade-up">
      <img
      src="/analysis.jpg"
      alt="Analytics dashboard"
      />

    <div className="text">
     <h2>Our Approach</h2>
     <div className="about-approach">
      <p>Keep things simple.</p>
      <p>Focus on performance.</p>
      <p>Help teams make better decisions — faster.</p>
     </div>
   </div>
  </section>


      {/* CLOSING */}
      <section className="about-closing fade-up">
       <p>
    Built for growing businesses that want control over sales —
    without ERP complexity.
  </p>
  <a href="/services" className="btn-about">Explore Our Services</a>
</section>


    </main>
  );
}
