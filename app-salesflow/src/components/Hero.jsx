import React, { useEffect, useState } from "react";
import DemoBox from "./DemoBox";
import heroImg from "../assets/Business Plan-bro.png";
import TypingEffect from "../components/TypingEffect";

function Hero() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 800); // بعد الكتابة
  }, []);
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-start">

          <div className="col-lg-6">
            <TypingEffect text="Manage Your Sales With a Smarter Flow" speed={300} />
            <p className={`hero-text ${showText ? "show" : ""}`}>
              SalesFlow helps small businesses track sales, manage products,
              and understand performance in one simple system.
            </p>
            <a href="#" className="btn btn-accent">Start Free Demo</a>
            <DemoBox />
          </div>
           {/* RIGHT: IMAGE */}
          <div className="col-lg-6 hero-visual">
            <img
              src={heroImg}
              alt="Sales analytics illustration"
              className="img-fluid hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
