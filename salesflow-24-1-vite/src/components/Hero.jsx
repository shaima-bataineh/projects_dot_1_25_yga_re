
import React from "react";
import "../css/home.css";
import moneyVideo from "../assets/money.mp4";
function Hero() {
  return (
    <section className="hero-section">
      <video 
      className="money"
      src={moneyVideo}
      autoPlay
      muted
      loop
      playsInline
      />
      <div className="hero-overlay"></div>
      
      <div className="hero-container">
        
        <div className="hero-content">
          <h1 className="hero-title">
            Manage Your Sales <span className="highlight">Smartly</span>
          </h1>
          <p className="hero-description">
            SalesFlow helps small businesses track sales, manage products, 
            and understand performance in one simple system.
          </p>
          <div className="hero-search d-flex mt-3">
            <input 
            type="text"
            placeholder="Search"
            className="form-control"
            />

            <button className="btn btn-primary ms-2 btn-search">Search</button>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary shadow-btn">Start Free Demo</button>
            <button className="btn btn-secondary shadow-btn">Try Live Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
