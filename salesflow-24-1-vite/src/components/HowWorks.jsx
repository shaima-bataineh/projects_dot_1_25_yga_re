import React, { useState, useEffect } from "react";
import heroImg from "../assets/Project Stages-bro.png"; // نفس صورة الصاروخ

const howStages = [
  {
    title: "Discover Needs",
    text: "We analyze your business and understand what you need."
  },
  {
    title: "Plan Strategically",
    text: "We create a plan to optimize your sales workflow."
  },
  {
    title: "Execute Efficiently",
    text: "We implement solutions and monitor results in real-time."
  },
  {
    title: "Optimize & Grow",
    text: "We analyze data and continuously improve performance."
  }
];

function HowWorks() {
  const [activeStage, setActiveStage] = useState(0);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(false); // يخفي النص قبل تغيير المرحلة
    const timer = setTimeout(() => setShowText(true), 300); // يظهر النص بعد 0.3 ثانية
    return () => clearTimeout(timer);
  }, [activeStage]);

  return (
    <section className="how-works-section" id="how">
      <div className="container">
        {/* عنوان القسم */}
    <div className="text-center mb-5">
      <h2>How It Works</h2>
      <p>Follow these steps to see how SalesFlow can boost your sales.</p>
    </div>
        <div className="row align-items-center">

          {/* LEFT - النصوص */}
          <div className="col-lg-6">
            <h2 className="how-title">{howStages[activeStage].title}</h2>

            <p className={`how-text ${showText ? "show" : ""}`}>
              {howStages[activeStage].text}
            </p>

            {/* أزرار المراحل */}
            <div className="how-stages mt-3">
              {howStages.map((stage, index) => (
                <button
                  key={index}
                  className={`stage-btn ${activeStage === index ? "active" : ""}`}
                  onClick={() => setActiveStage(index)}
                >
                  {stage.title}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT - نفس صورة الصاروخ */}
          <div className="col-lg-6 d-flex justify-content-center hero-visual">
            <img
              src={heroImg}
              alt="How We Work Rocket"
              className={`hero-image stage-${activeStage}`}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default HowWorks;
