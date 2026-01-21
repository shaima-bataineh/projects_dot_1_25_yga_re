import React from "react";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Hero />

      <section className="features-section">
        <h2>Why SalesFlow?</h2>
        <p>Track sales, manage products, and grow faster.</p>
      </section>

      <section className="cta-section">
        <h2>Ready to start?</h2>
        <button className="btn btn-accent">Create Account</button>
      </section>
    </>
  );
}

export default Home;


