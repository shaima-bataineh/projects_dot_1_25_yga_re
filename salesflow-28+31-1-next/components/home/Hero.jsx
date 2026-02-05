"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">

        <span className="hero-badge">⚡ Simple CRM for Sales Teams</span>

        <h1 className="hero-title">
          Take Control of Your <br />
          <span className="highlight">Sales Process</span>
        </h1>

        <p className="hero-tagline">
          Manage customers, track deals, and grow revenue — all from one simple platform.
        </p>

        <div className="hero-actions">
          <Link href="/login" className="btn-primary">
            Get Started Free
          </Link>
          <button className="btn-secondary">Request Demo</button>
        </div>

        <p className="hero-trust">
          No credit card required • Free 14-day trial
        </p>
      </div>
    </div>
  );
}
