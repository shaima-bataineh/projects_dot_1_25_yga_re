"use client";
import Link from "next/link";

export default function Hero() {

    console.log("ENV DESC:", process.env.NEXT_PUBLIC_APP_DESCRIPTION);

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
         {/* <p>{process.env.NEXT_PUBLIC_APP_DESCRIPTION}</p> */}
         <p className="hero-description">
             Your all-in-one <span className="highlight">CRM</span> to track leads, close deals faster, 
          and grow your <span className="highlight">business efficiently</span>.
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
