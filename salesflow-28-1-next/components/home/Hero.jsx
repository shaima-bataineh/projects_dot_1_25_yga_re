"use client";

export default function Hero() {
  return (
    <section className="hero">
    

      <div className="hero-content">
        <span className="hero-badge">⚡ Simple CRM for Sales Teams</span>

        <h1 className="hero-title">
          Take Control of Your Sales
        </h1>

        <p className="hero-tagline">
          Built for growing businesses that want control over sales — without ERP complexity.
        </p>

        <p className="hero-description">
         Manage customers, track deals, and monitor sales performance from one simple dashboard.

        </p>
          <button className="btn-primary">Start Free Trial</button>

        </div>
        <div className="hero-visual">
          <img src="./kpi.jpg" alt="salesflow dashboard"/>
        </div>
    </section>
  );
}
