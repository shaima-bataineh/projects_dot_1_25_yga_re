

// Assignment: Static Rendering
// Date: 2 Feb 2026


import Link from "next/link";
import Image from "next/image";
import "./about.css";

export const dynamic = 'force-static';  // static page mean the page bulit through bulid process (build time).

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="lux-hero">
        <div className="lux-overlay">
          <h1>Where Sales Experience Meets Smart Technology</h1>
          <p>
            We created SalesFlow after seeing how messy tools slow down real sales teams.
            Our goal is simple: give teams clarity, control, and confidence in every deal
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="story-grid">
          <div className="story-img">
            <Image src="/story.jpg" 
            alt="our story" 
            width={600} 
            height={400}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="story-text">
            <h2>Why We Built SalesFlow</h2>
            <p>SalesFlow was built after seeing sales teams waste hours updating spreadsheets instead of closing deals.</p>
            <p>We believe sales software should work for you — not slow you down. That’s why we built a platform that combines clean design, fast performance, and powerful analytics to help teams grow with confidence.</p>
          </div>
        </div>
      </section>

      <section className="vision-dark">
        <h2>Our Vision</h2>
        <p>To become one of the leading CRM platforms helping businesses grow using smart automation and data-driven insights.</p>
      </section>

      <section className="stats">
        <div className="stats-grid">
          <div><h3>10K+</h3><p>Leads Managed</p></div>
          <div><h3>2X</h3><p>Faster Deal Closing</p></div>
          <div><h3>99%</h3><p>System Reliability</p></div>
        </div>
      </section>

      <section className="glass-cta">
        <div className="glass-box">
          <div className="cta-logo-text">SF</div>
          <h2>Ready to simplify your sales process?</h2>
          <p>SalesFlow helps your team focus on what matters most — closing.</p>
          <Link href="/contact" className="b-book">Book Free Call</Link>
          <div className="cta-email">
            <span>Prefer Email?</span>
            <a href="mailto:info@salesflow.com">info@salesflow.com</a>
          </div>
        </div>
      </section>
    </div>
  );
}
